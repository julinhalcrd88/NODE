
//chama o express
var express = require('express');

var app = express();

//Cria as rotas
app.get('/', (req, res) => {
      res.send("pagina pricipal")
})
//liagar o servidor
app.listen(3000, () => {
      console.log("servidor ligado")
}) 