import { Configuration, OpenAIApi } from 'openai'
import axios from 'axios'
async function getApiKey() {
    try {
        const response = await axios.get('/api/apikey');
        return response.data;
    } catch (error) {
        console.error('Error fetching key', error);
    }
}

export async function chatCompletion({
    model = 'gpt-3.5-turbo-0613',
    max_tokens = 1024,
    temperature = 0,
    messages,
    functions,
    function_call = {"name":"get_product_price"}
}) {
    try {
        const data= await getApiKey()
        
        const configuration = new Configuration({
            apiKey: data.key,
        })
        const openai = new OpenAIApi(configuration)
        const result = await openai.createChatCompletion({
            messages,
            model,
            max_tokens,
            temperature,
            functions,
            function_call,
        })

        if (!result.data.choices[0].message) {
            throw new Error("No return error from chat");
        }

        return result.data.choices[0].message //?.content

    } catch(error) {
        console.log(error)
        throw error
    }
}

