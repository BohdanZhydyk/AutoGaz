import axios from 'axios'


export const getState = (setState)=>{

  let API
  let hostname = window.location.hostname

  hostname === 'localhost'
  ? API = 'http://localhost:5000'
  : API = 'https://autogaz.bzdrive.com'

  axios.get( API + "/getState" ).then( (res)=>{ setState(res.data.state) })
  
}