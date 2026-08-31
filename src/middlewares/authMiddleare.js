import jwt from "jsonwebtoken";

// Token harcodeado
const payload = {
  id: 1234,
  username: 'sub-zero'
};

const secretKey = '1234#'; // Clave secreta para firmar el token

// Opciones para la firma del token (opcional)
const options = {
  expiresIn: '1h', // Expirará en 1 hora. 60, '7d', '4h', etc.
  issuer: 'mi_organizacion'
};

// Generar el token de acceso
const token = jwt.sign(payload, secretKey, options);
console.log(token); //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiO...

export default authMiddleware;
/*
import jwt from 'jsonwebtoken';

// Clave secreta con la que se firmó originalmente el token.
const secretKey       = 'ClaveSecreta2000$';
let   token           =
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiO...';
let   payloadOriginal = null;

try {
   payloadOriginal = await jwt.verify(token, secretKey);
} catch (e) {
   // Los errores pueden ser:
   //   .- TokenExpiredError
   //   .- JsonWebTokenError (invalido, mal formado, error de firma,
etc.)
   //   .- NotBeforeError
   console.error(e);
}

console.log(payloadOriginal);
*/