import { usersCollection } from "../database/db.js";

import { userSignUpSchema } from "../models/userSignUp.models.js";

export async function signUpValidation (req, res, next){

    const infoUser = req.body;

    
    const userExists = await usersCollection.findOne({email: infoUser.email});

    if(userExists){
        return res.status(409).send({message:"Esse email já existe"});
    }

    const {error} = userSignUpSchema.validate(infoUser, {abortEarly: false});

    if(error){
        const erros = error.details.map(detail.message);
        return res.status(422).send(erros);
    }

    
    next();
}