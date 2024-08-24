import { Configuration, OpenAIApi } from 'openai-edge'

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
    function_call = {"name":"get_product_price"},
    stream=true
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
            stream
        })

        if (!result.data.choices[0].message) {
            throw new Error("No return error from chat");
        }

        if (!result.ok) {
            return new Response(await response.text(), {
              status: response.status
            })
          }
         
          // Convert the response into a friendly text-stream
          const stream = OpenAIStream(result)
         
          // Respond with the stream
          return new StreamingTextResponse(result)
        return result.data.choices[0].message //?.content

    } catch(error) {
        console.log(error)
        throw error
    }
}

