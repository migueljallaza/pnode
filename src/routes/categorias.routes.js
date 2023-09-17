import { Router } from 'express';
import { createCategorias, deleteCategoria, getCategorias, updateCategorias } from '../controllers/categoria.controller.js';

const router = Router();

// Routes
router.get('/', getCategorias);

router.post('/', createCategorias);

router.put('/:id', updateCategorias);

router.delete('/:id', deleteCategoria);

export default router;
