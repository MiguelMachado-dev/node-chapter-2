import { Router } from 'express'
import { v4 as uuidV4 } from 'uuid'

const categoriesRoutes = Router()

const categories = []

categoriesRoutes.post('/', (req, res) => {
  const { name, description } = req.body

  const category = { id: uuidV4(), name, description }

  categories.push(category)

  return res.status(201).send()
})

// o path para essa rota será /categories/list pois no server
// inserimos o base path como /categories direto na chamada do middleware
categoriesRoutes.get('/list', (req, res) => {
  return res.json(categories).status(200)
})

export { categoriesRoutes }
