// install express with `npm install express` 
const express = require('express')
const app = express()
var cors = require('cors')
app.use(cors())
app.use(express.json());

app.use(require('./location'));
app.use(require('./lat_lon'));

// app.listen(3000, () => {
//   console.log("Server is Listening...")
// })

module.exports = app