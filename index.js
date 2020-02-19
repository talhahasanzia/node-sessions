const express = require('express')
const app = express()
const users = require('./users')

app.use('/users', users)

app.get('/', (req, res) => res.send('Hello from Express'))

app.listen(4000, () =>{
    console.log(`Server running...`);

})