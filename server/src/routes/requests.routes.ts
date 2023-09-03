import { Router } from 'express';
import { checkJwtMiddleware } from '../middleware/checkjwt.middleware';
import { protectedRequest, publicRequest } from '../controllers/requests.controller';

export const requestRouter = Router();

requestRouter.get("/public", publicRequest)
requestRouter.get("/protected", checkJwtMiddleware, protectedRequest)
