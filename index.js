// importamos express com ESM
import express from 'express'
import { connect } from './config/database.js'

const PORT = process.env.PORT || 3000

const api = express()

api.use(express.json())

// Aqui van las rutas

// Nos conectamos a la base de datos y luego levantamos el servidor
connect.then(() => {
  api.listen(PORT, () => {
    console.log(`API escuchando en http://localhost:${PORT}`)
  })
})
