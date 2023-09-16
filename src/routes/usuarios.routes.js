import { Router } from 'express';
import {
  createUsuario, 
  getUsuarios,
  updateUsuario,
} from '../controllers/usuario.controller.js';

const router = Router();

// Routes
router.get('/', getUsuarios);

router.post('/', createUsuario);

router.put('/:id', updateUsuario);


export default router;