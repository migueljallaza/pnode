import { Router } from 'express';
import {  } from '../controllers/categoria.controller.js';
import { createProductos, getProductos, getProjectsTasks, updateProductos } from '../controllers/producto.controller.js';

const router = Router();

// Routes
router.get('/', getProductos);

router.post('/', createProductos);

router.put('/:id', updateProductos);

router.get('/usuario/:id', getProjectsTasks);

export default router;
