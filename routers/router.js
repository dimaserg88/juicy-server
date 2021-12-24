import { Router } from 'express';
import FormsController from '../controllers/FormsController.js';

const router = new Router()

router.post('/send', FormsController.send)
export default router