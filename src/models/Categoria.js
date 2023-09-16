import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import { Usuario } from './Usuario.js';

export const Categoria = sequelize.define(
    'categorias',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: 'nombre de la categoria',
      },
    },
    {
      timestamps: false,
    }
  );
  
  Usuario.hasMany(Categoria, {
    foreignKey: 'usuarioId',
    sourceKey: 'id',
  });
  
  Categoria.belongsTo(Usuario, {
    foreignKey: 'usuarioId',
    targetKey: 'id',
  });
  