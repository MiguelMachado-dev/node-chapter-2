import { Router } from 'express'

import { Category } from '../model/Category'

const categoriesRoutes = Router()

const categories: Array<Category> = []

categoriesRoutes.post('/', (req, res) => {
  const { name, description } = req.body

  const category = new Category()

  Object.assign(category, { name, description, created_at: new Date() })

  categories.push(category)

  return res.status(201).send()
})

// o path para essa rota será /categories/list pois no server
// inserimos o base path como /categories direto na chamada do middleware
categoriesRoutes.get('/list', (req, res) => {
  return res.json(categories).status(200)
})

export { categoriesRoutes }
