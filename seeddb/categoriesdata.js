const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/zomato_clone",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

var db=mongoose.connection;

const categories=require("../src/models/categories")
async function seeddb(){
    async function seedcat(titlestr){
        try{
            const cat=await new categories({
                catename:titlestr
            })
            await cat.save()
        }
        catch(error){
            console.log("error")
            return error
        }

    }

    async function closedb(){
        console.log("closing connection")
        await mongoose.disconnect()
    }

    await seedcat("Non-veg")
    await seedcat("Chats")
    await seedcat("Veg")
    await seedcat("Breakfast")
    await seedcat("Soups")
    await seedcat("Drinks")
    await closedb()
}
seeddb()
    



