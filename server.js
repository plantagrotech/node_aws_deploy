    const express= require('express');
    const app= express();
    app.get('/api/get',(req,res)=>{
        res.send({message:'nodejs aws deployement'})
    })
    app.listen(9000,(req,res)=>{
        console.log('server running on pot 9000')
    })