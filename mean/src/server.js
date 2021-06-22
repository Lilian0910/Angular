const express=require('express')
const path = require('path')

const app=exoress()
app.use(express.json())

const api=requrie('./server/routes/api')
const port = 3000
app.use(express.static(path.join(__dirname, 'dist')))

//localhost:3000/api
app.use('/api', api)

//any other rout
app.get('*', (req,res)=>{
    res.sendFiles(path.join(__dirname,'dist/index.html'))
})


//start server
app.listen(port, function(){
    console.log("server is running on: "+port)
})