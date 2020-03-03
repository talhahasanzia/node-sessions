# node-sessions

## session-3 assignment questions:
- I created a class to use with POST when request body will be needed to serialize, I did it directly. Is there any best practice or guide how should we handle request body ?

```
// instead of casting this data into a class i created as "Book"
const updatedBook = { "name": req.body.name, "author": req.body.author }
```

