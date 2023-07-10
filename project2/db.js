const express=require('express');
const appforbook=express.Router();
const mysql=require('mysql');
var connection=mysql.createConnection({
    
                    host     : 'localhost',
                    user     : 'root',
                    password : 'manager',
                    database : 'WPT'
});


appforbook.get("/",(request,response)=>{
    connection.query("select * from book",(error,result)=>{
        if(error==null){
            var data=JSON.stringify(result)
            console.log(data)
            response.setHeader("Content-Type","application/json");
            response.write(data);
            //console.log(result)
            
        }
        else{
            console.log(error);
            console.log("something went wrong")
        }
        response.end();
    })
})


appforbook.post("/",(request,response)=>{
    var query=`insert into book values(${request.body.id},'${request.body.bname}','${request.body.author}','${request.body.btype}',${request.body.price},'${request.body.publishdate}','${request.body.language}')`
    connection.query(query,(error,result)=>{
        if(error==null){
            var data=JSON.stringify(result)
            console.log(data)
            response.setHeader("Content-Type","application/json");
            response.write(data);
            //console.log(result)
            
        }
        else{
            console.log(error);
            console.log("something went wrong")
        }
        response.end();
    })
})



appforbook.put("/:no",(request,response)=>{
    var query=`update book set price=${request.body.price},language='${request.body.language}' where id=${request.params.id}`
    connection.query(query,(error,result)=>{
        if(error==null){
            var data=JSON.stringify(result)
            console.log(data)
            response.setHeader("Content-Type","application/json");
            response.send(data);
            //console.log(result)
            
        }
        else{
            console.log(error);
            console.log("something went wrong");
            response.send(error);
        }
        
    })
})
appforbook.get("/:id",(request,response)=>{
    var query=`select name from book where no=${request.params.id}`
    connection.query(query,(error,result)=>{
        if(error==null){
            var data=JSON.stringify(result)
           // console.log(data)
            response.setHeader("Content-Type","application/json");
            response.send(data);
            //console.log(result)
            
        }
        else{
            console.log(error);
            console.log("something went wrong")
            response.send(error);
        }
        //response.end();
    })
})

module.exports = appforbook;