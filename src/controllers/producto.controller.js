import { Producto } from '../models/Producto.js';

import { Usuario } from '../models/Usuario.js';

export async function getProductos(req, res) {
    try {
      const listProduct = await Producto.findAll({
        attributes: ['id','nombre', 'precio_unitario','estado','categoriaId','usuarioId'],
        order: [['id', 'DESC']],
      });
  
      res.json(listProduct);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

  export async function createProductos(req, res) {
    const { nombre, precio_unitario, categoriaId, usuarioId } = req.body;
    try {
      const newProductos = await Producto.create({
        nombre,
        precio_unitario,
        categoriaId,
        usuarioId
      });
      res.json(newProductos);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

  export async function updateProductos(req, res) {
    const { id } = req.params;
  
    try {
      const productos = await Producto.findOne({
        attributes: ['nombre', 'precio_unitario','estado','categoriaId','usuarioId','id'],
        where: { id },
      });
  
      productos.set(req.body);
  
      await productos.save();
  
      return res.json(productos);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }


  export async function getProductosPorUsuario(req, res) {
    const { id } = req.params;
    try {
      const projects = await Producto.findAll({
        attributes: ['id', 'nombre', 'precio_unitario', 'estado','categoriaId'],
        where: { usuarioId: id },
        include: [
          {
            model: Usuario,
            attributes: ['id', 'nombre'],
            required: true,
          },
        ],
      });
      res.json(projects);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }