const InputPrompt = require("../models/input-prompt")
const openai = require("../config/openai")

module.exports = {
    async sendText(req, res){
        const OpenAIApi = openai.configuration()
        const inputModel = new InputPrompt(req.body)
        
        try {
            const response = await OpenaiApi.createCompletion(
                openai.textCompletion("me de nomes de arigos de node")
            )

            return res.status(200).json({
                sucess:true,
                data: response.data.choices[0].text
            })

        } catch (error) {
            return res.status(400).json({
                sucess: false,
                error: error.response 
                ? error.response.data 
                : "there was an inssue on the server"
            })
        }

        
    }
}