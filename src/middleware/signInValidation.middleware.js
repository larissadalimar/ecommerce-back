import { usersCollection } from "../database/db.js";
import bcrypt from 'bcrypt';

export async function signInValidation (req, res, next){

    const {email, password} = req.body;

    try{

        const userExist = await usersCollection.findOne({email})

        if(!userExist){
            return res.sendStatus(401);
        }

        const passwordOk = bcrypt.compareSync(password, userExist.password);

        if(!passwordOk){
            return res.sendStatus(401); 
        }

    } catch (err){
        console.log(err);
        res.status(500).send('Server not running');
    }

    next();
}