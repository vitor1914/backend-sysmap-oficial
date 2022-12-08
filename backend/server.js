const express = require("express");
const AuthController = require("./src/controllers/AuthController"); // importando o controoler user
//const user = require("./src/models/user"); //criado agora 28/11 as 16:30

const app = express();

//app.use(express.json()); // aparece os dados registrados no terminal

app.use('/auth', AuthController) //executar rota user controller



app.listen(3001, () => {
    console.log('server is run!! Porta 3001!!')
})
app.get('/', (req, res) => {
    res.send('SERVIDOR ONLINE!')
})



