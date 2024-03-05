const errorHandler = async (error, req, res, next) => {
    error.status = error.status || 500
    error.name = error.name || "internal_server_error"
    error.success = false
    error.message = error.message || 'internal server error'
    res.status(error.status).json({
        success : error.success,
        name : error.name,
        message : error.message, 
    })
}

export default errorHandler