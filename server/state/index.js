const fs = require('fs')
const path = require('path')

const admin = require('./admin.json')
const logo = require('./logo.json')
const services = require('./main/services.json')
const services_bmw = require('./main/services_bmw.json')

const gas = require('./main/gas.json')
const skp = require('./main/skp.json')
const gallery = require('./main/gallery.json')
const contacts = require('./main/contacts.json')

const footer = require('./footer.json')
const cookie = require('./cookie.json')
const error = require('./error.json')


exports.state = [
  admin,
  logo,

  services,
  services_bmw,
  gas,
  skp,
  gallery,
  contacts,

  footer,
  cookie,
  error
]



// let file = "./state/error.json"
// let data = {}
// // fs.writeFileSync( file, JSON.stringify(data, null, 2) )