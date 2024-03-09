import express from 'express'
import sdImgGen from '../controllers/s-d.js'

import {validators, validation} from '../middlewares/s-d-data-Validation.js'
import authorization from '../middlewares/authorization.js'

const indexRouter = express.Router()

indexRouter.route('/health').get((req, res)=>{res.status(200).send('This api is healthy')})

indexRouter.route('/s-d').post(authorization, validators, validation, sdImgGen)


export default indexRouter