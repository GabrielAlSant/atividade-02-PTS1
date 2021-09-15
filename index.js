const express = require("express");
const app = express();
const porta = 3000;

app.get('/', (req, res)=>{
res.send("Minha primeira pagina");
});

app.get('/contatos/bah', (req, res)=>{
res.send("nice");
});

app.listen(porta, ()=>{
  console.log("funfando")
})