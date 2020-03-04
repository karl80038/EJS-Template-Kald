const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const rootDirectory = require('../utilities/path');
const router = express.Router();
const products = [];


router.get('/add-product', function(req, res){
    //res.sendFile(path.join(rootDirectory, 'views', 'add-product.html'));
    res.render('add-product', 
    {
        pageTitle: "Add Product",
        products: "Shop",
        addProduct: "Add Product",
        itemTitle: "Title",
        addProductBtn: "Add",
        path: "/admin/add-product"

    });
});
//Submit user-entered data from the form using POST method
router.post('/add-product', function(req, res){
    console.log(req.body.title);
    products.push({title: req.body.title});
    res.redirect('/');
})

// module.exports = router;
exports.Router = router;
exports.products = products;