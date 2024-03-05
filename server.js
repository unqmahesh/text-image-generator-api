import app from './app.js'

const PORT = process.env.PORT || 3000

const startServer = ()=>{
    try{
        app.listen(PORT, ()=>{console.log(`server is running on port ${PORT}`)})
    }
    catch(error){
        console.log(error)
    }
}

startServer()