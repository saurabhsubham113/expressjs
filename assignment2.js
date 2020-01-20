const express = require('express')

const app = express()

app.use('/',express.static('public'))


app.get('/',(req,res)=>{
    res.send('hello')
})


app.listen(3000,'0.0.0.0',()=>{
    console.log('server started on port 3000')
})