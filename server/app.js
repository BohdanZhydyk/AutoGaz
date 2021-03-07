const express = require('express')
const cors = require('cors')

const state = require('./state')



const app = express()

app.use( cors() )



app.get('/getState', (req, res)=>{ res.send(state) })


const port = 5000

app.listen(port, ()=>{
	console.log(`server started on port ${port}`)
})