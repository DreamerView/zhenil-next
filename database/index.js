const express = require('express');
const app = express();
const db = require("./operation");

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/create',async(req,res)=>{
    const result = await db.createTable('constructor_translate');
    res.status(200).json({success:true});
});
app.get('/delete',async(req,res)=>{
    const result = await db.deleteTable('constructor_translate');
    res.status(200).json(result);
});
app.get('/select',async(req,res)=>{
    const s = req.query.table?req.query.table:'';
    const result = await db.selectData(s,'*');
    res.status(200).json(result);
});
app.get('/insert',async(req,res)=>{
    const result = await db.insertData('constructor_translate',{id:2,lang:'ru',name:'Конструктор'});
    const result2 = await db.insertData('constructor_translate',{id:3,lang:'en',name:'Constructor'});
    res.status(200).json(result+' '+result2)
    console.log('Inserted')
})

app.listen(8000, ()=>console.log('server is running on port 8000'));