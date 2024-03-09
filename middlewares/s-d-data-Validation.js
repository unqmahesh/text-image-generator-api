import {body, validationResult} from 'express-validator'

const validators = [
    body('prompt').isString().notEmpty().withMessage('invalid prompt'),
    body('engineId').optional().notEmpty().isString().withMessage('invalid engineId'),
    body('cfg_scale').optional().isNumeric().withMessage('invalid cfg_scale'),
    body('height').optional().isNumeric().withMessage('invalid height'),
    body('width').optional().isNumeric().withMessage('invalid width'),
    body('steps').optional().isNumeric().withMessage('invalid steps'),
    body('samples').optional().isNumeric().withMessage('invalid samples')
]

const validation = async (req, res, next) => {
        const error = validationResult(req)
        if(!error.isEmpty()){
            console.log(error.errors[0].msg)//remove
            const err = new Error(error.errors[0].msg)
            err.status = 400
            err.name = "invalid_input"
            next(err)
        }else{
            next()
        }
}

export {validators,  validation}
