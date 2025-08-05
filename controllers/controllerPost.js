// importiamo l'array
const posts = require(`../data/postsList.js`)

// Index
const index = (req, res) => {
  //  implementazione di un filtro di ricerca
  const tags = req.query.tags
  let filteredPost = posts

  if (tags) {
    filteredPost = posts.filter(item => {
      return item.tags.map(tags => tags.toLowerCase()).includes(tags.toLowerCase())
    })
  }
  res.json(filteredPost)
}


// Show
const show = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(item => item.id === id)
  if (!post) {
    return res.status(404).json({ error: "404 Not Found", message: "Post non trovato" })
  }
  res.json(post)
}


// Create
const store = (req, res) => {
  console.log(req.body)
  res.send(`Inserisci un nuovo post`)
}


// Update
const update = (req, res) => {
  res.send(`Modifica totale del post con id: ${req.params.id}`)
}


// Modify
const modify = (req, res) => {
  res.send(`Modifica parziale del post con id: ${req.params.id}`)
}


// Delete
const destroy = (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(item => item.id === id)
  if (!post) {
    return res.status(404).json({ error: "404 Not Found", message: "Post non trovato" })
  }
  posts.splice(posts.indexOf(post), 1)

  res.sendStatus(204)

  console.log(posts)
}


module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy
}