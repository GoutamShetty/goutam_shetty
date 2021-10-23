const express=require("express");
const bodyParser=require("body-parser")
const mongoose=require("mongoose")
const ejs=require("ejs")

//Models
const users = require("./src/models/user");
const foods=require("./src/models/foods")
const restaurant=require("./src/models/restaurant")
const categories=require("./src/models/categories")
const carts=require("./src/models/cart")
const orders=require("./src/models/order")
//Define app

const app = express();

var n={}

// Use the body parser
app.use(bodyParser.json());
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine','ejs')


// Estblish DB connection
mongoose.connect("mongodb://localhost:27017/zomato_clone",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

var db=mongoose.connection;

//Define routes/pages
app.get('/',function(request,response) {
    response.set({
        "Allow-access-Allow-Origin":'*'
    })
     response.render('zomato')

})

//Defines routes to create,read,update,delete(CRUD) foods


app.post("/signup",async(req,res)=>{
try{
    const password=req.body.pass
    const cpassword=req.body.confirmpass
    if(password===cpassword){
        const user=new users({username:req.body.username,
        emailid:req.body.emailid,
        password:req.body.pass,
        confirmpassword:req.body.confirmpass
    })
    await user.save()
    n=user.username
    res.render("afterlogin",{profilename:n})

    }
    else{
        res.render('login',{failure:'password is not matching'});                                           
    }
}
catch(error){
    res.status(400).render("login",{failure:'Email already exists'})
    }
})

app.get("/signup",async(req,res)=>{
    res.render('login',{failure:''});
})


app.post("/login",async(req,res)=>{
    try{
        var email=req.body.email;
        var pass=req.body.pass;
        const useremail=await users.findOne({emailid:email})
        n=useremail.username

        if (useremail.password===pass){
            res.render('afterlogin',{profilename:n})

        }
        else{
            res.render("login",{failure:'password is wrong'});
        }
    }catch(error){
        res.status(400).render("login",{failure:'Email is not registered'})
    }

    
})

app.get('/login',(req,res)=>{
    res.render('login',{failure:''})
})

app.get('/afterlogin',(req,res)=>{
    res.render('afterlogin',{profilename:''})
})






app.get("/food/:id",async(req,res)=>{
    try{
        const x=req.params.id;
        
        const f=await foods.find({restaurant:x})
        const r=await restaurant.findOne({_id:x})
        const c=await categories.find()
        
        res.render("foodsview",{
            profilename:n,
            restname:r.restaurantname,
            products:f,
            category:c
        })
    }
    catch(error){
        console.log(error)
    }
})

app.get("/add-to-cart/:id",async(req,res)=>{
    const foodid=req.params.id;
    
    try{
    const u=await users.findOne({username:n})
    
    const user_cart=await carts.findOne({user:u._id})
    
    let cart;
    if(user_cart==null){
         cart=new carts()
    }
    else{
         cart=user_cart;
    }
    const product = await foods.findById(foodid);
    const itemindex= cart.items.findIndex((p)=>p.foodid==foodid);
    
    if(itemindex > -1){
        cart.items[itemindex].qty++;
        cart.items[itemindex].price=cart.items[itemindex].qty*product.price;
        cart.totalQty++;
        cart.totalCost+=product.price;
    }
    else{
        
        const rest=await restaurant.findById(product.restaurant)
        cart.items.push({
            foodid:foodid,
            qty:1,
            price:product.price,
            foodname:product.name,
            restaurantname:rest.restaurantname
            
        })
        cart.totalQty++;
        cart.totalCost+=product.price;
        cart.user=u._id;
    }
    await cart.save()
    res.redirect(req.headers.referer);
    }catch(error){
        console.log(error)
        res.redirect("/")
    }
})
app.get("/your-cart",async(req,res)=>{
    try{
        const u=await users.findOne({username:n})
        const cart_user=await carts.findOne({user:u._id})
        if(cart_user){
            res.render("your-cart",{
                cart:cart_user,
                pageName:"Your Cart",
                products:await productsFromCart(cart_user),
                profilename:n
            });
        }
        else{
            res.render("your-cart",{
                cart:null,
                pageName:"Your Cart",
                products:null,
                profilename:n
            
            })
        }
    }
    catch(error){
        console.log(error)
        res.redirect("/")
    }
})

app.get("/reduce/:id",async(req,res) => {
    try{
        const foodid=req.params.id;
        const u=await users.findOne({username:n})
        const cart=await carts.findOne({user:u._id})
        const itemindex= cart.items.findIndex((p)=>p.foodid==foodid);
        if(itemindex > -1){
            const product = await foods.findById(foodid);
            cart.items[itemindex].qty--;
            cart.items[itemindex].price-=product.price;
            cart.totalQty--;
            cart.totalCost-=product.price;
            if (cart.items[itemindex].qty <= 0) {
                await cart.items.remove({ _id: cart.items[itemindex]._id });

            }
            await cart.save()
            if(cart.totalQty<=0){
                await carts.findByIdAndRemove(cart._id)
            }
        }
        res.redirect(req.headers.referer)
    }
    catch(error){
        console.log(error)
        res.redirect("/")
    }
})

app.get("/removeAll/:id",async(req,res)=>{
    try{
        const foodid=req.params.id;
        const u=await users.findOne({username:n})
        const cart=await carts.findOne({user:u._id})
        const itemindex= cart.items.findIndex((p)=>p.foodid==foodid);
        if(itemindex>-1){
            cart.totalQty-=cart.items[itemindex].qty;
            cart.totalCost-=cart.items[itemindex].price;
            await cart.items.remove({_id:cart.items[itemindex]._id})

        }
        await cart.save();
        if(cart.totalQty<=0){
            await carts.findByIdAndRemove(cart._id)
        }
    
    res.redirect(req.headers.referer)
    }
    catch(error){
        console.log(error)
        res.redirect("/")
    }
})

app.get("/checkout",async(req,res)=>{
    try{
        const u=await users.findOne({username:n})
        const cart=await carts.findOne({user:u._id})
    
        res.render("checkout",{
            profilename:n,

        })
    }
    catch(error){
        console.log(error)
        res.redirect("/")
    }
})

app.post("/checkout",async(req,res)=>{
    try{
        
        const u=await users.findOne({username:n})
        const cart=await carts.findOne({user:u._id})
        
        
        const order=new orders({
            user:u._id,
            cart:{
                totalqty:cart.totalQty,
                totalcost:cart.totalCost,
                items:cart.items
            },
            address:req.body.address,
            payment:"Yes"
        })
        await order.save()
        
        await cart.save()
        await carts.findByIdAndDelete(cart._id)
        res.render("afterlogin",{profilename:n})
    }
    catch(error){
        console.log(error)
        res.redirect("/")
    }
})
app.get('/search',async(req,res)=>{
    try{
        
        var products=await restaurant.find({
            restaurantname:{$regex:req.query.search,$options:"i"}
        })
        
        const c=await categories.find()
        const r=await restaurant.find()
        if(products.length==0)
        {
            products=await foods.find({
                name:{$regex:req.query.search,$options:"i"}
            })
            
            if(products.length==0){
                res.render("searches",{
                    pageName:"No Results Found",
                    products,
                    profilename:n

                })
            }
            else{
                res.render("searches",{
                    pageName:"Results of food",
                    products,
                    category:c,
                    profilename:n,
                    rest:r
            })
        }
        }
        else{

        res.render("searches",{
            pageName:"Search Results",
            products,
            profilename:n
        })
    }
    }
    catch(error){
        console.log(error)
        res.redirect("/")
    }
})

async function productsFromCart(cart){
    let products=[];
    for(const item of cart.items){
        let found=(
            await foods.findById(item.foodid)
        ).toObject();
        found["qty"]=item.qty;
        found["totalPrice"]=item.price;
        products.push(found)
    }
    return products;
}

app.get("/:restaurantlocation",async(req,res)=>{
    try{
        const x=req.params.restaurantlocation;
        const fres=await restaurant.find({restaurantlocation:x})
        res.render('location',{
            pageName:fres.restaurantname,
            products:fres,
            profilename:n
        })
    }
    catch(error){
        console.log(error);
    }
})

app.get("/xyz/:id",async(req,res)=>{
    try{
        var products=await foods.find({
            name:{$regex:req.params.id,$options:"i"}
        })
        const c=await categories.find()
        const r=await restaurant.find()
        res.render("searches",{
            pageName:"Results of food",
            products,
            category:c,
            profilename:n,
            rest:r
        })
    }
    catch(error){
        console.log(error)
        res.redirect('/')
    }
})

//Start server
app.listen(3000,function(){
    console.log("zomato clone Server running at 3000")
})


