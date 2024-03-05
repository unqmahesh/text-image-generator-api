import express from 'express'
import sdImgGen from '../controllers/s-d.js'

import {validators, validation} from '../middlewares/s-d-Validation.js'

const indexRouter = express.Router()

indexRouter.route('/s-d').post(validators, validation, sdImgGen)

export default indexRouter