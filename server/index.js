import express from 'express'
import mongoose from 'mongoose'
import router from "./router.js";

const PORT = 1337;
const DB_URL = 'mongodb+srv://user:user@cluster0.sjk0hc2.mongodb.net/?retryWrites=true&w=majority'

const app = express()

app.use(express.json())
app.use('/api', router)

async function start = async () =>() {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, () => console.log('Server started on port ' + PORT))
    } catch(e) {
        console.log(e)
    }
}

start()