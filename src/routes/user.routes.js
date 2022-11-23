import { Router } from 'express';

import {postParticipantSignUp} from "../controllers/user.controller.js"

import { signUpValidation } from '../middleware/signUpValidation.middleware.js';


const router = Router();

router.post("/sign-up", signUpValidation, postParticipantSignUp);

export default router;