import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    phone_number: { type: String, required: true },
    email: { type: String },
    payment: { type: String, required: true },
    receiver_phone_number: { type: String, required: true },
    receiver_email: { type: String, required: true },
    receiver_surname: { type: String, required: true },
    comment: { type: String },
    products: { type: Object, required: true },
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);
export default Order;