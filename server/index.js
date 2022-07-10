const express = require("express");
require("./db/db");
const port = process.env.PORT || 3001;
const cors = require("cors")
const path=require("path");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'storage')))
//home page
app.get("/", (req, res) => {
    res.send(`<h1>Proyecto final con lukitas para hacer una web de viajes programables 😎</h1>`)
})

//rutas:
app.use("/users", require("./users/usersRoutes"));
app.use("/drivers",require("./drivers/driversRoutes"));


//CATCH DEL 404
app.use((req, res, next) => {
    let error = new Error("Recurso no encontrado");
    error.status = 404;
    next(error);
})
// MANEJADOR DE ERRORES
app.use((error, req, res, next) => {
    !error.status ? error.status = 500 : res.status(error.status).json({ status: error.status, message: error.message })
})


//ESCUCHADOR DEL PUERTO 
app.listen(port, (err) => {
    err ? console.log("error en el sv no lanza en el puerto") : console.log(`sv corriendo en http://localhost:${port}`);
})


