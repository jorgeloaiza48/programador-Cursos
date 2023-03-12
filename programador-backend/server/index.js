
const controller = require('./controller')
const express = require('express')
//const router = Router()
const cors = require('cors');
const app = express()
const bodyParser = require('body-parser');
const path = require('path');
const history = require('connect-history-api-fallback');

//Al desplegar el proyecto en un servicio remoto es necesario que las rutas del backend
app.use(history()); // Colocamos este middleware cuando estamos usando el BrowserRouter
app.use('/', express.static(path.join(__dirname, '/build/')));

app.use(express.json())
app.use(bodyParser.json())
app.use(cors())
//app.use(restify.plugins.bodyParser());
//app.use(multer().array())


//use cors to allow cross origin resource sharing
app.use(
    cors({
        //origin: 'http://localhost:3000',
        //origin: 'https://programadorcursos.onrender.com',
        // methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS'],
        // allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept', 'x-client-key', 'x-client-token', 'x-client-secret', 'Authorization'],
        credentials: true,
    })
);
// app.use((req,res,next)=>{
//     res.setHeader('Access-Control-Allow-Origin','http://localhost:3000');
//     res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
//     res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
//     res.send()
//     //next(); 
// })

app.post('/create-user', controller.createUser)
app.post('/update-user', controller.updateUser )
app.post('/borrar-toda-programacion', controller.borrarTodaLaProgramacion )
app.post('/borrar-curso', controller.borrarUnCurso)
app.post("/login",controller.login)
app.post("/forgot-password",controller.forgotPassword)
app.get('/reset-password/:id/:token', controller.resetPassword)
app.post('/reset-password/:id/:token', controller.CambioPassword)
app.get("/usuarios-registrados", controller.usuariosRegistrados)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log("Server listening on port ", PORT)
})