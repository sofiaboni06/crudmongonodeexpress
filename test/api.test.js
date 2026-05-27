import request from 'supertest'
import app from '../app.js'

describe('API Productos', () => {

  test('GET productos', async () => {

    const res = await request(app)
      .get('/api/productos')

    expect(res.statusCode).toBe(200)

  })

})