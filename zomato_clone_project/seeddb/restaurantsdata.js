const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/zomato_clone",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

var db=mongoose.connection;

const restaurant=require("../src/models/restaurant")
async function seeddb(){
    async function seedrest(name,location,review,img){
        try{
            const rest=await new restaurant({
                restaurantname:name,
                restaurantlocation:location,
                review:review,
                images:img
            })
            await rest.save()
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

    await seedrest("Fresh Food","White Field","4","https://www.elitetraveler.com/wp-content/uploads/2007/02/Alain-Ducasse-scaled.jpg")
    await seedrest("Best Food","White Field","4","https://media.architecturaldigest.com/photos/590cc6c3b3064307ffee59a4/master/w_3000,h_2000,c_limit/Tallest%20Restaurants%20in%20the%20World%207.jpg")
    await seedrest("Royal Food","White Field","4.5","https://img.traveltriangle.com/blog/wp-content/uploads/2018/02/the-terrace.jpg")
    await seedrest("Grand Food","White Field","3","https://i.guim.co.uk/img/media/cb7ecc99b0a2e64b18468d655f3226b0cd71be6a/0_283_5843_3505/master/5843.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=7c9fc03d5c4f552fb624dad22adf1298")
    await seedrest("Spice Food","White Field","3.5","https://assets.bonappetit.com/photos/610aa6ddc50e2f9f7c42f7f8/master/pass/Savage-2019-top-50-busy-restaurant.jpg")
 
    await seedrest("Popeyes","Jayanagar","4","https://www.rd.com/wp-content/uploads/2018/08/shutterstock_414161185-e1533240113298.jpg?resize=700,466")
    await seedrest("Cafe-Restaurant","Jayanagar","4","https://www.namebounce.com/storage/images/ff071da87e5b0b489b4f94197f56ca33.jpg")
    await seedrest("Uday Bhojnalay","Jayanagar","4.5","https://pr0.nicelocal.in/TiU3OpNUFD7hQFMlNDOG9A/640x440,fit,q85/4px-BW84_n0QJGVPszge3NRBsKw-2VcOifrJIjPYFYkOtaCZxxXQ2XIAPoQ1ry-96yrc9yJ3uIwArDZhkYqqblbLB3N9-3ScJaUk7J1qZLewtvGRjFXVPQ")
    await seedrest("Chipotle","Jayanagar","3","http://www.forketers.com/wp-content/uploads/2017/11/how-to-name-restaurant.jpg")
    await seedrest("Nintey-Nine","Jayanagar","3.5","https://media-cdn.tripadvisor.com/media/photo-s/02/cb/cd/e6/ninety-nine-restaurant.jpg")

    await seedrest("Thangabali","Basavanagudi","4","https://images.desimartini.com/media/external/55575-_828cae7c-5a46-11e7-9d38-39c470df081e.jpg")
    await seedrest("BreakFast Corner","Basavanagudi","4","https://media-cdn.tripadvisor.com/media/photo-s/13/e7/ef/60/breakfast-spread.jpg")
    await seedrest("Indian Fusion","Basavanagudi","4.5","https://foodology.ca/wp-content/uploads/2019/12/indian-fusion-restaurant-1-22.jpg")
    await seedrest("Indian Corner","Basavanagudi","3","https://best4businesses.com/wp-content/uploads/2019/06/fine-dining-indian.jpg")
    await seedrest("naan sense","Basavanagudi","3.5","https://fastly.4sqi.net/img/general/600x600/3395440_wJNLGBSKRzeOwxMVhnbMiIkE4WJ3oMNT62Hi0L2Ok74.jpg")
  
    await seedrest("Udpi Hotel","JP Nagar","4","https://www.timbertrail.in/assets/images/dine1.jpg")
    await seedrest("Tasty Food","JP Nagar","4","https://www.posist.com/restaurant-times/wp-content/uploads/2016/03/bar-601318_1920-800x492.jpg")
    await seedrest("Food's Way","JP Nagar","4.5","https://media-cdn.tripadvisor.com/media/photo-s/07/c1/fa/5e/name-board.jpg")
    await seedrest("Dosa Corner","JP Nagar","3","https://10619-2.s.cdn12.com/rests/original/801_503140874.jpg")
    await seedrest("Snack's Corner","JP Nagar","3.5","https://lh3.googleusercontent.com/Yw-9c0hjiacu9xqpkktHzUY7WzJkg-tjrzLWGkgs9LgW3aSGIRw0jlQHH84xMLO1-RYvXBXK=w1080-h608-p-no-v0")
    
    await seedrest("Kannada Cafe","Banashankari","4","https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/article_images/2019/07/17/Kannada%20Cafe%2C%20started%20just%20a%20month%20ago%20has%20families%20coming%20in%20all%20the%20way%20from%20Whitefield.%20%282%29-1563345933.jpg?itok=CBt-4koa")
    await seedrest("Halli Mane","Banashankari","4","https://content.jdmagicbox.com/comp/dakshina_kannada/l2/9999px824.x824.180921223038.y5l2/catalogue/sa-hallimane-family-restaurant-dakshina-kannada-restaurants-qtoolyaf3k.jpg?clr=#333333?fit=around%7C270%3A130&crop=270%3A130%3B%2A%2C%2A")
    await seedrest("IN-N-Out","Banashankari","4.5","https://static.toiimg.com/thumb/msid-54311878,width=1200,height=900/54311878.jpg")
    await seedrest("The Engineer's Resto","Banashankari","3","https://b.zmtcdn.com/data/pictures/3/19596753/f7804b7d1a2a90e7adf84005af556d0b.jpg")
    await seedrest("Lassi Lab","Banashankari","3.5","https://i.ytimg.com/vi/4vgDMsizSZ4/sddefault.jpg")
   
    await seedrest("McDonald's","Uttarahalli","4","https://resize.indiatvnews.com/en/resize/newbucket/715_-/2021/04/mcdonalds-pti-1617962583.jpg")
    await seedrest("Hungry Jack's","Uttarahalli","4","https://www.adyen.com/dam/jcr:2f83b3eb-abc6-4029-b8d6-8f9a4b378063/pressmedia-hungryjacks.jpg")
    await seedrest("Pizza Hut","Uttarahalli","4.5","https://cdn.winsightmedia.com/platform/files/public/2020-04/background/pizza-hut-exterior-shutterstock_1554481275_1564677281_1588183194.jpg?VersionId=_7sTbFhEe0F_bX8rwObJB9r7IT6Rpxh6")
    await seedrest("KFC","Uttarahalli","3","https://www.gannett-cdn.com/media/2020/03/23/USATODAY/usatsports/247WallSt.com-247WS-657876-imageforentry9-vp7.jpg?width=660&height=371&fit=crop&format=pjpg&auto=webp")
    await seedrest("Veggie's Friendly","Uttarahalli","3.5","https://content3.jdmagicbox.com/comp/thane/60/022p8016660/catalogue/veggies-veg-restaurant-mira-road-thane-home-delivery-restaurants-7pbwb.jpg")
    
    await closedb()
}
seeddb()
    



