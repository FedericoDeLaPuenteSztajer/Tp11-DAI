import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).json({
                error: "Token no proporcionado"
            });
        }

        const [type, token] = authHeader.split(" ");

        if (type !== "Bearer" || !token) {
            return res.status(401).json({
                error: "Formato de token inválido"
            });
        }

        const payload = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        req.user = payload;
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
