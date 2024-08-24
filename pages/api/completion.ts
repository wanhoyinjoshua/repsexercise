// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { dictionary } from '../../constants/videodictionary';

import { Configuration, OpenAIApi } from 'openai-edge'
import { OpenAIStream, StreamingTextResponse } from 'ai'
export const runtime = 'edge'
export default async function POST(req: Request) {
   
        // Process a POST request
        const {prompt} = await req.json()
    console.log(prompt)
   
    console.log("request sent")
    const configuration = new Configuration({
        apiKey: process.env.API_KEY,
    })
    const openai = new OpenAIApi(configuration)
    
    //bodyparts
    //legs, arms , legs/arm

    //aim
    //"improve ability to stand up", "improve balance and walking", "improve ability to reach for objects while standing", "improve ability to sitting balance while reaching objects", 
    //"improve ability to move forward at the shoulder" , "improve ability to move your arm forward", "improve ability to bend and straighten your elbow"
    //"improve ability to move your fingers" , "improve ability to move forward at the shoulder"
    //

    //difficulty
    //beginner , advanced 

    //impairment
    //balance, strength 

    //
 
    const functions = [
        {
            name: 'get_product_price', 
            description: 'The prompt contains the goal of the user, undertand the prompt and generate exercise recommendations that will best help patient to achieve their goals', 
            parameters: {
                type: 'object', 
                properties: {
                    products: {
                        type: 'array', 
                        items: {
                            type: "object",
                            properties: {
                                aim: { "type": "string","enum":["improve ability to stand up", "improve balance and walking", "improve ability to reach for objects while standing", "improve ability to sitting balance while reaching objects","improve ability to move forward at the shoulder" , "improve ability to move your arm forward", "improve ability to bend and straighten your elbow","improve ability to move your fingers" , "improve ability to move forward at the shoulder"] ,"description": "Aim of exercises, e.g. to imporve walking, to improve sitting" },
                                difficulty: { "type": "string","enum":["beginner","advanced"], "description": "Difficulty of exercises, e.g. beginner, advanced" },
                                body:{"type": "string","enum":["legs", "arms" , "legs/arm"],"description": "body parts involved in the activity"}
                            }
                        }
                    }
                }, 
                required: ['products']
            }
        }
    ]

    let result = {}

    // system prompt as additional guard rail for function call
    let function_system_prompt = `the user is getting exercise recommendations, call get_product_price function, which requires aim and difficulty, body as required parameters. Please infer the level of difficulty based on the activity and try to match the user's goals to one of these goals, think of it step by step, the user input will likley be an activity they want to be able to accomplish, think about what movement is required and match it with the aims provided,please note some user prompts some contain more than 1 activity so if you think there are mutiple aims that are appropriate please assign them accordingly, the aims has to be one of the following //aim
    //"improve ability to stand up", "improve balance and walking", "improve ability to reach for objects while standing", "improve ability to sitting balance while reaching objects", 
    //"improve ability to move forward at the shoulder" , "improve ability to move your arm forward", "improve ability to bend and straighten your elbow"
    //"improve ability to move your fingers" , "improve ability to move forward at the shoulder"
    //`

    let messages:any = [{ role: 'system', content: function_system_prompt }]

    messages.push({ role: 'user', content: `I am looking for exercise recommendations to achieve the following goal:${prompt} `})

    console.log("request sent")
    try {
        console.log("request sent shshshsh")
        
        const result = await openai.createChatCompletion({
           
            model : 'gpt-3.5-turbo-0125',
        max_tokens : 1024,
        temperature : 0,
        messages:messages,
        functions:functions,
        function_call : {"name":"get_product_price"},
        stream: true,
        })
        /*
        result = await chatCompletion({
            messages,
            functions
        })
*/ console.log("request sheesh")
console.log(result)
        if (!result.ok) {
            return new Response(await result.text(), {
              status: result.status
            })
          }
          else{
            console.log("I fucked up")
          }
         
          // Convert the response into a friendly text-stream
          const stream = OpenAIStream(result)
         
          // Respond with the stream
          return new StreamingTextResponse(stream)

        
       

    } catch(error) {

        console.log(error)
        console.log("shitty shot shiit")

    }
    console.log("request sent")

      }
    
   



  
  