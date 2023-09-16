import { Router } from 'express';
import { createCategorias, getCategorias, updateCategorias } from '../controllers/categoria.controller.js';

const router = Router();

// Routes
router.get('/', getCategorias);

router.post('/', createCategorias);

router.put('/:id', updateCategorias);

export default router;
