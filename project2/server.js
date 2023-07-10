const express=require('express');

const bookrelatedroute=require('./db.js');


const app=express();



app.use((request,response,next)=>{
    response.setHeader('Access-Control-Allow-Origin',"*");
     response.setHeader('Access-Control-Allow-Headers',"*");
     response.setHeader('Access-Control-Allow-Methods',"*");
        next();
 });
app.use(express.json());

app.use('/book',bookrelatedroute);



app.listen(8080,()=>{
    console.log("server running at 8080");
});