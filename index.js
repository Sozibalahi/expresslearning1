const express = require('express')
const app = express()
const path = require('path');
const port = 3000
app.use(express.static('public'))

app.use('/', require(path.join(__dirname, 'routes/foofestival.js')))




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})