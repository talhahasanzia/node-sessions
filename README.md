# node-sessions

## session-2 assignment questions:
- How to break response logic in different method and respond from another method using ```res``` object or any other better way
```
router.get('/title', (req, res) => {
    try {
        // todo: extract this block to another function and make it work with res object, how??
        // passing res object into another function doesnt seem right and it doesnt work by simply passing it, do we need binding?
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
```
- Getting circular JSON error when returning data (```response```) from swapi as is, returning ```response.data``` works fine. why?
- I used ```url``` and ```querystring``` packages to parse query strings in url, are there any recommended practice or libraries?
