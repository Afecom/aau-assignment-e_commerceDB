import express from 'express'
import sequelize from './db/sequelize.js'
import indexRouter from './routes/index.route.js'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
app.use(express.json())

const initializeDatabase = async () => {
    try{
        await sequelize.authenticate()
        console.log("The database is successfully connected");
    }
    catch(error){
        console.log("Couldnt initialize the database!", error);
        process.exit(1)
    }
}
initializeDatabase()

app.get('/', (req, res) => {res.send("Hello World!")})
app.use('/api/v1', indexRouter)

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log("The server is up and reunning on port 3000")
})