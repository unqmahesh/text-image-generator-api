const authorization = async(req, res, next) => {
    try{

        const {apiAccessKey} = req.body

        const API_ACCESS_KEY = process.env.API_ACCESS_KEY 

        if(apiAccessKey != API_ACCESS_KEY){
            const err = new Error("You are unauthorized to access this api.")
            err.status = 401
            err.name = "UnAuthorized"
            next(err)
        }
        else{
            next()    
        }
    }catch(error){
        const err = new Error(error)
        err.name = "Authorization_process_failed"
        next(err)
    }
}

export default authorization