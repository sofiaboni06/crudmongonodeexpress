import {
  agregarUsuario,
  buscarUsuario,
  eliminarUsuario
} from '../usuarios.js'

test('Agregar usuario', () => {
  expect(agregarUsuario('Juan')).toContain('Juan')
})