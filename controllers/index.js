const express = require('express')
const app = express()
const books = require('./books')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/books', books)

app.get('/', (req, res) => res.send(` You shouldn't be here use either: \n/users\n/films`))

app.listen(4000, () =>{
    console.log(`Server running...`);
})