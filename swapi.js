const router = require('express').Router()
const axios = require('axios')
const url = require('url')
const querystring = require('querystring')

const filmsApi = "https://swapi.co/api/films"

function getFilms() {
    return {
        method: 'get',
        url: filmsApi
    }
}


function getFilmsByTitle(title) {
    return {
        "method": 'get',
        "url": filmsApi,
        params: {
            "search": title
        }
    }
}

router.get('', (req, res) => {
    try {
        // todo: extract this block to another function and make it work with res object
        axios(getFilms())
            .then((response) => {              
                res.status(200).send(response.data)
            })
            .catch((error) => {
                console.log(error);
                res.status(400).send(error)
            })
    } catch (e) {
        console.log(e);
        res.status(404).send(`Error: Cannot complete request, code: 420-69`)
    }

}
)


router.get('/title', (req, res) => {
    try {
        // todo: extract this block to another function and make it work with res object
        const parsedUrl = url.parse(req.url)
        const parsedQuery = querystring.parse(parsedUrl.query)
        axios(getFilmsByTitle(parsedQuery.search))
            .then((response) => res.status(200).send(response.data))
            .catch((error) => {
                console.log(error);
                res.status(400).send(error)
            })

    } catch (e) {
        console.log(e);
        res.status(404).send(`Error: Cannot complete request, code: 420-69`)
    }

}
)

module.exports = router