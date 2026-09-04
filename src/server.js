import 'dotenv/config'
import express from "express";	// hacer npm i express
import cors from "cors";	// hacer npm i cors

// Controllers
import AlumnosController from "./controllers/alumnos-controller.js"
import CursosController from "./controllers/cursos-controller.js"
import MateriasController from "./controllers/materias-controller.js"
import CalificacionesController from "./controllers/calificaciones-controller.js"

// Middlewares
import authMiddleware from "./middlewares/authMiddleware.js"

const app = express();
const port = process.env.PORT || 3000;  // si no esta definido en el archivo .env uso el 3000.

// Agrego los Middlewares
app.use(cors());         // Middleware de CORS
app.use(express.json()); // Middleware para parsear y comprender JSON
app.use("/auth", AuthController);

// Endpoints (todos los Routers)
app.use("/api/alumnos", authMiddleware, AlumnosController);
app.use("/api/cursos", authMiddleware, CursosController);
app.use("/api/materias", authMiddleware, MateriasController);
app.use("/api/calificaciones", authMiddleware, CalificacionesController);

//
// Inicio el Server y lo pongo a escuchar.
//
app.listen(port, () => {	// Inicio el servidor WEB (escuchar)
    console.log("server.js");
    console.log(`Listening on http://localhost:${port}`)
})
