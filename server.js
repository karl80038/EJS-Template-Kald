const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const path = require('path');
//injecting code from shop.js
const userRoute = require('./routes/shop');
const adminRoute = require('./routes/admin');
const app = express();

//Use of the Path package ensures the server always finds the file regardless of the operating system or file system the app currently runs on.
//path.join(__dirname, 'folder', 'file.html')

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.set('views', 'views');



app.use(userRoute);
app.use('/admin', adminRoute.Router);


app.use(function(req, res, next){
    //res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    //console.log(path.join(__dirname, 'views', '404.html'));
    res.status(404).render('404', 
    {pageTitle: "Page not Found.", 
    pageNotFound: "Our apologies, but we were unable to find the requested page.",
    message: "Please view our latest offerings.",
    path: ""});

})
app.listen(5000, ()=> {
    console.log("Server is running on port 3000.");
})