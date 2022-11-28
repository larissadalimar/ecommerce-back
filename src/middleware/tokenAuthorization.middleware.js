import { sessionsCollection, usersCollection } from "../database/db.js";

export async function tokenAuthorization(req, res, next){

    const { authorization } = req.headers;

    const token = authorization?.replace("Bearer ", "");

    try{

        const session = await sessionsCollection.findOne({token})

        if (!session){
            return res.sendStatus(401);
        }

        const user = await usersCollection.findOne({_id: session.userId})

        if (!user){
            return res.sendStatus(401);
        }

        req.token = token

        req.user = user

    } catch (err){
        console.log(err)
    }

    next();
}