const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const dbConnection = require('./config/config')
const swaggerUI = require('swagger-ui-express')
const docs = require ('./docs/index.js')
const routes = require('./routes/tasks.js')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', routes)

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docs))

dbConnection()

app.listen(PORT, () => {
    console.log(`Express está escuchando en el puerto http://localhost:${PORT}`)
})