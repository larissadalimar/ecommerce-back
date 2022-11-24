import { productsCollection, usersCollection, sessionsCollection} from "../database/db.js";
import { ObjectId } from "mongodb";

export async function getWines(req, res){

    try{

        const token = req.token;

        const wines = await productsCollection.find().toArray();
        
        const sessions = await sessionsCollection.findOne({token});

        let user = await usersCollection.findOne({_id: sessions.userId});
        user = user.name;

        res.send({wines, user});

    } catch (err) {

        console.log(err);
        res.status(500).send('Server not running');
    }
}

export async function getWineProduct(req,res){

    try {
        console.log(req.headers);
        const {id} = req.headers;

        const wine = await productsCollection.findOne({_id: ObjectId(id)});

        res.send(wine);

    } catch (err) {

        console.log(err);
        res.status(500).send('Server not running');
    }
}