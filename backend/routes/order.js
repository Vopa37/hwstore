const router = require("express").Router();
const Order = require("../models/order.model");


router.route("/").get((req,res)=>{
    Order.find().then((orders)=>{
        res.send(orders);
    })
})

router.route("/").post((req,res)=>{
    const userId = req.body.userId;
    const items = req.body.items;
    const price = req.body.price;
    const completed = req.body.completed;

    const newOrder = new Order({userId,items,price,completed});

    newOrder.save().then(
        ()=>{res.json("Order made")}
    ).catch(err => res.status(400).json("Error: " + err));
})


module.exports = router;