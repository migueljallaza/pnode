import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import { Categoria } from './Categoria.js';
import { Usuario } from './Usuario.js';

export const Producto = sequelize.define(
    'productos',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: 'nombre del producto',
      },
      precio_unitario: {
        type: DataTypes.INTEGER,
      },
      estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    // {
    //   timestamps: false,
    // }
  );
  
  Categoria.hasMany(Producto, {
    foreignKey: 'categoriaId',
    sourceKey: 'id',
  });
  
  Producto.belongsTo(Categoria, {
    foreignKey: 'categoriaId',
    targetKey: 'id',
  });

  Usuario.hasMany(Producto, {
    foreignKey: 'usuarioId',
    sourceKey: 'id',
  });
  
  Producto.belongsTo(Usuario, {
    foreignKey: 'usuarioId',
    targetKey: 'id',
  });
  