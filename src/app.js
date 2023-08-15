import express from 'express'; // creando la aplicacion de Express
import productsRouter from './routes/products.router.js';


const app = express(); //app recibe la peticion, va a reconocer de que tipo es

const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/products', productsRouter)
// app.use('/api/carts');


app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);  //Se llama la Variable del puerto al que se va a escuchar la conexion
  });