const express = require('express')
const bodyParser = require('body-parser')
const app = express()


const urlencodedParser = bodyParser.urlencoded({extended:true})

const userName = [''] 

app.get('/login',(request,response)=>{
    response.sendFile('./public/index.html',{root:__dirname})
    
})
app.post('/login',urlencodedParser,(request,response)=>{ 
    // response.end(JSON.stringify(request.body))
    
    const name =  request.body.fname
    console.log(userName.length)

    for (let index = 0; index < userName.length; index++) {
        const element = userName[index];
        // console.log(element)
        console.log(userName)
        if (name == element) {
            response.send(`welcome ${element}`)
            return;
        } 
    }
    userName.push(request.body.fname)
    response.redirect('/register')
})

app.get('/register',(request,response)=>{
    response.sendFile('./public/register.html',{root:__dirname})
})
app.post('/register',(request,response)=>{
    response.redirect('/login')
})

app.listen(3000,'0.0.0.0',()=>{
    console.log('server started on port 3000')
})