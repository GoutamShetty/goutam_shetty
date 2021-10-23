const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/zomato_clone",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

var db=mongoose.connection;

const rest=require("../src/models/restaurant")
const cat=require("../src/models/categories")
const foods=require("../src/models/foods")
const faker=require("faker")

async function seeddb(){
    faker.seed(0)
    //whitefield
    //freshfood
    const FreshFoodname=[
        "Biryani","Dosa","Sandwich","Eggs Benedict","Gumbo","Gobi Manchurian"
    ]
    const FreshFooddesc=["This poached red onion lunch is marginally grainy with a tough texture. It compares to asparagus beans with coriander-blair and has a tiny bit of lungwort. It smells like metal with a dash of carissa. It is salty sweet. You can really feel how kosher certified and how no fillers it is.",
    "This whipped broccoli casserole is altogether stringy with a burned texture. It has subtle hints of black adzuki beans with lemongrass and has an overwhelming amount of tansy. It smells vinegary with stinging nettles. It is agreeable. You can really feel how non-GMO and how high in vitamin B it is.",
    "This blanched leaf lettuce bisque is reasonably doughy with a soft texture. It embodies the essence of grapes with tarragon and has mint. It smells spicy with a hint of bread. It is somewhat nutty. You can really feel how unsalted and how alkaline it is.",
    "This blackened anasazi beans appetizer is thoroughly doughy with a fluffy texture. It is nothing like kumquat with sweet cicely and has a bit of savory. It smells rancid with a lot of bread. It is peculiarly delicate. You can really feel how no artificial sweeteners and how high in magnesium it is.",
    "This baked pitanga turnover is altogether flaky with a gooey texture. It has a tinge of snow peas with ginger and has a hint of pumpkin spice. It smells like copper with a large amount of celeriac. It is raw and starchy. You can really feel how BPA-free and how high in enzymes it is.",
    "This infused leeks cutlet is completely stringy with a gooey texture. It is nothing like black adzuki beans with turmeric and has a touch of angelica. It smells light with just the right amount of gooseberries. It is woodsy and adventurous. You can really feel how high in potassium and how organic it is."
    ]
    const FreshFoodImg=["https://b.zmtcdn.com/data/pictures/8/19466578/572159e4adf73a600c63b56e94bd852d.jpg",
    "https://static.toiimg.com/thumb/63841432.cms?width=1200&height=900",
    "https://i0.wp.com/vegecravings.com/wp-content/uploads/2021/02/Mayonnaise-Sandwish-Recipe-Step-By-Step-Instructions-scaled.jpg?fit=2560%2C1890&quality=65&strip=all&ssl=1",
    "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2021%2F01%2F08%2Feggs-benny-toast-FT-RECIPE0221.jpg&q=85",
    "https://tastesbetterfromscratch.com/wp-content/uploads/2017/11/Gumbo-10.jpg",
    "https://www.awesomecuisine.com/wp-content/uploads/2008/03/cauliflower_65.jpg"
    ]

    const FreshFoodcat=["Non-veg","Breakfast","Chats","Non-veg","Non-veg","Chats"]

    //Best Food
    const BestFoodname=[
        "Ragi Mudde","Dosa","Tea","Butter Chicken","Samosa"
    ]
    const  BestFooddesc=["This poached red onion lunch is marginally grainy with a tough texture. It compares to asparagus beans with coriander-blair and has a tiny bit of lungwort. It smells like metal with a dash of carissa. It is salty sweet. You can really feel how kosher certified and how no fillers it is.",
    "This whipped broccoli casserole is altogether stringy with a burned texture. It has subtle hints of black adzuki beans with lemongrass and has an overwhelming amount of tansy. It smells vinegary with stinging nettles. It is agreeable. You can really feel how non-GMO and how high in vitamin B it is.",
    "This blanched leaf lettuce bisque is reasonably doughy with a soft texture. It embodies the essence of grapes with tarragon and has mint. It smells spicy with a hint of bread. It is somewhat nutty. You can really feel how unsalted and how alkaline it is.",
    "This blackened anasazi beans appetizer is thoroughly doughy with a fluffy texture. It is nothing like kumquat with sweet cicely and has a bit of savory. It smells rancid with a lot of bread. It is peculiarly delicate. You can really feel how no artificial sweeteners and how high in magnesium it is.",
    "This baked pitanga turnover is altogether flaky with a gooey texture. It has a tinge of snow peas with ginger and has a hint of pumpkin spice. It smells like copper with a large amount of celeriac. It is raw and starchy. You can really feel how BPA-free and how high in enzymes it is."
    ]
    const  BestFoodImg=["https://www.sharmispassions.com/wp-content/uploads/2019/06/RagiMudde4-475x500.jpg",
    "https://static.toiimg.com/thumb/63841432.cms?width=1200&height=900",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaMHVrDT-4jnOZuJiLNhciEuVVVwU0jCjayA&usqp=CAU",
    "https://cafedelites.com/wp-content/uploads/2019/01/Butter-Chicken-IMAGE-64.jpg",
    "https://static.toiimg.com/thumb/61050397.cms?width=1200&height=900"
    ]

    const  BestFoodcat=["Breakfast","Breakfast","Drinks","Non-veg","Chats"]

    //Royal Food
    const RoyalFoodname=[
        "Biryani","Masala Dosa","Panipuri","Chicken 65","Chana masala"
    ]
    const  RoyalFooddesc=["This poached red onion lunch is marginally grainy with a tough texture. It compares to asparagus beans with coriander-blair and has a tiny bit of lungwort. It smells like metal with a dash of carissa. It is salty sweet. You can really feel how kosher certified and how no fillers it is.",
    "This whipped broccoli casserole is altogether stringy with a burned texture. It has subtle hints of black adzuki beans with lemongrass and has an overwhelming amount of tansy. It smells vinegary with stinging nettles. It is agreeable. You can really feel how non-GMO and how high in vitamin B it is.",
    "This blanched leaf lettuce bisque is reasonably doughy with a soft texture. It embodies the essence of grapes with tarragon and has mint. It smells spicy with a hint of bread. It is somewhat nutty. You can really feel how unsalted and how alkaline it is.",
    "This blackened anasazi beans appetizer is thoroughly doughy with a fluffy texture. It is nothing like kumquat with sweet cicely and has a bit of savory. It smells rancid with a lot of bread. It is peculiarly delicate. You can really feel how no artificial sweeteners and how high in magnesium it is.",
    "This baked pitanga turnover is altogether flaky with a gooey texture. It has a tinge of snow peas with ginger and has a hint of pumpkin spice. It smells like copper with a large amount of celeriac. It is raw and starchy. You can really feel how BPA-free and how high in enzymes it is."
    ]
    const  RoyalFoodImg=["https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/9/0/FNK_the-best-biryani_H.JPG.rend.hgtvcom.616.462.suffix/1568143107638.jpeg",
    "https://vismaifood.com/storage/app/uploads/public/8b4/19e/427/thumb__1200_0_0_0_auto.jpg",
    "https://static.toiimg.com/thumb/61048461.cms?imgsize=1981854&width=800&height=800",
    "https://1.bp.blogspot.com/-yJBQwqQcUOs/X5gtEJXEoCI/AAAAAAAAY94/gut_UssF__8lT0P2kl9patf4FY-U4YCtQCLcBGAsYHQ/w1200-h630-p-k-no-nu/chicken%2B65%2B4.JPG",
    "https://cookieandkate.com/images/2020/03/vegan-chana-masala-recipe-2.jpg"
    ]

    const  RoyalFoodcat=["Non-veg","Breakfast","Chats","Non-veg","Veg"]

    //Grand Food
    const GrandFoodname=[
        "Rogan josh","Neer Dosa","Chole Bhature","Tandoori Chicken","Jalebi","Momo"
    ]
    const  GrandFooddesc=["This poached red onion lunch is marginally grainy with a tough texture. It compares to asparagus beans with coriander-blair and has a tiny bit of lungwort. It smells like metal with a dash of carissa. It is salty sweet. You can really feel how kosher certified and how no fillers it is.",
    "This whipped broccoli casserole is altogether stringy with a burned texture. It has subtle hints of black adzuki beans with lemongrass and has an overwhelming amount of tansy. It smells vinegary with stinging nettles. It is agreeable. You can really feel how non-GMO and how high in vitamin B it is.",
    "This blanched leaf lettuce bisque is reasonably doughy with a soft texture. It embodies the essence of grapes with tarragon and has mint. It smells spicy with a hint of bread. It is somewhat nutty. You can really feel how unsalted and how alkaline it is.",
    "This blackened anasazi beans appetizer is thoroughly doughy with a fluffy texture. It is nothing like kumquat with sweet cicely and has a bit of savory. It smells rancid with a lot of bread. It is peculiarly delicate. You can really feel how no artificial sweeteners and how high in magnesium it is.",
    "This baked pitanga turnover is altogether flaky with a gooey texture. It has a tinge of snow peas with ginger and has a hint of pumpkin spice. It smells like copper with a large amount of celeriac. It is raw and starchy. You can really feel how BPA-free and how high in enzymes it is.",
    "This seared broccoli rabe gyro is moderately slimy with a gooey texture. It pairs with great northern beans with ginger and has a large amount of rue. It smells like cork with just the right amount of dock. It is pleasantly spicy. You can really feel how BPA-free and how vegan it is."
    ]
    const  GrandFoodImg=["https://static.toiimg.com/photo/53192600.cms",
    "https://static.toiimg.com/thumb/53541904.cms?imgsize=168967&width=800&height=800",
    "https://static.toiimg.com/photo/53314156.cms",
    "https://www.cubesnjuliennes.com/wp-content/uploads/2019/11/Tandoori-Chicken-1.jpg",
    "https://static.toiimg.com/thumb/53099699.cms?width=1200&height=900",
    "https://www.thecuriouschickpea.com/wp-content/uploads/2018/12/Tibetan-Veggie-Momos-1.jpg"
    ]

    const  GrandFoodcat=["Non-veg","Breakfast","Veg","Non-veg","Chats","Chats"]
    
    //Spice Food
    const SpiceFoodname=[
        "Chapati","Tomato Dosa","Aloo Keema","Palak Paneer","Gulab Jamun"
    ]
    const  SpiceFooddesc=["This poached red onion lunch is marginally grainy with a tough texture. It compares to asparagus beans with coriander-blair and has a tiny bit of lungwort. It smells like metal with a dash of carissa. It is salty sweet. You can really feel how kosher certified and how no fillers it is.",
    "This whipped broccoli casserole is altogether stringy with a burned texture. It has subtle hints of black adzuki beans with lemongrass and has an overwhelming amount of tansy. It smells vinegary with stinging nettles. It is agreeable. You can really feel how non-GMO and how high in vitamin B it is.",
    "This blanched leaf lettuce bisque is reasonably doughy with a soft texture. It embodies the essence of grapes with tarragon and has mint. It smells spicy with a hint of bread. It is somewhat nutty. You can really feel how unsalted and how alkaline it is.",
    "This blackened anasazi beans appetizer is thoroughly doughy with a fluffy texture. It is nothing like kumquat with sweet cicely and has a bit of savory. It smells rancid with a lot of bread. It is peculiarly delicate. You can really feel how no artificial sweeteners and how high in magnesium it is.",
    "This baked pitanga turnover is altogether flaky with a gooey texture. It has a tinge of snow peas with ginger and has a hint of pumpkin spice. It smells like copper with a large amount of celeriac. It is raw and starchy. You can really feel how BPA-free and how high in enzymes it is."
    ]
    const  SpiceFoodImg=["https://www.vegkitchen.com/wp-content/uploads/2007/09/Homemade-Chapatis.jpg",
    "https://1.bp.blogspot.com/-ecWMPtR69r0/XZJUV6E37dI/AAAAAAAAQHc/yszBWR4Oq0wANquox1xTVgbR8IxthgKOwCLcBGAsYHQ/s1600/DSC_0723.JPG",
    "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F6282786.jpg&q=85",
    "https://www.indianveggiedelight.com/wp-content/uploads/2017/10/palak-paneer-featured.jpg",
    "https://recipesofhome.com/wp-content/uploads/2020/08/gulab-jamun-recipe-720x720.jpg"
    ]

    const  SpiceFoodcat=["Breakfast","Breakfast","Veg","Veg","Veg"]

    //Jayanagar
    //Popeyes
    const Popeyesname=[
        "Chicken Tikka","Idli","Korma","Mutton Keema","Ras Malai"
    ]
    const  Popeyesdesc=["This poached red onion lunch is marginally grainy with a tough texture. It compares to asparagus beans with coriander-blair and has a tiny bit of lungwort. It smells like metal with a dash of carissa. It is salty sweet. You can really feel how kosher certified and how no fillers it is.",
    "This whipped broccoli casserole is altogether stringy with a burned texture. It has subtle hints of black adzuki beans with lemongrass and has an overwhelming amount of tansy. It smells vinegary with stinging nettles. It is agreeable. You can really feel how non-GMO and how high in vitamin B it is.",
    "This blanched leaf lettuce bisque is reasonably doughy with a soft texture. It embodies the essence of grapes with tarragon and has mint. It smells spicy with a hint of bread. It is somewhat nutty. You can really feel how unsalted and how alkaline it is.",
    "This blackened anasazi beans appetizer is thoroughly doughy with a fluffy texture. It is nothing like kumquat with sweet cicely and has a bit of savory. It smells rancid with a lot of bread. It is peculiarly delicate. You can really feel how no artificial sweeteners and how high in magnesium it is.",
    "This baked pitanga turnover is altogether flaky with a gooey texture. It has a tinge of snow peas with ginger and has a hint of pumpkin spice. It smells like copper with a large amount of celeriac. It is raw and starchy. You can really feel how BPA-free and how high in enzymes it is."
    ]
    const  PopeyesImg=["https://pipingpotcurry.com/wp-content/uploads/2019/10/Chicken-Tikka-Instant-Pot-Crisplid-Piping-Pot-Curry.jpg",
    "https://www.ticklingpalates.com/wp-content/uploads/2020/06/Soft-Spongy-Idli-Recipe.jpg",
    "https://static.toiimg.com/thumb/61709928.cms?width=1200&height=900",
    "https://www.indianhealthyrecipes.com/wp-content/uploads/2018/08/mutton-keema-recipe.jpg",
    "https://www.cookwithmanali.com/wp-content/uploads/2014/07/Rasmalai-Recipe.jpg"
    ]

    const  Popeyescat=["Non-veg","Breakfast","Non-veg","Non-veg","Veg"]

    //Cafe-Restaurant
    const Caferestname=[
        "Fried Rice","Kaju Masala","Schezwan Fried Rice","Egg Fried Rice","Chicken Rolls","Veg pulao"
    ]
    const  Caferestdesc=["This poached red onion lunch is marginally grainy with a tough texture. It compares to asparagus beans with coriander-blair and has a tiny bit of lungwort. It smells like metal with a dash of carissa. It is salty sweet. You can really feel how kosher certified and how no fillers it is.",
    "This whipped broccoli casserole is altogether stringy with a burned texture. It has subtle hints of black adzuki beans with lemongrass and has an overwhelming amount of tansy. It smells vinegary with stinging nettles. It is agreeable. You can really feel how non-GMO and how high in vitamin B it is.",
    "This blanched leaf lettuce bisque is reasonably doughy with a soft texture. It embodies the essence of grapes with tarragon and has mint. It smells spicy with a hint of bread. It is somewhat nutty. You can really feel how unsalted and how alkaline it is.",
    "This blackened anasazi beans appetizer is thoroughly doughy with a fluffy texture. It is nothing like kumquat with sweet cicely and has a bit of savory. It smells rancid with a lot of bread. It is peculiarly delicate. You can really feel how no artificial sweeteners and how high in magnesium it is.",
    "This baked pitanga turnover is altogether flaky with a gooey texture. It has a tinge of snow peas with ginger and has a hint of pumpkin spice. It smells like copper with a large amount of celeriac. It is raw and starchy. You can really feel how BPA-free and how high in enzymes it is.",
    "This poached teff burrito is utterly hearty with a smooth texture. It resembles green pepper with scullcap and has a large amount of lemon balm. It smells putrid with a large amount of mustard. It is sweet and divine. You can really feel how paleo-friendly and how low calorie it is."
    ]
    const  CaferestImg=["https://www.vegrecipesofindia.com/wp-content/uploads/2013/08/fried-rice-2.jpg",
    "https://www.cookwithmanali.com/wp-content/uploads/2021/07/Kaju-Masala-Kaju-Curry-500x375.jpg",
    "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/schezwan-fried-rice-recipe.jpg",
    "https://myfoodstory.com/wp-content/uploads/2020/02/Egg-Fried-Rice-3.jpg",
    "https://static.toiimg.com/thumb/53210540.cms?imgsize=166061&width=800&height=800",
    "https://cdn1.foodviva.com/static-content/food-images/rice-recipes/vegetable-pulav-recipe/vegetable-pulav-recipe.jpg"
    ]

    const  Caferestcat=["Veg","Veg","Veg","Non-veg","Chats","Veg"]

    //Uday Bhojnalay
    const Udayrestname=[
        "Ghee Rice","Paneer Chilli","Brain Pepper Dry","Kadai Paneer","Ros Falooda"
    ]
    const  Udayrestdesc=["This poached red onion lunch is marginally grainy with a tough texture. It compares to asparagus beans with coriander-blair and has a tiny bit of lungwort. It smells like metal with a dash of carissa. It is salty sweet. You can really feel how kosher certified and how no fillers it is.",
    "This whipped broccoli casserole is altogether stringy with a burned texture. It has subtle hints of black adzuki beans with lemongrass and has an overwhelming amount of tansy. It smells vinegary with stinging nettles. It is agreeable. You can really feel how non-GMO and how high in vitamin B it is.",
    "This blanched leaf lettuce bisque is reasonably doughy with a soft texture. It embodies the essence of grapes with tarragon and has mint. It smells spicy with a hint of bread. It is somewhat nutty. You can really feel how unsalted and how alkaline it is.",
    "This blackened anasazi beans appetizer is thoroughly doughy with a fluffy texture. It is nothing like kumquat with sweet cicely and has a bit of savory. It smells rancid with a lot of bread. It is peculiarly delicate. You can really feel how no artificial sweeteners and how high in magnesium it is.",
    "This baked pitanga turnover is altogether flaky with a gooey texture. It has a tinge of snow peas with ginger and has a hint of pumpkin spice. It smells like copper with a large amount of celeriac. It is raw and starchy. You can really feel how BPA-free and how high in enzymes it is."
    ]
    const  UdayrestImg=["https://www.indianhealthyrecipes.com/wp-content/uploads/2019/07/ghee-rice-recipe.jpg",
    "https://www.cookwithmanali.com/wp-content/uploads/2016/01/Chilli-Paneer-Restaurant-Style-500x375.jpg",
    "https://www.spiceindiaonline.com/wp-content/uploads/2018/12/Goat-Brain-Pepper-Fry-1.jpg",
    "https://www.indianhealthyrecipes.com/wp-content/uploads/2016/03/kadai-paneer-1-500x500.jpg",
    "https://ministryofcurry.com/wp-content/uploads/2020/05/rose-falooda-6-850x1275.jpg"
    ]

    const  Udayrestcat=["Veg","Veg","Non-veg","Veg","Drinks"]

    //Chipotle
    const Chipotlename=[
        "Dragon Chicken","Veg Kolhapuri","Mushroom Pulao","Kadai Paneer","Onion Salad"
    ]
    const  Chipotledesc=["This poached red onion lunch is marginally grainy with a tough texture. It compares to asparagus beans with coriander-blair and has a tiny bit of lungwort. It smells like metal with a dash of carissa. It is salty sweet. You can really feel how kosher certified and how no fillers it is.",
    "This whipped broccoli casserole is altogether stringy with a burned texture. It has subtle hints of black adzuki beans with lemongrass and has an overwhelming amount of tansy. It smells vinegary with stinging nettles. It is agreeable. You can really feel how non-GMO and how high in vitamin B it is.",
    "This blanched leaf lettuce bisque is reasonably doughy with a soft texture. It embodies the essence of grapes with tarragon and has mint. It smells spicy with a hint of bread. It is somewhat nutty. You can really feel how unsalted and how alkaline it is.",
    "This blackened anasazi beans appetizer is thoroughly doughy with a fluffy texture. It is nothing like kumquat with sweet cicely and has a bit of savory. It smells rancid with a lot of bread. It is peculiarly delicate. You can really feel how no artificial sweeteners and how high in magnesium it is.",
    "This baked pitanga turnover is altogether flaky with a gooey texture. It has a tinge of snow peas with ginger and has a hint of pumpkin spice. It smells like copper with a large amount of celeriac. It is raw and starchy. You can really feel how BPA-free and how high in enzymes it is."
    ]
    const  ChipotleImg=["https://theyummydelights.com/wp-content/uploads/2020/06/dragon-chicken-4.jpg",
    "https://www.spiceupthecurry.com/wp-content/uploads/2020/01/veg-kolhapuri-recipe-2.jpg",
    "https://www.vegrecipesofindia.com/wp-content/uploads/2010/09/mushroom-pulao-recipe-1-500x500.jpg",
    "https://www.cookwithmanali.com/wp-content/uploads/2017/03/Best-Kadai-Paneer.jpg",
    "https://cookthestory.com/wp-content/uploads/2019/09/Brazilian-Onion-Salad-1392x780.jpg"
    ]

    const  Chipotlecat=["Non-veg","Veg","Veg","Veg","Veg"]

    //Nintey-Nine
    const nintyname=[
        "Creamy Tuscan Chicken Spaghetti","Paneer Butter Masala-Thali","Classic Mac 'n' Cheese","Ultimate Burrito Bowl","Bun Omelette"
    ]
    const  nintydesc=["This poached red onion lunch is marginally grainy with a tough texture. It compares to asparagus beans with coriander-blair and has a tiny bit of lungwort. It smells like metal with a dash of carissa. It is salty sweet. You can really feel how kosher certified and how no fillers it is.",
    "This whipped broccoli casserole is altogether stringy with a burned texture. It has subtle hints of black adzuki beans with lemongrass and has an overwhelming amount of tansy. It smells vinegary with stinging nettles. It is agreeable. You can really feel how non-GMO and how high in vitamin B it is.",
    "This blanched leaf lettuce bisque is reasonably doughy with a soft texture. It embodies the essence of grapes with tarragon and has mint. It smells spicy with a hint of bread. It is somewhat nutty. You can really feel how unsalted and how alkaline it is.",
    "This blackened anasazi beans appetizer is thoroughly doughy with a fluffy texture. It is nothing like kumquat with sweet cicely and has a bit of savory. It smells rancid with a lot of bread. It is peculiarly delicate. You can really feel how no artificial sweeteners and how high in magnesium it is.",
    "This baked pitanga turnover is altogether flaky with a gooey texture. It has a tinge of snow peas with ginger and has a hint of pumpkin spice. It smells like copper with a large amount of celeriac. It is raw and starchy. You can really feel how BPA-free and how high in enzymes it is."
    ]
    const  nintyImg=["https://foodtasia.com/wp-content/uploads/2019/02/tuscan-pasta-20.jpg",
    "https://previews.123rf.com/images/indianfoodimages/indianfoodimages1911/indianfoodimages191100254/134231923-indian-vegetarian-food-thali-or-platter-includes-paneer-butter-masala-dal-makhani-tarka-chole-papad-.jpg",
    "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F5445825.jpg",
    "https://s3-ap-southeast-1.amazonaws.com/foodvista.1/d1f0facf-94b7-4d9b-bfe9-a5a701a718fa.jpg",
    "https://d3gy1em549lxx2.cloudfront.net/7e110f2a-a8fa-4ee5-afd8-161f00fb453d.jpg"
    ]

    const  nintycat=["Non-veg","Veg","Veg","Veg","Non-veg"]

    //Basavanagudi
    //Thangabali
    const Thangabaliname=[
        "Rava Masala Dosa","Tea","Veg Manchow Soup","Chicken Manchow Soup","Lee Fu Paneer","Pepper Lemon Chicken Gravy"
    ]
    const  Thangabalidesc=["This poached red onion lunch is marginally grainy with a tough texture. It compares to asparagus beans with coriander-blair and has a tiny bit of lungwort. It smells like metal with a dash of carissa. It is salty sweet. You can really feel how kosher certified and how no fillers it is.",
    "This whipped broccoli casserole is altogether stringy with a burned texture. It has subtle hints of black adzuki beans with lemongrass and has an overwhelming amount of tansy. It smells vinegary with stinging nettles. It is agreeable. You can really feel how non-GMO and how high in vitamin B it is.",
    "This blanched leaf lettuce bisque is reasonably doughy with a soft texture. It embodies the essence of grapes with tarragon and has mint. It smells spicy with a hint of bread. It is somewhat nutty. You can really feel how unsalted and how alkaline it is.",
    "This blackened anasazi beans appetizer is thoroughly doughy with a fluffy texture. It is nothing like kumquat with sweet cicely and has a bit of savory. It smells rancid with a lot of bread. It is peculiarly delicate. You can really feel how no artificial sweeteners and how high in magnesium it is.",
    "This baked pitanga turnover is altogether flaky with a gooey texture. It has a tinge of snow peas with ginger and has a hint of pumpkin spice. It smells like copper with a large amount of celeriac. It is raw and starchy. You can really feel how BPA-free and how high in enzymes it is.",
    "This poached teff burrito is utterly hearty with a smooth texture. It resembles green pepper with scullcap and has a large amount of lemon balm. It smells putrid with a large amount of mustard. It is sweet and divine. You can really feel how paleo-friendly and how low calorie it is."
    ]
    const  ThangabaliImg=["https://www.vegrecipesofindia.com/wp-content/uploads/2018/09/rava-dosa-recipe-1-500x500.jpg",
    "https://cdn2.foodviva.com/static-content/food-images/tea-recipes/milk-tea-recipe/milk-tea-recipe.jpg",
    "https://greenbowl2soul.com/wp-content/uploads/2020/02/Veg-Manchow-Soup-recipe.jpg",
    "https://myfoodstory.com/wp-content/uploads/2016/07/Chicken-Manchow-Soup-2.jpg",
    "https://media-cdn.tripadvisor.com/media/photo-p/11/1a/1c/35/mafu-tofu.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrFc98FHraf0ZZ3NGgUfvOPoHR-buTFWWfwQm9tFKTyTOFwvfbl-0qAKEcJc2EdH5kRt0&usqp=CAU"
    ]

    const  Thangabalicat=["Breakfast","Drinks","Soups","Soups","Veg","Non-veg"]

    //BreakFast Corner
    const BreakFastname=[
        "All Mighty English Breakfast","Hash Hotchpotch","Fresh Watermelon Juice","Strawberry Milkshake","The Grilliant","Peach Iced Tea"
    ]
    const  BreakFastdesc=["This poached red onion lunch is marginally grainy with a tough texture. It compares to asparagus beans with coriander-blair and has a tiny bit of lungwort. It smells like metal with a dash of carissa. It is salty sweet. You can really feel how kosher certified and how no fillers it is.",
    "This whipped broccoli casserole is altogether stringy with a burned texture. It has subtle hints of black adzuki beans with lemongrass and has an overwhelming amount of tansy. It smells vinegary with stinging nettles. It is agreeable. You can really feel how non-GMO and how high in vitamin B it is.",
    "This blanched leaf lettuce bisque is reasonably doughy with a soft texture. It embodies the essence of grapes with tarragon and has mint. It smells spicy with a hint of bread. It is somewhat nutty. You can really feel how unsalted and how alkaline it is.",
    "This blackened anasazi beans appetizer is thoroughly doughy with a fluffy texture. It is nothing like kumquat with sweet cicely and has a bit of savory. It smells rancid with a lot of bread. It is peculiarly delicate. You can really feel how no artificial sweeteners and how high in magnesium it is.",
    "This baked pitanga turnover is altogether flaky with a gooey texture. It has a tinge of snow peas with ginger and has a hint of pumpkin spice. It smells like copper with a large amount of celeriac. It is raw and starchy. You can really feel how BPA-free and how high in enzymes it is.",
    "This poached teff burrito is utterly hearty with a smooth texture. It resembles green pepper with scullcap and has a large amount of lemon balm. It smells putrid with a large amount of mustard. It is sweet and divine. You can really feel how paleo-friendly and how low calorie it is."
    ]
    const  BreakFastImg=["https://www.vegrecipesofindia.com/wp-content/uploads/2018/09/rava-dosa-recipe-1-500x500.jpg",
    "https://cdn2.foodviva.com/static-content/food-images/tea-recipes/milk-tea-recipe/milk-tea-recipe.jpg",
    "https://greenbowl2soul.com/wp-content/uploads/2020/02/Veg-Manchow-Soup-recipe.jpg",
    "https://myfoodstory.com/wp-content/uploads/2016/07/Chicken-Manchow-Soup-2.jpg",
    "https://media-cdn.tripadvisor.com/media/photo-p/11/1a/1c/35/mafu-tofu.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrFc98FHraf0ZZ3NGgUfvOPoHR-buTFWWfwQm9tFKTyTOFwvfbl-0qAKEcJc2EdH5kRt0&usqp=CAU"
    ]

    const  BreakFastcat=["Breakfast","Breakfast","Drinks","Drinks","Breakfast","Drinks"]

    //Indian Fusion
    const IndianFusionname=[
        "Masala Chicken Tikka Wrap","Chatpata Kacche Kela Tikki Wrap","Chicken Haleem Kebab Wrap","Mexican Potato & Corn Salsa Wrap","Coca-Cola Bottle (475 ML)"
    ]
    const  IndianFusiondesc=["This poached red onion lunch is marginally grainy with a tough texture. It compares to asparagus beans with coriander-blair and has a tiny bit of lungwort. It smells like metal with a dash of carissa. It is salty sweet. You can really feel how kosher certified and how no fillers it is.",
    "This whipped broccoli casserole is altogether stringy with a burned texture. It has subtle hints of black adzuki beans with lemongrass and has an overwhelming amount of tansy. It smells vinegary with stinging nettles. It is agreeable. You can really feel how non-GMO and how high in vitamin B it is.",
    "This blanched leaf lettuce bisque is reasonably doughy with a soft texture. It embodies the essence of grapes with tarragon and has mint. It smells spicy with a hint of bread. It is somewhat nutty. You can really feel how unsalted and how alkaline it is.",
    "This blackened anasazi beans appetizer is thoroughly doughy with a fluffy texture. It is nothing like kumquat with sweet cicely and has a bit of savory. It smells rancid with a lot of bread. It is peculiarly delicate. You can really feel how no artificial sweeteners and how high in magnesium it is.",
    "This baked pitanga turnover is altogether flaky with a gooey texture. It has a tinge of snow peas with ginger and has a hint of pumpkin spice. It smells like copper with a large amount of celeriac. It is raw and starchy. You can really feel how BPA-free and how high in enzymes it is."
    ]
    const  IndianFusionImg=["https://www.archanaskitchen.com/images/archanaskitchen/1-Author/sibyl_sunitha/Chicken_Tikka_Wrap_Recipes.jpg",
    "https://b.zmtcdn.com/data/pictures/chains/4/19261674/6d848fcd464a47a8bc3364acfaafb4a8.jpg?fit=around|300:273&crop=300:273;*,*",
    "https://b.zmtcdn.com/data/pictures/chains/7/11677/da66b5379ee65458faaad20d37fef916.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    "https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/iyn68qrhyku0p9ikudik",
    "https://www.foodbev.com/wp-content/uploads/2019/03/Mini_Bottle_Photo_for_Media2-1024x638.jpg"
    ]

    const  IndianFusioncat=["Non-veg","Veg","Non-veg","Veg","Drinks"]

    //Indian Corner
    const Indiancornername=[
        "Ragi Mudde with chicken Curry","Ragi Mudde with Veg Curry","Ragi Mudde with Bassaaru","Mutton Biryani","Aloo Chana"
    ]
    const  Indiancornerdesc=["This poached red onion lunch is marginally grainy with a tough texture. It compares to asparagus beans with coriander-blair and has a tiny bit of lungwort. It smells like metal with a dash of carissa. It is salty sweet. You can really feel how kosher certified and how no fillers it is.",
    "This whipped broccoli casserole is altogether stringy with a burned texture. It has subtle hints of black adzuki beans with lemongrass and has an overwhelming amount of tansy. It smells vinegary with stinging nettles. It is agreeable. You can really feel how non-GMO and how high in vitamin B it is.",
    "This blanched leaf lettuce bisque is reasonably doughy with a soft texture. It embodies the essence of grapes with tarragon and has mint. It smells spicy with a hint of bread. It is somewhat nutty. You can really feel how unsalted and how alkaline it is.",
    "This blackened anasazi beans appetizer is thoroughly doughy with a fluffy texture. It is nothing like kumquat with sweet cicely and has a bit of savory. It smells rancid with a lot of bread. It is peculiarly delicate. You can really feel how no artificial sweeteners and how high in magnesium it is.",
    "This baked pitanga turnover is altogether flaky with a gooey texture. It has a tinge of snow peas with ginger and has a hint of pumpkin spice. It smells like copper with a large amount of celeriac. It is raw and starchy. You can really feel how BPA-free and how high in enzymes it is."
    ]
    const  IndiancornerImg=["https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2017/3-oct/Meal_Plate_Ragi_Mudde_Koli_Saaru_-2.jpg",
    "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/02/ragi-mudde.jpg",
    "https://3.bp.blogspot.com/-Faq6k29nmO0/Vu9lFkPSk3I/AAAAAAAAHVU/XM7UtfL8sbsUIRRr2-hkNqEfTtEUws7_w/s1600/RagiMudde-Bassaru.jpg",
    "https://www.cubesnjuliennes.com/wp-content/uploads/2021/03/Best-Mutton-Biryani-Recipe.jpg",
    "https://www.cookwithkushi.com/wp-content/uploads/2019/07/IMG_3708_.jpg"
    ]

    const  Indiancornercat=["Non-veg","Veg","Breakfast","Non-veg","Chats"]

    //naan sense
    const naansensename=[
        "Ghee Pongal with Vada","Poori Masala","Gobi Fried Rice","Chicken Lollipop","Dhai puri"
    ]
    const  naansensedesc=["This poached red onion lunch is marginally grainy with a tough texture. It compares to asparagus beans with coriander-blair and has a tiny bit of lungwort. It smells like metal with a dash of carissa. It is salty sweet. You can really feel how kosher certified and how no fillers it is.",
    "This whipped broccoli casserole is altogether stringy with a burned texture. It has subtle hints of black adzuki beans with lemongrass and has an overwhelming amount of tansy. It smells vinegary with stinging nettles. It is agreeable. You can really feel how non-GMO and how high in vitamin B it is.",
    "This blanched leaf lettuce bisque is reasonably doughy with a soft texture. It embodies the essence of grapes with tarragon and has mint. It smells spicy with a hint of bread. It is somewhat nutty. You can really feel how unsalted and how alkaline it is.",
    "This blackened anasazi beans appetizer is thoroughly doughy with a fluffy texture. It is nothing like kumquat with sweet cicely and has a bit of savory. It smells rancid with a lot of bread. It is peculiarly delicate. You can really feel how no artificial sweeteners and how high in magnesium it is.",
    "This baked pitanga turnover is altogether flaky with a gooey texture. It has a tinge of snow peas with ginger and has a hint of pumpkin spice. It smells like copper with a large amount of celeriac. It is raw and starchy. You can really feel how BPA-free and how high in enzymes it is."
    ]
    const  naansenseImg=["https://www.spiceindiaonline.com/wp-content/uploads/2014/01/Ven-Pongal-2.jpg",
    "https://www.indianhealthyrecipes.com/wp-content/uploads/2018/03/poori-masala-recipe-500x500.jpg",
    "https://i1.wp.com/www.tastesofmalabar.com/wp-content/uploads/2016/11/1526443_206589372860991_749747172_n.jpg?resize=845%2C435&ssl=1",
    "https://www.indianhealthyrecipes.com/wp-content/uploads/2015/07/chicken-lollipop.jpg",
    "https://static.toiimg.com/thumb/53571811.cms?width=1200&height=900"
    ]

    const  naansensecat=["Breakfast","Breakfast","Veg","Non-veg","Chats"]

    //JP Nagar
    //Udpi Hotel
    const Udpiname=[
        "Khara Bath","Paper Plain Dosa","Gobi Fried Rice","South Indian Meals","North Indian Meals"
    ]
    const  Udpidesc=["This poached red onion lunch is marginally grainy with a tough texture. It compares to asparagus beans with coriander-blair and has a tiny bit of lungwort. It smells like metal with a dash of carissa. It is salty sweet. You can really feel how kosher certified and how no fillers it is.",
    "This whipped broccoli casserole is altogether stringy with a burned texture. It has subtle hints of black adzuki beans with lemongrass and has an overwhelming amount of tansy. It smells vinegary with stinging nettles. It is agreeable. You can really feel how non-GMO and how high in vitamin B it is.",
    "This blanched leaf lettuce bisque is reasonably doughy with a soft texture. It embodies the essence of grapes with tarragon and has mint. It smells spicy with a hint of bread. It is somewhat nutty. You can really feel how unsalted and how alkaline it is.",
    "This blackened anasazi beans appetizer is thoroughly doughy with a fluffy texture. It is nothing like kumquat with sweet cicely and has a bit of savory. It smells rancid with a lot of bread. It is peculiarly delicate. You can really feel how no artificial sweeteners and how high in magnesium it is.",
    "This baked pitanga turnover is altogether flaky with a gooey texture. It has a tinge of snow peas with ginger and has a hint of pumpkin spice. It smells like copper with a large amount of celeriac. It is raw and starchy. You can really feel how BPA-free and how high in enzymes it is."
    ]
    const  UdpiImg=["https://www.indianhealthyrecipes.com/wp-content/uploads/2019/02/khara-bath-500x500.jpg",
    "https://static.toiimg.com/thumb/53239433.cms?imgsize=247810&width=800&height=800",
    "https://i.ytimg.com/vi/vUCmAUPnU9Q/maxresdefault.jpg",
    "https://farm8.staticflickr.com/7671/17269221094_6c0b6605a8_z.jpg",
    "https://i.pinimg.com/736x/9d/0d/2e/9d0d2eaf6c1b0652ad8e1550ed990533.jpg"
    ]

    const  Udpicat=["Breakfast","Breakfast","Veg","Veg","Veg"]

    //Tasty Food
    const Tastyname=[
        "Lemon Chicken","Masala Peanut","Chicken Sausage","Jalapeno Cheese Fritters","Char Grilled Chicken"
    ]
    const  Tastydesc=["This poached red onion lunch is marginally grainy with a tough texture. It compares to asparagus beans with coriander-blair and has a tiny bit of lungwort. It smells like metal with a dash of carissa. It is salty sweet. You can really feel how kosher certified and how no fillers it is.",
    "This whipped broccoli casserole is altogether stringy with a burned texture. It has subtle hints of black adzuki beans with lemongrass and has an overwhelming amount of tansy. It smells vinegary with stinging nettles. It is agreeable. You can really feel how non-GMO and how high in vitamin B it is.",
    "This blanched leaf lettuce bisque is reasonably doughy with a soft texture. It embodies the essence of grapes with tarragon and has mint. It smells spicy with a hint of bread. It is somewhat nutty. You can really feel how unsalted and how alkaline it is.",
    "This blackened anasazi beans appetizer is thoroughly doughy with a fluffy texture. It is nothing like kumquat with sweet cicely and has a bit of savory. It smells rancid with a lot of bread. It is peculiarly delicate. You can really feel how no artificial sweeteners and how high in magnesium it is.",
    "This baked pitanga turnover is altogether flaky with a gooey texture. It has a tinge of snow peas with ginger and has a hint of pumpkin spice. It smells like copper with a large amount of celeriac. It is raw and starchy. You can really feel how BPA-free and how high in enzymes it is."
    ]
    const  TastyImg=["https://natashaskitchen.com/wp-content/uploads/2020/02/Lemon-Chicken-2.jpg",
    "https://www.sharmispassions.com/wp-content/uploads/2020/07/MasalaPeanuts5-500x500.jpg",
    "https://5.imimg.com/data5/VV/PH/MY-4094990/chicken-sausage-500x500.jpg",
    "https://i.ytimg.com/vi/-aITVqlW6aA/maxresdefault.jpg",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/grilled-chicken-horizontal-1532030541.jpg?crop=0.981xw:0.736xh;0.00641xw,0.127xh&resize=1200:*"
    ]

    const  Tastycat=["Non-veg","Chats","Non-veg","Veg","Non-veg"]

    //Food's way
    const Foodswayname=[
        "Pepper Chicken","Kshatriya Kabab","Chicken Lollypop","Mutton Pulao","Thums Up [250 ml]"
    ]
    const  Foodswaydesc=["This poached red onion lunch is marginally grainy with a tough texture. It compares to asparagus beans with coriander-blair and has a tiny bit of lungwort. It smells like metal with a dash of carissa. It is salty sweet. You can really feel how kosher certified and how no fillers it is.",
    "This whipped broccoli casserole is altogether stringy with a burned texture. It has subtle hints of black adzuki beans with lemongrass and has an overwhelming amount of tansy. It smells vinegary with stinging nettles. It is agreeable. You can really feel how non-GMO and how high in vitamin B it is.",
    "This blanched leaf lettuce bisque is reasonably doughy with a soft texture. It embodies the essence of grapes with tarragon and has mint. It smells spicy with a hint of bread. It is somewhat nutty. You can really feel how unsalted and how alkaline it is.",
    "This blackened anasazi beans appetizer is thoroughly doughy with a fluffy texture. It is nothing like kumquat with sweet cicely and has a bit of savory. It smells rancid with a lot of bread. It is peculiarly delicate. You can really feel how no artificial sweeteners and how high in magnesium it is.",
    "This baked pitanga turnover is altogether flaky with a gooey texture. It has a tinge of snow peas with ginger and has a hint of pumpkin spice. It smells like copper with a large amount of celeriac. It is raw and starchy. You can really feel how BPA-free and how high in enzymes it is."
    ]
    const  FoodswayImg=["https://www.indianhealthyrecipes.com/wp-content/uploads/2018/07/pepper-chicken-recipe.jpg",
    "https://media-cdn.tripadvisor.com/media/photo-m/1280/1a/79/01/e5/kshatriya-chicken-kabab.jpg",
    "https://c.ndtvimg.com/2019-11/kv67pg2o_chicken-lollipop_625x300_25_November_19.jpg",
    "https://vismaifood.com/storage/app/uploads/public/273/55a/b83/thumb__700_0_0_0_auto.jpg",
    "https://www.bigbasket.com/media/uploads/p/l/251014-2_7-thums-up-soft-drink.jpg"
    ]

    const  Foodswaycat=["Non-veg","Non-veg","Non-veg","Non-veg","Drinks"]

    //Dosa Corner
    const Dosacornername=[
        "Sada Dosa","Cheese Sada Dosa","Cheese Onion Dosa","Paneer Scheswan Dosa","Mysore Masala Dosa","Ginie Dosa","Pizza Dosa","American Chopsuey Dosa","Spring Roll Dosa"
    ]
    const  Dosacornerdesc=["This poached red onion lunch is marginally grainy with a tough texture. It compares to asparagus beans with coriander-blair and has a tiny bit of lungwort. It smells like metal with a dash of carissa. It is salty sweet. You can really feel how kosher certified and how no fillers it is.",
    "This whipped broccoli casserole is altogether stringy with a burned texture. It has subtle hints of black adzuki beans with lemongrass and has an overwhelming amount of tansy. It smells vinegary with stinging nettles. It is agreeable. You can really feel how non-GMO and how high in vitamin B it is.",
    "This blanched leaf lettuce bisque is reasonably doughy with a soft texture. It embodies the essence of grapes with tarragon and has mint. It smells spicy with a hint of bread. It is somewhat nutty. You can really feel how unsalted and how alkaline it is.",
    "This blackened anasazi beans appetizer is thoroughly doughy with a fluffy texture. It is nothing like kumquat with sweet cicely and has a bit of savory. It smells rancid with a lot of bread. It is peculiarly delicate. You can really feel how no artificial sweeteners and how high in magnesium it is.",
    "This marinated lychee tapas is vaguely crusty with a flaky texture. It is infused with peaches with cayenne and has a lot of lemon balm. It smells damp with horseradish. It is meaty. You can really feel how locally sourced and how high in probiotics it is.",
    "This baked pitanga turnover is altogether flaky with a gooey texture. It has a tinge of snow peas with ginger and has a hint of pumpkin spice. It smells like copper with a large amount of celeriac. It is raw and starchy. You can really feel how BPA-free and how high in enzymes it is.",
    "This caramelized white potato cookie is quite crumbly with a chewy texture. It bursts with the flavor of navy beans with St Johns wort and has a lot of mace. It smells pungent with a bit of cowpeas. It is peculiarly atmospheric. You can really feel how high in zinc and how no artificial sweeteners it is.",
    "This roasted chicory (curly endive) turnover is scarcely tender with a greasy texture. It pairs with chayote with laurel and has clove. It smells inodorous with just the right amount of taro. It is penetrating but delicate. You can really feel how high in potassium and how high in zinc it is.",
    "This glazed farro (emmer) quiche is totally hearty with a grainy texture. It builds depth and complexity with rutabaga with sweet woodruff and has garlic. It smells damp with peas and onions. It is yellow and good. You can really feel how GMP certified and how low fat it is."
    ]
    const  DosacornerImg=["https://www.vegrecipesofindia.com/wp-content/uploads/2021/07/dosa-recipe-3.jpg",
    "https://www.indianhealthyrecipes.com/wp-content/uploads/2016/09/cheese-dosa-recipe-500x500.jpg",
    "https://cdn.squats.in/thumbnail/CC1AA423-F8E7-42EF-8A8B-7467408146CD_2019-09-11_20:11:05.jpeg",
    "https://img-global.cpcdn.com/recipes/147d2d491434ed97/680x482cq70/paneer-schezwan-dosa-recipe-main-photo.jpg",
    "https://asmallbite.com/wp-content/uploads/2018/02/Mysore-Masala-Dosa-Recipe-1.jpg",
    "https://i.ytimg.com/vi/FU_jPOkxwrE/maxresdefault.jpg",
    "https://img-global.cpcdn.com/recipes/f997862c5a3afce8/1200x630cq70/photo.jpg",
    "https://i.ytimg.com/vi/SYppfUheyik/maxresdefault.jpg",
    "https://www.cookingandme.com/wp-content/uploads/2013/05/8786782109_8a9b32ec40_z.jpg"
    ]

    const  Dosacornercat=["Breakfast","Breakfast","Breakfast","Breakfast","Breakfast","Breakfast","Breakfast","Breakfast","Breakfast"]

    //Snack's corner
    const snackscornername=[
        "Kothimbir Vadi","pat vadi","Veg Chilly","paneer Tikka","Lime Soda","Sev puri","Ragada Puri"
    ]
    const  snackscornerdesc=["This poached red onion lunch is marginally grainy with a tough texture. It compares to asparagus beans with coriander-blair and has a tiny bit of lungwort. It smells like metal with a dash of carissa. It is salty sweet. You can really feel how kosher certified and how no fillers it is.",
    "This whipped broccoli casserole is altogether stringy with a burned texture. It has subtle hints of black adzuki beans with lemongrass and has an overwhelming amount of tansy. It smells vinegary with stinging nettles. It is agreeable. You can really feel how non-GMO and how high in vitamin B it is.",
    "This blanched leaf lettuce bisque is reasonably doughy with a soft texture. It embodies the essence of grapes with tarragon and has mint. It smells spicy with a hint of bread. It is somewhat nutty. You can really feel how unsalted and how alkaline it is.",
    "This blackened anasazi beans appetizer is thoroughly doughy with a fluffy texture. It is nothing like kumquat with sweet cicely and has a bit of savory. It smells rancid with a lot of bread. It is peculiarly delicate. You can really feel how no artificial sweeteners and how high in magnesium it is.",
    "This broiled rye sauce is altogether grainy with a velvety texture. It builds depth and complexity with date fruit with tulsi / holy basil and has myrtle plant. It smells strong with okra. It is finely appetizing. You can really feel how 0g of added sugar and how whole superfood it is.",
    "This baked pitanga turnover is altogether flaky with a gooey texture. It has a tinge of snow peas with ginger and has a hint of pumpkin spice. It smells like copper with a large amount of celeriac. It is raw and starchy. You can really feel how BPA-free and how high in enzymes it is.",
    "This blanched lychee dessert is a bit succulent with a thin texture. It compares to cherimoya with sweet bay and has a bit of nettle. It smells rotten with a large amount of artichokes. It is new and deeper. You can really feel how high in probiotics and how quality guaranteed it is."
    ]
    const  snackscornerImg=["https://shwetainthekitchen.com/wp-content/uploads/2020/04/IMG_8272-scaled.jpg",
    "https://s3-ap-south-1.amazonaws.com/betterbutterbucket-silver/sharwari-vyavhare020180813115426609.jpeg",
    "https://i.ytimg.com/vi/H2sWc-WjnHg/maxresdefault.jpg",
    "https://www.cookwithmanali.com/wp-content/uploads/2015/07/Restaurant-Style-Recipe-Paneer-Tikka.jpg",
    "https://www.seriouseats.com/thmb/T_OlO5KsET8FzpEfM2e80o2ulm8=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2020__08__20200816-nimbu-soda-vicky-wasik-1-28079d5d45ee4e47a37a969d1e4834a0.jpg",
    "https://www.vegrecipesofindia.com/wp-content/uploads/2021/05/sev-puri-2.jpg",
    "https://lh3.googleusercontent.com/-LiuuX91Y2ew/UzabPnwadnI/AAAAAAAAN2k/zildp9elP4Q/s576/Bombay%2520Ragda%2520Puri%2520%2528Masala%2520Poori%252901.JPG"
    ]

    const  snackscornercat=["Chats","Chats","Chats","Chats","Drinks","Chats","Chats"]

    //Banashankari
    //Kannada Cafe
    const Kannadacafename=[
        "Karnataka Style Puran Poli","Mutton Sukka","Nuts Barfi","Chicken Tortilla Soup","French Onion Soup"
    ]
    const  Kannadacafedesc=["This poached red onion lunch is marginally grainy with a tough texture. It compares to asparagus beans with coriander-blair and has a tiny bit of lungwort. It smells like metal with a dash of carissa. It is salty sweet. You can really feel how kosher certified and how no fillers it is.",
    "This whipped broccoli casserole is altogether stringy with a burned texture. It has subtle hints of black adzuki beans with lemongrass and has an overwhelming amount of tansy. It smells vinegary with stinging nettles. It is agreeable. You can really feel how non-GMO and how high in vitamin B it is.",
    "This blanched leaf lettuce bisque is reasonably doughy with a soft texture. It embodies the essence of grapes with tarragon and has mint. It smells spicy with a hint of bread. It is somewhat nutty. You can really feel how unsalted and how alkaline it is.",
    "This blackened anasazi beans appetizer is thoroughly doughy with a fluffy texture. It is nothing like kumquat with sweet cicely and has a bit of savory. It smells rancid with a lot of bread. It is peculiarly delicate. You can really feel how no artificial sweeteners and how high in magnesium it is.",
    "This baked pitanga turnover is altogether flaky with a gooey texture. It has a tinge of snow peas with ginger and has a hint of pumpkin spice. It smells like copper with a large amount of celeriac. It is raw and starchy. You can really feel how BPA-free and how high in enzymes it is."
    ]
    const  KannadacafeImg=["https://www.whiskaffair.com/wp-content/uploads/2018/12/Puran-Poli-2-3.jpg",
    "https://www.licious.in/blog/wp-content/uploads/2020/12/Mutton-Sukka.jpg",
    "https://www.archanaskitchen.com/images/archanaskitchen/Indian_Sweets_Mithai/Dry_Fruit_Barfi_Halwa_Recipe_shutterstock_128021267.jpg",
    "https://natashaskitchen.com/wp-content/uploads/2020/10/Chicken-Tortilla-Soup-5.jpg",
    "https://www.simplyrecipes.com/thmb/h7QoiU9VcbVwpMJvxFKWJLKeOTE=/1067x1067/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2015__02__french-onion-soup-horiz-a-1600-75b459fd36564706ad621d59eb79baf7.jpg"
    ]

    const  Kannadacafecat=["Breakfast","Non-veg","Chats","Soups","Soups"]

    //Halli Mane
    const Hallimanename=[
        "Akki Rotti","Mixed Veg Masala","Kerala Parota","Grapes Juice","Gasagase milk"
    ]
    const  Hallimanedesc=["This poached red onion lunch is marginally grainy with a tough texture. It compares to asparagus beans with coriander-blair and has a tiny bit of lungwort. It smells like metal with a dash of carissa. It is salty sweet. You can really feel how kosher certified and how no fillers it is.",
    "This whipped broccoli casserole is altogether stringy with a burned texture. It has subtle hints of black adzuki beans with lemongrass and has an overwhelming amount of tansy. It smells vinegary with stinging nettles. It is agreeable. You can really feel how non-GMO and how high in vitamin B it is.",
    "This blanched leaf lettuce bisque is reasonably doughy with a soft texture. It embodies the essence of grapes with tarragon and has mint. It smells spicy with a hint of bread. It is somewhat nutty. You can really feel how unsalted and how alkaline it is.",
    "This blackened anasazi beans appetizer is thoroughly doughy with a fluffy texture. It is nothing like kumquat with sweet cicely and has a bit of savory. It smells rancid with a lot of bread. It is peculiarly delicate. You can really feel how no artificial sweeteners and how high in magnesium it is.",
    "This baked pitanga turnover is altogether flaky with a gooey texture. It has a tinge of snow peas with ginger and has a hint of pumpkin spice. It smells like copper with a large amount of celeriac. It is raw and starchy. You can really feel how BPA-free and how high in enzymes it is."
    ]
    const  HallimaneImg=["https://udupi-recipes.com/wp-content/uploads/2014/12/akki-rotti-1-500x500.jpg",
    "https://vismaifood.com/storage/app/uploads/public/ed3/817/fa2/thumb__700_0_0_0_auto.jpg",
    "https://www.whiskaffair.com/wp-content/uploads/2020/04/Kerala-Parotta-3.jpg",
    "https://cdn2.foodviva.com/static-content/food-images/juice-recipes/grape-juice/grape-juice.jpg",
    "https://asmallbite.com/wp-content/uploads/2020/03/Gasagase-Payasa-Recipe.png"
    ]

    const  Hallimanecat=["Breakfast","Veg","Breakfast","Drinks","Drinks"]

    //IN-N-Out
    const Inoutname=[
        "Chettinad chicken biryani ","Dindigul biryani","Eggplant and Zucchini Fries","Double Cheese Margherita Pizza","Hawaiian Pizza"
    ]
    const  Inoutdesc=["This poached red onion lunch is marginally grainy with a tough texture. It compares to asparagus beans with coriander-blair and has a tiny bit of lungwort. It smells like metal with a dash of carissa. It is salty sweet. You can really feel how kosher certified and how no fillers it is.",
    "This whipped broccoli casserole is altogether stringy with a burned texture. It has subtle hints of black adzuki beans with lemongrass and has an overwhelming amount of tansy. It smells vinegary with stinging nettles. It is agreeable. You can really feel how non-GMO and how high in vitamin B it is.",
    "This blanched leaf lettuce bisque is reasonably doughy with a soft texture. It embodies the essence of grapes with tarragon and has mint. It smells spicy with a hint of bread. It is somewhat nutty. You can really feel how unsalted and how alkaline it is.",
    "This blackened anasazi beans appetizer is thoroughly doughy with a fluffy texture. It is nothing like kumquat with sweet cicely and has a bit of savory. It smells rancid with a lot of bread. It is peculiarly delicate. You can really feel how no artificial sweeteners and how high in magnesium it is.",
    "This baked pitanga turnover is altogether flaky with a gooey texture. It has a tinge of snow peas with ginger and has a hint of pumpkin spice. It smells like copper with a large amount of celeriac. It is raw and starchy. You can really feel how BPA-free and how high in enzymes it is."
    ]
    const  InoutImg=["http://www.jopreetskitchen.com/wp-content/uploads/2012/03/DSC_7267.jpg",
    "https://www.yummyoyummy.com/wp-content/uploads/2021/01/DSC_0809-scaled.jpg",
    "https://static.onecms.io/wp-content/uploads/sites/9/2021/02/08/eggplant-and-chili-garlic-stir-fry-with-plant-based-ground-meat-FT-RECIPE0221.jpg",
    "https://media-cdn.tripadvisor.com/media/photo-s/15/29/b4/3d/img-20180918-214945-bokeh.jpg",
    "https://img.kidspot.com.au/pZnR2nZu/kk/2015/03/hawaiian-pizza-recipe-605894-2.jpg"
    ]

    const  Inoutcat=["Non-veg","Non-veg","Non-veg","Chats","Chats"]

    //The Engineer's Resto
    const Engineername=[
        "The Engineer's Resto Special ","Omelette","Fish Fry","Finger Chips","Crispy Veg"
    ]
    const  Engineerdesc=["This poached red onion lunch is marginally grainy with a tough texture. It compares to asparagus beans with coriander-blair and has a tiny bit of lungwort. It smells like metal with a dash of carissa. It is salty sweet. You can really feel how kosher certified and how no fillers it is.",
    "This whipped broccoli casserole is altogether stringy with a burned texture. It has subtle hints of black adzuki beans with lemongrass and has an overwhelming amount of tansy. It smells vinegary with stinging nettles. It is agreeable. You can really feel how non-GMO and how high in vitamin B it is.",
    "This blanched leaf lettuce bisque is reasonably doughy with a soft texture. It embodies the essence of grapes with tarragon and has mint. It smells spicy with a hint of bread. It is somewhat nutty. You can really feel how unsalted and how alkaline it is.",
    "This blackened anasazi beans appetizer is thoroughly doughy with a fluffy texture. It is nothing like kumquat with sweet cicely and has a bit of savory. It smells rancid with a lot of bread. It is peculiarly delicate. You can really feel how no artificial sweeteners and how high in magnesium it is.",
    "This baked pitanga turnover is altogether flaky with a gooey texture. It has a tinge of snow peas with ginger and has a hint of pumpkin spice. It smells like copper with a large amount of celeriac. It is raw and starchy. You can really feel how BPA-free and how high in enzymes it is."
    ]
    const  EngineerImg=["https://5.imimg.com/data5/JE/EU/MY-64985902/non-veg-special-thali-500x500.png",
    "https://www.seriouseats.com/thmb/S_LW9Oa3pkmywLUd-YsNa-WsiNs=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2020__06__20200602-western-denver-omelette-daniel-gritzer-8-20ef3336fd4b44f68987badfde08a71a.jpg",
    "https://www.kannammacooks.com/wp-content/uploads/masala-fish-fry-recipe-ayala-meen-Mackerel-fry-8.jpg",
    "https://i.ytimg.com/vi/LViCPSQJjUQ/maxresdefault.jpg",
    "https://www.tarladalal.com/members/9306/procstepimgs/veg-crispy-(15)-14-188525.jpg"
    ]

    const  Engineercat=["Non-veg","Non-veg","Non-veg","Chats","Veg"]

    //Lassi Lab
    const Lassilabname=[
        "Sweet Lassi","Dry Fruits Lassi","Kesar Pista Moctail","Cashew Cockatail","Kulfi Falooda","Avacado Smoothie","Kiwi Juice"
    ]
    const  Lassilabdesc=["This poached red onion lunch is marginally grainy with a tough texture. It compares to asparagus beans with coriander-blair and has a tiny bit of lungwort. It smells like metal with a dash of carissa. It is salty sweet. You can really feel how kosher certified and how no fillers it is.",
    "This whipped broccoli casserole is altogether stringy with a burned texture. It has subtle hints of black adzuki beans with lemongrass and has an overwhelming amount of tansy. It smells vinegary with stinging nettles. It is agreeable. You can really feel how non-GMO and how high in vitamin B it is.",
    "This blanched leaf lettuce bisque is reasonably doughy with a soft texture. It embodies the essence of grapes with tarragon and has mint. It smells spicy with a hint of bread. It is somewhat nutty. You can really feel how unsalted and how alkaline it is.",
    "This blackened anasazi beans appetizer is thoroughly doughy with a fluffy texture. It is nothing like kumquat with sweet cicely and has a bit of savory. It smells rancid with a lot of bread. It is peculiarly delicate. You can really feel how no artificial sweeteners and how high in magnesium it is.",
    "This broiled rye sauce is altogether grainy with a velvety texture. It builds depth and complexity with date fruit with tulsi / holy basil and has myrtle plant. It smells strong with okra. It is finely appetizing. You can really feel how 0g of added sugar and how whole superfood it is.",
    "This baked pitanga turnover is altogether flaky with a gooey texture. It has a tinge of snow peas with ginger and has a hint of pumpkin spice. It smells like copper with a large amount of celeriac. It is raw and starchy. You can really feel how BPA-free and how high in enzymes it is.",
    "This blanched lychee dessert is a bit succulent with a thin texture. It compares to cherimoya with sweet bay and has a bit of nettle. It smells rotten with a large amount of artichokes. It is new and deeper. You can really feel how high in probiotics and how quality guaranteed it is."
    ]
    const  LassilabImg=["https://www.vegrecipesofindia.com/wp-content/uploads/2021/04/lassi-recipe-1.jpg",
    "https://i2.wp.com/kalimirchbysmita.com/wp-content/uploads/2015/09/Dry-Fruit-Lassi-01.jpg",
    "https://lh3.googleusercontent.com/proxy/ttZOf5RhgiPQV1JQ_J6n3NZJtFhg6-SUO33Txlx4Qflax8LufiWJRilmhJMKca67JFX7CRfythDtbc_G37fYLsZ-pCHq8x0c3CxR_8L9hfphf4mPSZ4E8tIFCIKp4fDjeGXoZDsE1nroADCI4chz1EYh-Ej3sb5TEB4Blg",
    "https://www.goastreets.in/wp-content/uploads/2015/04/Cashew-cocktail.jpg",
    "https://s9c2c8i7.rocketcdn.me/wp-content/uploads/2021/02/kulfi-falooda-recipe.jpg",
    "https://www.cubesnjuliennes.com/wp-content/uploads/2021/03/Avocado-Smoothie.jpg",
    "https://www.pepperbowl.com/wp-content/uploads/2013/08/kiwi-juice-Recipe-1-1.jpg"
    ]

    const  Lassilabcat=["Drinks","Drinks","Drinks","Drinks","Drinks","Drinks","Drinks"]

    //Uttarahalli
    //McDonald's
    const Mcdname=[
        "McSpicy Chicken Burger","McSaver McVeggie Meal","Chicken Maharaja Mac","McChicken Combo","McSpicy Fried Chicken - One Pc"
    ]
    const  Mcddesc=["This poached red onion lunch is marginally grainy with a tough texture. It compares to asparagus beans with coriander-blair and has a tiny bit of lungwort. It smells like metal with a dash of carissa. It is salty sweet. You can really feel how kosher certified and how no fillers it is.",
    "This whipped broccoli casserole is altogether stringy with a burned texture. It has subtle hints of black adzuki beans with lemongrass and has an overwhelming amount of tansy. It smells vinegary with stinging nettles. It is agreeable. You can really feel how non-GMO and how high in vitamin B it is.",
    "This blanched leaf lettuce bisque is reasonably doughy with a soft texture. It embodies the essence of grapes with tarragon and has mint. It smells spicy with a hint of bread. It is somewhat nutty. You can really feel how unsalted and how alkaline it is.",
    "This blackened anasazi beans appetizer is thoroughly doughy with a fluffy texture. It is nothing like kumquat with sweet cicely and has a bit of savory. It smells rancid with a lot of bread. It is peculiarly delicate. You can really feel how no artificial sweeteners and how high in magnesium it is.",
    "This baked pitanga turnover is altogether flaky with a gooey texture. It has a tinge of snow peas with ginger and has a hint of pumpkin spice. It smells like copper with a large amount of celeriac. It is raw and starchy. You can really feel how BPA-free and how high in enzymes it is."
    ]
    const  McdImg=["https://5.imimg.com/data5/NH/WD/MY-33353830/mcspicy-chicken-burger-500x500.png",
    "https://mcdonaldsblog.in/wp-content/uploads/2019/04/McSaverMeal.jpg",
    "https://www.mcdonaldsindia.com/images/productview/McMaharaja-nonveg.png",
    "https://www.mcdonaldsindia.com/images/productview/McChickenMeal.jpg",
    "https://mcdonaldsblog.in/wp-content/uploads/2020/05/McSpicy-Fried-Chicken1408.jpg"
    ]

    const  Mcdcat=["Non-veg","Veg","Non-veg","Non-veg","Non-veg"]

    //Hungry Jack's
    const Hungryjacksname=[
        "Rice Noodles Combo","American Choupuesy","Thai Soup","Noodle Soup","Manchow Soup"
    ]
    const  Hungryjacksdesc=["This poached red onion lunch is marginally grainy with a tough texture. It compares to asparagus beans with coriander-blair and has a tiny bit of lungwort. It smells like metal with a dash of carissa. It is salty sweet. You can really feel how kosher certified and how no fillers it is.",
    "This whipped broccoli casserole is altogether stringy with a burned texture. It has subtle hints of black adzuki beans with lemongrass and has an overwhelming amount of tansy. It smells vinegary with stinging nettles. It is agreeable. You can really feel how non-GMO and how high in vitamin B it is.",
    "This blanched leaf lettuce bisque is reasonably doughy with a soft texture. It embodies the essence of grapes with tarragon and has mint. It smells spicy with a hint of bread. It is somewhat nutty. You can really feel how unsalted and how alkaline it is.",
    "This blackened anasazi beans appetizer is thoroughly doughy with a fluffy texture. It is nothing like kumquat with sweet cicely and has a bit of savory. It smells rancid with a lot of bread. It is peculiarly delicate. You can really feel how no artificial sweeteners and how high in magnesium it is.",
    "This baked pitanga turnover is altogether flaky with a gooey texture. It has a tinge of snow peas with ginger and has a hint of pumpkin spice. It smells like copper with a large amount of celeriac. It is raw and starchy. You can really feel how BPA-free and how high in enzymes it is."
    ]
    const  HungryjacksImg=["https://www.vegrecipesofindia.com/wp-content/uploads/2018/03/singapore-noodles-recipe-1.jpg",
    "https://m.tarladalal.com/members/9306/big/big_american_chopsuey-15068.jpg",
    "https://s23209.pcdn.co/wp-content/uploads/2018/04/Thai-Red-Curry-Noodle-SoupIMG_4787.jpg",
    "https://www.vegrecipesofindia.com/wp-content/uploads/2017/11/noodle-soup-recipe-1.jpg",
    "https://cdn1.foodviva.com/static-content/food-images/soup-recipes/manchow-soup/manchow-soup.jpg"
    ]

    const  Hungryjackscat=["Veg","Chats","Soups","Soups","Soups"]

    //Pizza Hut
    const Pizzahutname=[
        "Double Cheese Margherita","Non Veg Loaded","Pepper Barbecue Chicken","Paneer & Onion","Veg Loaded","Veg Extravaganza"
    ]
    const  Pizzahutdesc=["This poached red onion lunch is marginally grainy with a tough texture. It compares to asparagus beans with coriander-blair and has a tiny bit of lungwort. It smells like metal with a dash of carissa. It is salty sweet. You can really feel how kosher certified and how no fillers it is.",
    "This whipped broccoli casserole is altogether stringy with a burned texture. It has subtle hints of black adzuki beans with lemongrass and has an overwhelming amount of tansy. It smells vinegary with stinging nettles. It is agreeable. You can really feel how non-GMO and how high in vitamin B it is.",
    "This blanched leaf lettuce bisque is reasonably doughy with a soft texture. It embodies the essence of grapes with tarragon and has mint. It smells spicy with a hint of bread. It is somewhat nutty. You can really feel how unsalted and how alkaline it is.",
    "This blackened anasazi beans appetizer is thoroughly doughy with a fluffy texture. It is nothing like kumquat with sweet cicely and has a bit of savory. It smells rancid with a lot of bread. It is peculiarly delicate. You can really feel how no artificial sweeteners and how high in magnesium it is.",
    "This baked pitanga turnover is altogether flaky with a gooey texture. It has a tinge of snow peas with ginger and has a hint of pumpkin spice. It smells like copper with a large amount of celeriac. It is raw and starchy. You can really feel how BPA-free and how high in enzymes it is.",
    "This broiled rye sauce is altogether grainy with a velvety texture. It builds depth and complexity with date fruit with tulsi / holy basil and has myrtle plant. It smells strong with okra. It is finely appetizing. You can really feel how 0g of added sugar and how whole superfood it is."
    ]
    const  PizzahutImg=["https://www.dominos.co.in//files/items/Double_Cheese_Margherita.jpg",
    "http://feenix.co.in/wp-content/uploads/2018/02/LoadedL.jpg",
    "https://www.dominos.co.in/files/items/Pepper_Barbeque.jpg",
    "https://media-cdn.tripadvisor.com/media/photo-s/13/de/3e/37/creamy-paneer-and-onion.jpg",
    "https://5.imimg.com/data5/OQ/SB/MY-29540739/veg-loaded-500x500.png",
    "https://www.dominos.co.in//files/items/Veg_Extravaganz.jpg"
    ]

    const  Pizzahutcat=["Veg","Non-veg","Non-veg","Veg","Veg","Veg"]

    //KFC
    const Kfcname=[
        "Mingles Bucket","Big 8","Dips Bucket","Meal","Chick & Share","Triple Treat"
    ]
    const  Kfcdesc=["This poached red onion lunch is marginally grainy with a tough texture. It compares to asparagus beans with coriander-blair and has a tiny bit of lungwort. It smells like metal with a dash of carissa. It is salty sweet. You can really feel how kosher certified and how no fillers it is.",
    "This whipped broccoli casserole is altogether stringy with a burned texture. It has subtle hints of black adzuki beans with lemongrass and has an overwhelming amount of tansy. It smells vinegary with stinging nettles. It is agreeable. You can really feel how non-GMO and how high in vitamin B it is.",
    "This blanched leaf lettuce bisque is reasonably doughy with a soft texture. It embodies the essence of grapes with tarragon and has mint. It smells spicy with a hint of bread. It is somewhat nutty. You can really feel how unsalted and how alkaline it is.",
    "This blackened anasazi beans appetizer is thoroughly doughy with a fluffy texture. It is nothing like kumquat with sweet cicely and has a bit of savory. It smells rancid with a lot of bread. It is peculiarly delicate. You can really feel how no artificial sweeteners and how high in magnesium it is.",
    "This baked pitanga turnover is altogether flaky with a gooey texture. It has a tinge of snow peas with ginger and has a hint of pumpkin spice. It smells like copper with a large amount of celeriac. It is raw and starchy. You can really feel how BPA-free and how high in enzymes it is.",
    "This broiled rye sauce is altogether grainy with a velvety texture. It builds depth and complexity with date fruit with tulsi / holy basil and has myrtle plant. It smells strong with okra. It is finely appetizing. You can really feel how 0g of added sugar and how whole superfood it is."
    ]
    const  KfcImg=["http://hyderabadbazaar.com/images/10024/mingles_B_220317.jpg",
    "https://d1ilnltdtrvmj1.cloudfront.net/cb_images/big-8--4pc-hot-a-crispy--2B-4pc-smoky-grilled-at-rs449-additional-rs45-cashback-from-us-20777295.jpg",
    "https://i.pinimg.com/originals/7e/8b/3d/7e8b3dff4054217fcc7b2944ad459f7b.jpg",
    "https://i.pinimg.com/originals/87/c2/9e/87c29ec973a903dec058630d1e70ff12.jpg",
    "https://cdn4.singleinterface.com/files/banner_images/34404/6589_1625641976_chickshare.jpg",
    "https://2.bp.blogspot.com/-V18VvXaqs4E/XL26mxfevqI/AAAAAAAAAoA/T369KnTxNfgBaxt8_pwnpKxH10kK6n0YgCLcBGAs/s1600/kfc%2Bonekkom.png"
    ]

    const  Kfccat=["Non-veg","Non-veg","Non-veg","Non-veg","Non-veg","Non-veg"]

    //Veggie's Friendly
    const Veggiesfriendlyname=[
        "Veg Mushroom Spring Roll","Mashroom Soup","Gobi Fried Rice","South Indian Meals","Manchurian Bhel"
    ]
    const  Veggiesfriendlydesc=["This poached red onion lunch is marginally grainy with a tough texture. It compares to asparagus beans with coriander-blair and has a tiny bit of lungwort. It smells like metal with a dash of carissa. It is salty sweet. You can really feel how kosher certified and how no fillers it is.",
    "This whipped broccoli casserole is altogether stringy with a burned texture. It has subtle hints of black adzuki beans with lemongrass and has an overwhelming amount of tansy. It smells vinegary with stinging nettles. It is agreeable. You can really feel how non-GMO and how high in vitamin B it is.",
    "This blanched leaf lettuce bisque is reasonably doughy with a soft texture. It embodies the essence of grapes with tarragon and has mint. It smells spicy with a hint of bread. It is somewhat nutty. You can really feel how unsalted and how alkaline it is.",
    "This blackened anasazi beans appetizer is thoroughly doughy with a fluffy texture. It is nothing like kumquat with sweet cicely and has a bit of savory. It smells rancid with a lot of bread. It is peculiarly delicate. You can really feel how no artificial sweeteners and how high in magnesium it is.",
    "This baked pitanga turnover is altogether flaky with a gooey texture. It has a tinge of snow peas with ginger and has a hint of pumpkin spice. It smells like copper with a large amount of celeriac. It is raw and starchy. You can really feel how BPA-free and how high in enzymes it is."
    ]
    const  VeggiesfriendlyImg=["http://khadyaa.com/wp-content/uploads/2016/07/veg-rool-copy.jpg",
    "https://aubreyskitchen.com/wp-content/uploads/2020/07/healthy-mushroom-soup-in-white-bowl-next-to-bread-500x500.jpg",
    "https://i.ytimg.com/vi/vUCmAUPnU9Q/maxresdefault.jpg",
    "https://farm8.staticflickr.com/7671/17269221094_6c0b6605a8_z.jpg",
    "https://potluck247.files.wordpress.com/2016/03/manchurian.jpg?w=1200"
    ]

    const  Veggiesfriendlycat=["Chats","Soups","Veg","Veg","Chats"]




    async function seedFood(namearr,descarr,imgarr,restaurant,categories){
        try{
            const restaur=await rest.findOne({
                restaurantname:restaurant
            })
            for (let i=0;i<namearr.length;i++){
                const category=await cat.findOne({
                    catename:categories[i]
                })
                let f=new foods({
                    name:namearr[i],
                    description:descarr[i],
                    price:faker.random.number({min:80,max:300}),
                    availability:true,
                    foodimage:imgarr[i],
                    restaurant:restaur._id,
                    rating:faker.random.number({min:3,max:10}),
                    categories:category._id
                })
                await f.save()
            }

        }
        catch(error){
            console.log(error)
            return error
        }
    }
    
    async function closedb(){
        console.log("closing connection")
        await mongoose.disconnect()
    }

    //Whitefield
    await seedFood(FreshFoodname,FreshFooddesc,FreshFoodImg,"Fresh Food",FreshFoodcat)
    await seedFood(BestFoodname,BestFooddesc,BestFoodImg,"Best Food",BestFoodcat)
    await seedFood(RoyalFoodname,RoyalFooddesc,RoyalFoodImg,"Royal Food",RoyalFoodcat)
    await seedFood(GrandFoodname,GrandFooddesc,GrandFoodImg,"Grand Food",GrandFoodcat)
    await seedFood(SpiceFoodname,SpiceFooddesc,SpiceFoodImg,"Spice Food",SpiceFoodcat)
    
    //Jayanagar
    await seedFood(Popeyesname,Popeyesdesc,PopeyesImg,"Popeyes",Popeyescat)
    await seedFood(Caferestname,Caferestdesc,CaferestImg,"Cafe-Restaurant",Caferestcat)
    await seedFood(Udayrestname,Udayrestdesc,UdayrestImg,"Uday Bhojnalay",Udayrestcat)
    await seedFood(Chipotlename,Chipotledesc,ChipotleImg,"Chipotle",Chipotlecat)
    await seedFood(nintyname,nintydesc,nintyImg,"Nintey-Nine",nintycat)

    //Basavanagudi
    await seedFood(Thangabaliname,Thangabalidesc,ThangabaliImg,"Thangabali",Thangabalicat)
    await seedFood(BreakFastname,BreakFastdesc,BreakFastImg,"BreakFast Corner",BreakFastcat)
    await seedFood(IndianFusionname,IndianFusiondesc,IndianFusionImg,"Indian Fusion",IndianFusioncat)
    await seedFood(Indiancornername,Indiancornerdesc,IndiancornerImg,"Indian Corner",Indiancornercat)
    await seedFood(naansensename,naansensedesc,naansenseImg,"naan sense",naansensecat)

    //Jp Nagar
    await seedFood(Udpiname,Udpidesc,UdpiImg,"Udpi Hotel",Udpicat)
    await seedFood(Tastyname,Tastydesc,TastyImg,"Tasty Food",Tastycat)
    await seedFood(Foodswayname,Foodswaydesc,FoodswayImg,"Food's Way",Foodswaycat)
    await seedFood(Dosacornername,Dosacornerdesc,DosacornerImg,"Dosa Corner",Dosacornercat)
    await seedFood(snackscornername,snackscornerdesc,snackscornerImg,"Snack's Corner",snackscornercat)
    
    //Banshankari
    await seedFood(Kannadacafename,Kannadacafedesc,KannadacafeImg,"Kannada Cafe",Kannadacafecat)
    await seedFood(Hallimanename,Hallimanedesc,HallimaneImg,"Halli Mane",Hallimanecat)
    await seedFood(Inoutname,Inoutdesc,InoutImg,"IN-N-Out",Inoutcat)
    await seedFood(Engineername,Engineerdesc,EngineerImg,"The Engineer's Resto",Engineercat)
    await seedFood(Lassilabname,Lassilabdesc,LassilabImg,"Lassi Lab",Lassilabcat)
    
    //Uttarhalli
    await seedFood(Mcdname,Mcddesc,McdImg,"McDonald's",Mcdcat)
    await seedFood(Hungryjacksname,Hungryjacksdesc,HungryjacksImg,"Hungry Jack's",Hungryjackscat)
    await seedFood(Pizzahutname,Pizzahutdesc,PizzahutImg,"Pizza Hut",Pizzahutcat)
    await seedFood(Kfcname,Kfcdesc,KfcImg,"KFC",Kfccat)
    await seedFood(Veggiesfriendlyname,Veggiesfriendlydesc,VeggiesfriendlyImg,"Veggie's Friendly",Veggiesfriendlycat)



    
    await closedb()
}
seeddb()



