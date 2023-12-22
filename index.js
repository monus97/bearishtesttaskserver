require('dotenv').config();
require('./model/config')
const express = require('express')
const bodyParser = require('body-parser');
const app = express();
const multer = require('multer')
 const router = require('./routes/imageRouter')
app.use(bodyParser.json())
app.use(express.json())
 app.use(bodyParser.urlencoded({extended:true}))

app.use('/public/assets/images',express.static('public/assets/images'))

app.use((err, req, res, next) => {
    if (err instanceof multer.MulterError) { 
        return res.status(400).json({
         err_message: "please upload jpg/jpeg/png/pdf files only"
        });
    } else { 
        return res.status(400).json({
            err_message: err.message
        });
    }
 });

// routes
app.use('/',router)
// server port
app.listen(process.env.PORT,()=>{
    console.log(`server started at port : ${process.env.PORT}`);
})