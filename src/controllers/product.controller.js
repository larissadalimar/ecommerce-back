import { productsCollection, usersCollection, sessionsCollection} from "../database/db.js";

export async function getWines(req, res){

    try{
        
        const token = req.token;

        const wines = await productsCollection.find().toArray();
        console.log(wines)

        const sessions = await sessionsCollection.findOne({token});

        let user = await usersCollection.findOne({_id: sessions.userId});
        user = user.name;

        res.send({wines, user});

    } catch (err){

        console.log(err);
        res.status(500).send('Server not running');
    }
}