const { agregarUsuario, buscarUsuario, eliminarUsuario } = require('../usuarios.js')

test('Agregar usuario', () => {
  expect(agregarUsuario('Juan')).toContain('Juan')
})