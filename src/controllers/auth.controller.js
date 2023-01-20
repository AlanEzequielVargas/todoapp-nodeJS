const jwt = require('jsonwebtoken');
const AuthService = require('../services/auth.services');

const userLogin = async (req,res) => {
     try {
          const {email , password} = req.body;
          const response = await AuthService.login(email,password);
        
          //la respuesta siempre va atraer un isValid true o false
          if(response.isValid){
               const data = {
                    email: response.result.email,
                    username: response.result.username,
                    id: response.result.id
               }
              
               //firmamos un nuevo token
               const token = jwt.sign(data,'shulamula',{algorithm: "HS512"});
               data.token = token;
              
               res.json(data);
          }else {
               res.status(401).json({message: 'Credenciales invalidas'})
          }
          
     } catch (error) {
          res.status(400).json(error.message);
     }
};

module.exports = {
     userLogin
}


















