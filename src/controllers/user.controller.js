import bcrypt from 'bcrypt';

import { usersCollection } from "../database/db.js";

import { userSignUpSchema } from "../models/userSignUp.models.js";



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