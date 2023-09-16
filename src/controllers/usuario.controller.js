import { Usuario } from "../models/Usuario.js";

export async function getUsuarios(req, res) {
  try {
    const usuarios = await Usuario.findAll({
      attributes: ["id", "nombre", "correo", "contrasena"],
      order: [["id", "DESC"]],
    });

    res.json(usuarios);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function createUsuario(req, res) {
  const { nombre, correo, contrasena } = req.body;
  try {
    const newUsuario = await Usuario.create({
      nombre,
      correo,
      contrasena,
    });
    res.json(newUsuario);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function updateUsuario(req, res) {
  const { id } = req.params;

  try {
    const usuario = await Usuario.findOne({
      attributes: ["nombre", "correo", "contrasena", "id"],
      where: { id },
    });

    usuario.set(req.body);

    await usuario.save();

    return res.json(usuario);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function deleteUsuario(req, res) {
  const { id } = req.params;
  try {
    await Usuario.destroy({
      where: { id },
    });
    return res.sendStatus(204);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}
