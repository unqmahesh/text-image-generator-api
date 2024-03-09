import express from "express"
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'

import indexRouter from "./router/index-router.js"
import errorHandler from "./middlewares/err-handler.js"

const app = express()


app.use(cors({origin : "*"}))

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use('/text-to-image/api/v1',  indexRouter)


app.use(errorHandler)


export default app