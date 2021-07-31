import express from 'express'

import { categoriesRoutes } from './routes/categories.routes'

const port = process.env.PORT || 3333

const app = express()
app.use(express.json())

// O path inicial das rotas criadas em categoriesRoutes sempre começa com /categories
app.use('/categories', categoriesRoutes)

app.listen(port, () => console.log(`Server is running on port ${port}`))
