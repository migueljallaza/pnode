import { Categoria } from '../models/Categoria.js';

export async function getCategorias(req, res) {
    try {
      const categorias = await Categoria.findAll({
        attributes: ['id','nombre', 'usuarioId'],
        order: [['id', 'DESC']],
      });
  
      res.json(categorias);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

  export async function createCategorias(req, res) {
    const { nombre, usuarioId } = req.body;
    try {
      const newCategorias = await Categoria.create({
        nombre,
        usuarioId
      });
      res.json(newCategorias);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

  export async function updateCategorias(req, res) {
    const { id } = req.params;
  
    try {
      const categorias = await Categoria.findOne({
        attributes: ['nombre', 'usuarioId','id'],
        where: { id },
      });
  
      categorias.set(req.body);
  
      await categorias.save();
  
      return res.json(categorias);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }