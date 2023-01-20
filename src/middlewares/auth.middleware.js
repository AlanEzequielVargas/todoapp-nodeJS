const jwt = require('jsonwebtoken');
require('dotenv').config();

//validar el token
//si el token es valido , lo dejamos pasar a la ruta , sino respondemos 'anda pa alla bobo'

const authMiddleware = (req,res,next) => {
     let {authorization: token} = req.headers;
     token = token.replace("Bearer ","");
     // token = token.split(" ")[1];
     console.log(token);
     //no se envia ni en params ni en body , sino que en los headers de la peticion
     const decoded = jwt.verify(
          token,
          process.env.JWT_SECRET,
          {algorithms: 'HS512'},
          (err,dec) => {
               if(err){
                    res.status(400).json({
                         error: 'Invalid token',
                         message: 'Invalid token , please send a valid token'
                    });
               }else {
                    
                    next();
               }
          });
     
};

module.exports = authMiddleware;
































