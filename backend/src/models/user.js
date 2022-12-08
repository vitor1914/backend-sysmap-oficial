const mongoose = require("../database");
const bcryptjs = require("bcryptjs");
const axios = require('axios');

const register = () => {
  axios.get("http://localhost:5173/register")
  .then((response) => {
    console.log(response.data);
  })
}

const UserSchema = new mongoose.Schema({

      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,  // não deixa email se repetir
        lowercase: true,
      },
      password: {
        type: String,
        required: true,
        select: false,
      },
      createdAt: {
        type: Date,
        default: Date.now
      }

    
      

});

UserSchema.pre("save", async function (next) {              //cripografa a senha salva no banco de dados
    const hash = await bcryptjs.hash(this.password, 10);
    this.password = hash;
})



const User = mongoose.model("User", UserSchema);

module.exports = User;
