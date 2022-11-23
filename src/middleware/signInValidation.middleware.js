import bcrypt from 'bcrypt';
import { usersCollection } from "../database/db.js";

export async function signInValidation (req, res, next){

    const {email, password} = req.body;


    const userExist = await usersCollection.findOne({email})

    if(!userExist){
        return res.sendStatus(401);
    }

    const passwordOk = bcrypt.compareSync(password, userExist.password);

    if(!passwordOk){
        return res.sendStatus(401); 
    }
    
    req.user = userExist
    
    next();
}