import { Request, Response, NextFunction} from "express";
import { get } from "lodash";

const requiresUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    //récupérer l'utilisateur de la requête
    const user = get(req, "user");

    if(!user) {
        return res.sendStatus(403);
    }
    
    return next(); 
}

export default requiresUser