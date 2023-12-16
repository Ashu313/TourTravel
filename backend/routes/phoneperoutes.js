import {newPayment, checkStatus} from '../controllers/paymentControllers.js';
import express from "express";

const router = express();

router.post('/payment', newPayment);
router.post('/status/:txnId', checkStatus);

export default router;