var express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send("Aqui andamos")
})

app.listen(3000, () => {
  console.log('server running un 3k');
})