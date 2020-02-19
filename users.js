const router = require('express').Router()
const fs = require('fs')


const rawData = fs.readFileSync('users.json')
const users = JSON.parse(rawData)

function find(id) {
    const u = users.filter(user => user.id === id)

    if (!u.length) {
        throw new Error("User not find")
    }

    return u
}


router.get('', (req, res) => {
    try{
        res.status(200).send(find(id))
    }catch(e){
        res.status(404).send(`Error`)
    }
    
}
)


module.exports = router