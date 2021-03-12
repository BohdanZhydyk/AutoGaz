const express = require('express')
const cors = require('cors')

var bodyParser = require('body-parser')

const fs = require('fs')

const state = require('./state/index.json')

const app = express()

app.use( cors() )


app.use(bodyParser.json())



app.get('/getState', (req, res)=>{ res.send(state) })

app.post('/editState', (req, res)=>{

	fs.writeFile('./state/backups/backup_'+new Date().getTime()+'.json', JSON.stringify(state, null, 2), (err)=>{

		if(err){ console.log(err) }

		else{


			fs.writeFile('./state/index.json', JSON.stringify(req.body.state, null, 2), (err)=>{
		
				if(err){ console.log(err) }
				
				else{
					
					res.send( req.body.state )

				}
		
			})

		}
		
	})

})


const port = 5000

app.listen(port, ()=>{
	console.log(`server started on port ${port}`)
})