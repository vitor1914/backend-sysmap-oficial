const { default: mongoose } = require("mongoose");

mongoose.connect("mongodb+srv://vitor:vitor@teste.h00nydz.mongodb.net/teste?retryWrites=true&w=majority", {}, (Error) =>{
   if(Error){
    console.log('falha ao conectar ao mongo');
    console.log(error);
    return;
   } 
   console.log('conexão ao mongoDB ok!');
})

mongoose.Promise = global.Promise;

module.exports = mongoose;
