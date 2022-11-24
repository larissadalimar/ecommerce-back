export async function tokenAuthorization(req, res, next){

    try{
        const { authorization } = req.headers;

        const token = authorization?.replace("Bearer ", "");

        if (!token){
            return res.sendStatus(401);
        }

        req.token = token

    } catch (err){
        console.log(err)
    }

    next();
}