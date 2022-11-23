import bcrypt from 'bcrypt';
import {v4 as uuid} from "uuid";

import { usersCollection, sessionsCollection } from "../database/db.js";



export async function postParticipantSignUp (req,res){

    const infoUser = req.body;

    try{

        const passwordHash = bcrypt.hashSync(infoUser.password, 12);

        delete infoUser.confirmPassword;

        await usersCollection.insertOne({...infoUser, password:passwordHash});
        res.sendStatus(201);

    } catch (err){
        console.log(err);
        res.status(500).send('Server not running');
    }
}

export async function postParticipantSignIn (req, res){

    const { email } = req.body;

    const token = uuid();

    try{
        
        const userExist = await usersCollection.findOne({email})

        const userSession = await sessionsCollection.findOne({userId: userExist._id});

        if(userSession){
            return res.send(userSession.token);
        } 

        await sessionsCollection.insertOne({
            userId: userExist._id,
            token
        });

        res.send(token);

    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}