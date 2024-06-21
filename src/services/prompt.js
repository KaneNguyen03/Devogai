import axios from 'axios'

const generateImage = async (data) => {
    const response = await axios.post(
        'https://api-inference.huggingface.co/models/CompVis/stable-diffusion-v1-4',
        data,
        {
            headers: {
                Authorization: `Bearer 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`,
                'Content-Type': 'application/json'
            },
            responseType: 'arraybuffer' // Ensure the response is binary data
        }
    )
    // Return the response data
    return response
}

const prompt = {
    generateImage
}

export default prompt