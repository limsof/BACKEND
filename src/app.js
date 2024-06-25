 const express = require('express');
 const dotenv = require('dotenv');
 const cors = require('cors');
  
 
 dotenv.config();
 const app= express();

 const port= process.env.port || 4000;
 

    const routerApi = require('./routes');
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    
    app.get('/',(req,res)=>{
        res.send('backend con nodeJS - express + CRUD api rest de limber')
    });

    routerApi(app);


    app.listen(port,()=>{
        console.log("port ==> ",port);
    })
