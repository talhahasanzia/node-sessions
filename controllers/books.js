const router = require('express').Router()
const fs = require('fs')

const rawData = fs.readFileSync('./data/books.json')
let books = JSON.parse(rawData)

router.get('', (req, res) => {
    if (isAuthorized(req.headers)) {
        try {
            res.status(200).send(books)
        } catch (e) {
            res.status(404).send(`Error: ${e}`)
        }
    } else {
        res.status(401).send({ error: "unauthorized access" })
    }

}
)


router.post('', (req, res) => {
    if (isAuthorized(req.headers)) {

        const id = books.length + 1

        try {
            const book = { "id": id, "name": req.body.name, "author": req.body.author }
            books.push(book)
            res.status(200).send(books)
        } catch (e) {
            res.status(401).send({ error: `${e}` })
        }
    } else {
        res.status(401).send({ error: "unauthorized access" })
    }
})

router.put('/:id', (req, res) => {
    if (isAuthorized(req.headers)) {
        const id = req.params.id

        console.log(id);

        try {
            const updatedBook = { "name": req.body.name, "author": req.body.author }
            console.log(updatedBook);

            let newBooks = books
                .map(book => {
                    if (book.id == id) {
                        book.name = updatedBook.name
                        book.author = updatedBook.author
                        return book
                    } else {
                        return book
                    }

                })

            books = newBooks

            res.status(200).send(books)
        } catch (e) {
            res.status(401).send({ error: `${e}` })
        }
    } else {
        res.status(401).send({ error: "unauthorized access" })
    }
})

router.delete('/:id', (req, res) => {
    if (isAuthorized(req.headers)) {

        const id = req.params.id

        try {
            books = books.filter(book => book.id != id)
            res.status(200).send(books)
        } catch (e) {
            res.status(401).send({ error: `${e}` })
        }
    } else {
        res.status(401).send({ error: "unauthorized access" })
    }
})


function isAuthorized(headers) {
    const authorization = headers['authorization']

    return (authorization && authorization === "Bearer 1234567")
}


module.exports = router