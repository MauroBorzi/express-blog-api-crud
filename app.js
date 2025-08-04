const express = require('express')
const app = express()
const port = 3000

// Richiamo le rotte di post
const postRouters = require(`./routers/posts.js`)


app.use(express.static(`public`))


app.get('/', (req, res) => {
  res.send('Server del mio blog')
})


app.use(`/posts`, postRouters)


app.listen(port, () => {
  console.log(`Il server rimane in ascolto sulla porta ${port}`)
})

