import express from "express"
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'

import indexRouter from "./router/index-router.js"
import {reqLogger, errorLogger} from './middlewares/logger.js'
import errorHandler from "./middlewares/err-handler.js"

const app = express()
const CLIENT_ORIGINS = [process.env.CLIENT_ORIGIN_1]


app.use(cors({origin : CLIENT_ORIGINS}))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(reqLogger)

app.use('/text-to-image/api/v1',  indexRouter)

app.use(errorLogger)

app.use(errorHandler)


export default app