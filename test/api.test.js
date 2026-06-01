const request = require('supertest')
const app = require('../app.js')
const conectarDB = require('../config/db.js')
const mongoose = require('mongoose')

beforeAll(async () => {
  await conectarDB()
})

afterAll(async () => {
  await mongoose.connection.close()
})

describe('API Productos', () => {
  test('GET productos', async () => {
    const res = await request(app).get('/api/productos')
    expect(res.statusCode).toBe(200)
  })
})