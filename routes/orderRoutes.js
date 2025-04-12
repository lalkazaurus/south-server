import express from 'express';
import Order from '../models/Order.js';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { name, surname, phone_number, email, payment, receiver_phone_number, receiver_email, receiver_surname, comment, products } = req.body;
        const newOrder = new Order({ name, surname, phone_number, email, payment, receiver_phone_number, receiver_email, receiver_surname, comment, products });
        await newOrder.save();
        res.json(newOrder);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default router;