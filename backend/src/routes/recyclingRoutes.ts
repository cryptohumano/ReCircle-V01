import express from 'express';
import { createRecyclingRecord, getUserRecyclingHistory } from '../controllers/recyclingController';

const router = express.Router();

router.post('/record', createRecyclingRecord);
router.get('/history/:userId', getUserRecyclingHistory);

export default router; 