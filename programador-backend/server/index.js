
const controller = require('./controller')
const express = require('express')
//const router = Router()
const cors = require('cors');
const app = express()
const bodyParser = require('body-parser');
const path = require('path');
const history = require('connect-history-api-fallback');

//Al desplegar el proyecto en un servicio remoto es necesario que las rutas del backend
//app.use(history()); // Colocamos este middleware cuando estamos usando el BrowserRouter
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

//Rutas para remoto
app.post('/api/create-user', controller.createUser)
// app.post('/api/update-user', controller.updateUser )
// app.post('/api/borrar-toda-programacion', controller.borrarTodaLaProgramacion )
// app.post('/api/borrar-curso', controller.borrarUnCurso)
// app.post("/api/login",controller.login)
// app.post("/api/forgot-password",controller.forgotPassword)
// app.get('/api/reset-password/:id/:token', controller.resetPassword)
// app.post('/api/reset-password/:id/:token', controller.CambioPassword)
// app.get('/api/usuarios-registrados', controller.usuariosRegistrados)

//Rutas para local
// app.get('/usuarios-registrados', controller.usuariosRegistrados)
// app.post('/login',controller.login)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {console.log("Server listening on port ", PORT)})