const express = require("express");
const app = express();
const porta = 3000;

app.get('/Games', (req, res)=>{
res.send("Minha primeira pagina");
});

app.get('/Games/Genshin-Impact', (req, res)=>{
res.send("nice");
});

app.listen(porta, ()=>{
  console.log("funcionando perfeitamente")
})