const express = require("express");
const app = express();
const porta = 3000;

app.use(express.static('public'));
app.set ('view engine' , 'ejs');
app.engine ('html', require ('ejs').renderFile);



app.get('/', (req, res)=>{
res.render("index.ejs");
});

app.get('/genshin', (req, res)=>{
res.render("genshin/index.ejs");
});

app.get('/genshin/personagens', (req, res)=>{
res.render("genshin/personagens/index.ejs");
});

app.listen(porta, ()=>{
  console.log("funcionando perfeitamente")
})