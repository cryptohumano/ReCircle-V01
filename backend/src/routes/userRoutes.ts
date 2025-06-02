import express from 'express';
import { registerUser, getUserProfile } from '../controllers/userController';

const router = express.Router();

router.post('/register', registerUser);
router.get('/profile/:walletAddress', getUserProfile);

export default router; 