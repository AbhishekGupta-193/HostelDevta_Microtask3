// install express with `npm install express` 
const express = require('express')
const app = express()
const {router}=require('./location.js')
// app.get('/', (req, res) => res.send('Hello World!'))
var cors = require('cors')
app.use(cors())
app.use(express.json());
app.use(router);

app.listen(3000, () => {
  console.log("Server is Listening...")
})

// export 'app'
// module.exports = app