# node-sessions
Created separate methods to construct request object for axios:
```
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

```
See [index.js](https://github.com/talhahasanzia/node-sessions/blob/session-2-axios-get-apis-swapi/index.js) for full implementaion.
## session-2 assignment questions:
- How to break response logic in different method and respond from another method using ```res``` object or any other better way?

_This stuff shouldnt be in router method, do you agree?_
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
```
TypeError: Converting circular structure to JSON
    at JSON.stringify (<anonymous>)
    at stringify (D:\projects\node-sessions\node_modules\express\lib\response.js:1123:12)
    at ServerResponse.json (D:\projects\node-sessions\node_modules\express\lib\response.js:260:14)
    at ServerResponse.send (D:\projects\node-sessions\node_modules\express\lib\response.js:158:21)
    at axios.then (D:\projects\node-sessions\node-sessions\swapi.js:52:49)
    at process._tickCallback (internal/process/next_tick.js:68:7)
```
- I used ```url``` and ```querystring``` packages to parse query strings in url, are there any recommended practice or libraries?
