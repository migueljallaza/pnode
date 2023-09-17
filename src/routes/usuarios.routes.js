import { Router } from 'express';
import {
  createUsuario, 
  deleteUsuario, 
  getUsuarios,
  updateUsuario,
} from '../controllers/usuario.controller.js';

const router = Router();

// Routes
router.get('/', getUsuarios);

router.post('/', createUsuario);

router.put('/:id', updateUsuario);

router.delete('/:id', deleteUsuario);


export default router;