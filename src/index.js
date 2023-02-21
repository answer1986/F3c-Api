const express = require('express');
const app = express();
const morgan = require ('morgan');
const inicio = require('..obtenerToken');


let hostAPI={hostAPI};
let credentials = ({TOKEN},{EXPIRACION});
let account = {};
let custumers = {};    



//setting
app.set('port', process.env.PORT || 3000);


//middlewares
app.use(inicio);
app.use(morgan('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));


// start server
app.listen(3000, () => {
    console.log('Servidor corriendo en ${app.get(port)}'); 
});

//routes
app.use(require('./routes'));