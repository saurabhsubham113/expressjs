const express = require('express')

const app = express()

app.use(express.json())

app.use('/',function log(req,res,next){
    console.log('1st middleware function')
    next()
})


app.get('/',(request,response,next)=>{
    console.log('get request')
    response.send('welcome to assignment 1')
    next()
})

app.use('/',(req,res,next)=>{
    console.log('2nd middleware function')
    next()
})

app.get('/user',(request,response,next)=>{
    response.send('this is user API')
    next()
})
app.use('/user',(req,res,next)=>{
    console.log('user api next middleware ')
})

app.listen(3000,'0.0.0.0',()=>{
    console.log('server started on port 3000')
})