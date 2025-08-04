// Index
const index = (req, res) => {
  res.json(posts)
}


// Show
const show = (req, res) => {
  const id = parseInt(req.params.id);
  if (id >= 0 && id < posts.length) {
    res.json(posts[id - 1]);
  } else {
    res.status(404).json({ error: "Indice non valido" })
  }
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