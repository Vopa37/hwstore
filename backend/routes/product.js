const router = require("express").Router();
const Product = require("../models/product.model");

router.route("/").get((req,res)=>{
    Product.find().then(products => res.send(products))
})

router.route("/").post((req,res)=>{
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    const image = req.body.image;

    const newProduct = new Product({name,description,price,image});

    newProduct.save().then(
        ()=>{res.json("Product added")}
    ).catch(err => res.status(400).json("Error: " + err));
})

module.exports = router;
