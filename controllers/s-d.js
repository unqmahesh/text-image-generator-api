import axios from 'axios'
import { response } from 'express'

const sdImgGen = async(req, res, next) => {

    try{
        const SD_URL = process.env.SD_URL
        const SD_API_KEY = process.env.SD_API_KEY


        const {prompt, engineId, cfg_scale, height, width, steps, samples} = req.body

        const reqUrl =  `${SD_URL}/v1/generation/${engineId}/text-to-image`

        const reqBody = {
            'text_prompts' : [{'text' : prompt}],
            'cfg_scale': cfg_scale || 7,
            'height': Number(height) || 1024,
            'width': Number(width) || 1024,
            'steps': Number(steps) || 30,
            'samples': Number(samples) || 1
        }
        
        const reqHeader = {
            'Content-type': 'application/json',
            Accept: 'application/json',
            Authorization : `Bearer ${SD_API_KEY}`
        }

        const response = await axios.post(reqUrl, reqBody, {headers:reqHeader})
        const base64Img = response.data.artifacts[0].base64

        res.status(200).json({success: true, data : {base64Img}})
    }
    catch(error){
        const err = new Error()
        err.status = error.response.status
        err.name = error.response.data.name 
        err.message = error.response.data.message
        next(err)
    }
}

export default sdImgGen