const express = require('express')
const cookieParser = require('cookie-parser')
const session = require('express-session')

const app = express()

app.use(cookieParser())
app.use(session({secret:`It's a secret 1234!@#$`,saveUninitialized: false,resave: true}))

app.get('/',(request,response)=>{
    if(request.session.page_views){
        request.session.page_views++
        response.send(`<h1>you have visisted this page  ${request.session.page_views} times</h1>`)
    }
    else{
        request.session.page_views = 1
        response.send('<h1>You have visited the page for the first time!!!</h1>')
    }
})

app.listen(3000,()=>{
    console.log('server started on port 3000')
})