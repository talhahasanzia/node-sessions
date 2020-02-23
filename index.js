const express = require('express')
const app = express()
const users = require('./users')
const swapi = require('./swapi')

app.use('/users', users)
app.use('/films', swapi)

app.get('/', (req, res) => res.send(` You shouldn't be here use either: \n/users\n/films`))

app.listen(4000, () =>{
    console.log(`Server running...`);

})