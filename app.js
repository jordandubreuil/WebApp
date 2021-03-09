var express = require("express")
var app = express()
var path = require('path');
var port = process.env.PORT || 3000

app.use(express.static(__dirname+"/public"))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+"/public/index.html"))
})

app.post('/data', function(req,res){
    console.log("posting data")
    console.log(req.body, req.body.name, req.body.email)
    res.redirect('/')
})
app.listen(port,function(){
    console.log("Listening on port 3000")
})

