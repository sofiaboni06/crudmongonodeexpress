let usuarios = []

function agregarUsuario(nombre) {
  usuarios.push(nombre)
  return usuarios
}

function buscarUsuario(nombre) {
  return usuarios.includes(nombre)
}

function eliminarUsuario(nombre) {
  usuarios = usuarios.filter((u) => u !== nombre)
  return usuarios
}

module.exports = {
  agregarUsuario,
  buscarUsuario,
  eliminarUsuario,
}