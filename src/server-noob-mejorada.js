import express 	from "express";	// hacer npm i express
import cors 	from "cors";	// hacer npm i cors

// Routers
import AlumnosRouter    from "./router/alumnos-router-noob.js"
import CursosRouter     from "./router/cursos-router-noob.js" 
import authMiddleware     from "./middlewares/authMiddleware.js"

const app  = express();
const port = 3000;

// Agrego los Middlewares
app.use(cors());         // Middleware de CORS
app.use(express.json()); // Middleware para parsear y comprender JSON

// Endpoints (todos los Routers)
app.use("/api/alumnos", authMiddleware, AlumnosRouter);
app.use("/api/cursos" , authMiddleware, CursosRouter);

//
// Inicio el Server y lo pongo a escuchar.
//
app.listen(port, () => {	// Inicio el servidor WEB (escuchar)
    console.log("server-noob-mejorada.js");
    console.log(`Listening on http://localhost:${port}`)
})
  