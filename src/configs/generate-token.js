import jwt from "jsonwebtoken";
import "dotenv/config";

const payload = {
    id: 1234,
    username: "sub-zero"
};

const token = jwt.sign(
    payload,
    process.env.JWT_SECRET,
    {
        expiresIn: "1h",
        issuer: "mi_organizacion"
    }
);

console.log(token);
