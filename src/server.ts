import express from 'express'

// eslint-disable-next-line import/no-unresolved
import { categoriesRoutes } from './routes/categories.routes'

const port = process.env.PORT || 3333

const app = express()
app.use(express.json())

app.use(categoriesRoutes)

app.listen(port, () => console.log(`Server is running on port ${port}`))
