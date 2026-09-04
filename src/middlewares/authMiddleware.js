import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
    try {
        // Obtener el header Authorization
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).json({
                error: "Token no proporcionado"
            });
        }

        // El formato esperado es:
        // Authorization: Bearer <token>
        const [type, token] = authHeader.split(" ");

        if (type !== "Bearer" || !token) {
            return res.status(401).json({
                error: "Formato de token inválido"
            });
        }

        // Verificar el token
        const payload = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        // Guardar el payload para que pueda ser utilizado
        // posteriormente por el controller
        req.user = payload;

        // Continuar con el siguiente middleware/controller
        next();

    } catch (error) {

        if (error.name === "TokenExpiredError") {
            return res.status(401).json({
                error: "El token ha expirado"
            });
        }

        if (error.name === "JsonWebTokenError") {
            return res.status(401).json({
                error: "Token inválido"
            });
        }

        return res.status(500).json({
            error: "Error al verificar el token"
        });
    }
};

export default authMiddleware;



/*
import jwt from "jsonwebtoken";

// Token harcodeado
const payload = {
  id: 1234,
  username: 'sub-zero'
};

const secretKey = '1234#'; 


const options = {
  expiresIn: '1h', 
  issuer: 'mi_organizacion'
};

const token = jwt.sign(payload, secretKey, options);
console.log(token); //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiO...

export default authMiddleware;
*/