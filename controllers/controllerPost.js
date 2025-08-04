// importiamo l'array
const posts = require(`../data/postsList.js`)

// Index
const index = (req, res) => {
  res.json(posts)
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
  res.send(`Cancellazione del post con id: ${req.params.id}`)
}


module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy
}