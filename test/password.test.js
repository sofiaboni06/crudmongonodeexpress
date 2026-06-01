const validarPassword = require('../password.js')

test('Password válida', () => {
  expect(validarPassword('Hola1234')).toBe(true)
})