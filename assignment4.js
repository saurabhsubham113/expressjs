const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()
app.use(cookieParser())

app.get('/create',(request,response)=>{
    response.cookie('name','express',{maxAge:10000})
    console.log('cookies :',request.cookies)
    response.send('welcome user')
})

app.get('/clear',(request,response)=>{
    response.clearCookie('name')
    response.send('cookie cleared')
})



app.listen(3000,()=>{
    console.log('server started on port 3000')
})