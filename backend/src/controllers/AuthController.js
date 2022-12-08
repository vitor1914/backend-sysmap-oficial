const express = require("express");

const UserModel = require("../models/user"); // chamando a pasta model User

const router =  express.Router(); //chamando a route

router.post("/register", async (req, res) => {   /// todos os dados enviados via post, sera enviado aqui
    
const{email} = req.body;                  //Codigos linha 9 a 14 diz sobre usuario cadastro no sis(usuario existente)

if(await UserModel.findOne({email})){
    return res.status(400).json({
        error: true,
        message: "Usuario existente"
    })
}

const User = await UserModel.create(req.body); //async não sabe o momento para execução
   
    User.password = undefined;
    
    return res.json({
    error: false,
    message: "Registrado com sucesso!",
    data: User

    });
});

router.post("/autentica", async (req, res) => {

    const {email, password} = req.body;
    const user = UserModel.findOne({email});

    console.log(user);

    if(!user){
        return res.status(400).json({
        error: true,
        message: 'User not found'
    })
}
    return res.json(user);
})


module.exports = router;
