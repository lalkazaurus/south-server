import express from 'express';
import Product from '../models/Product.js';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { name, description, price, image } = req.body;
        const newProduct = new Product({ name, description, price, image });
        await newProduct.save();
        res.json(newProduct);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/', async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

export default router;