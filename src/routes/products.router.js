import { Router } from "express";

const router = Router();

const productos = [];


// router.get('/', async (req, res) => {
//     const { limit } = req.query;
//     const products = await manager.obtenerProductos();
//     if (limit) {
//         const limited = products.slice(0, limit);
//         res.status(200).json(limited);
//     } else {
//         res.status(200).json(products);
//     }
// });


router.get('/', (req, res) => {
    res.send(productos);
    //con este metodo solictamos obtener a los usuarios: consulta
});
router.post('/', (req, res) => {
    const producto = res.body;
    productos.push(producto);
    res.send({ status: "success", message: "Producto Agregado" }) 
    //con este metodo solictamos crear usuarios
});
router.put();
router.delete();





export default router; //export por default para que en otras partes de mi proyecto se pueda utilizar e importar