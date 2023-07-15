import express, { response } from 'express'
import connectDB from './database/db.js'
import router from './route/product_route.js'

const app = express(), PORT = 1337
connectDB()
app.use(express.json())
app.use('/api', router)
app.use('/api', (request, response) => {
    response.status(200).json({
        messageForConfledis: "Hello Confledis stuff, You're in the api route ^-^ "
    })
})


app.listen(PORT, () => {
    console.log(`app is running on http://localhost:${PORT}`)
})