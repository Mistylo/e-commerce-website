import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";

// global variables

const currency = "EUR";
const deliveryFee = 10;

// Gateway Initilization

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

// Placeing orders using COD method

const placeOrder = async (req, res) => {

    try {
        const {userId, items, amount, address} = req.body;
        const order = {userId, items, address, amount, paymentMethod:"COD", payment: false, date:Date.now()}

        const newOrder = new orderModel(order);
        await newOrder.save();
        await userModel.findByIdAndUpdate(userId, {cartData:{}});

        res.json({success:true, message:"Order placed successfully"})

    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Failed to place order"})
    }

}

// Placeing orders using Stripe method

const placeOrderStripe = async (req, res) => {
    try {
        const {userId, items, amount, address} = req.body;
        const {origin} = req.headers;

        const order = {userId, items, address, amount, paymentMethod:"Stripe", payment: false, date:Date.now()}

        const newOrder = new orderModel(order);
        await newOrder.save();

        const line_items = items.map((item)=> ({
            price_data:{
                currency:currency,
                product_data:{
                    name:item.name},
                    unit_amount:item.price*100
            },
            quantity:item.quantity
        }))

        line_items.push({
            price_data:{
                currency:currency,
                product_data:{
                    name:'Delivery Fee'},
                    unit_amount: deliveryFee * 100
            },
            quantity:1
        })

        const session = await stripe.checkout.sessions.create({
            success_url: `${origin}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${origin}/verify?success=false&orderId=${newOrder._id}`,
            line_items,
            mode: "payment",
        })
        

        res.json({success:true, session_url: session.url})

    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
    }
}

//Verify Stripe
const verifyStripe = async (req, res) => {
    const {orderId, success, userId} = req.body

    try {
        if(success === "true"){
            await orderModel.findByIdAndUpdate(orderId, {payment:true})
            await userModel.findByIdAndUpdate(userId, {cartData:{}})
            res.json({success:true, message:"Payment successfull"})
        }else{
            await orderModel.findByIdAndDelete(orderId)
            res.json({success:true, message:"Payment failed"})
        }
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
    }
}

// Placeing orders using Razorpay method

// const placeOrderRazorpay = async (req, res) => {
    
// }

// All orders data for Amin Panel

const allOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({})
        res.json({success:true, orders})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
    }
}

// User order data for frontend

const userOrders = async (req, res) => {
    try {
        
        const {userId} = req.body
        const orders = await orderModel.find({userId})
        res.json({success:true, orders})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Failed to place order"})
    }
}

// update order status from Admin panel

const updateStatus = async (req, res) => {
    try {
        const {orderId, status} = req.body

        await orderModel.findByIdAndUpdate(orderId, {status})
        res.json({success:true, message:"Order status updated successfully"})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
    }
}

export { placeOrder, placeOrderStripe, allOrders, userOrders, updateStatus, verifyStripe }