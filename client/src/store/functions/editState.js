import axios from 'axios'


export const editState = (newState, callback)=>{

  let API
  let hostname = window.location.hostname

  hostname === 'localhost'
  ? API = 'http://localhost:5000'
  : API = 'https://autogaz.bzdrive.com'

  axios.post( API + "/editState", {state:newState} )
  .then( (res)=> callback(res.data) )
  
}