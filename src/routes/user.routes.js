import { Router } from 'express';

import {postParticipantSignIn, 
    postParticipantSignUp,
    deleteParticipantSession    
} from "../controllers/user.controller.js"

import { signUpValidation } from '../middleware/signUpValidation.middleware.js';
import { signInValidation } from '../middleware/signInValidation.middleware.js';


const router = Router();

router.post("/sign-up", signUpValidation, postParticipantSignUp);

router.post("/sign-in", signInValidation, postParticipantSignIn);

router.delete("/sessions", deleteParticipantSession);

export default router;