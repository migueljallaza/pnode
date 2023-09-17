import { Router } from 'express';
import {  } from '../controllers/categoria.controller.js';
import { createProductos, deleteProductos, getProductos, getProductosPorUsuario, updateProductos } from '../controllers/producto.controller.js';

const router = Router();

// Routes
router.get('/', getProductos);

router.post('/', createProductos);

router.put('/:id', updateProductos);

router.delete('/:id', deleteProductos);

router.get('/usuario/:id', getProductosPorUsuario);

export default router;
