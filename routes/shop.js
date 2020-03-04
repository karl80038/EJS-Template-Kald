const express = require('express');
const path = require('path');
const rootDirectory = require('../utilities/path');
const adminData = require('./admin');
const router = express.Router();

router.get("/", function(req, res){
    const products = adminData.products;
    console.log(products);
    //res.sendFile(path.join(rootDirectory, 'views', 'shop.html'));
    res.render('shop', {
        pageTitle: 'Welcome to My Store!',
        products: products,
        path: "/"
    });
})

module.exports = router;