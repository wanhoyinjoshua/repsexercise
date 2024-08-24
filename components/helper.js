// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { dictionary } from '../pages/ExerciseGallery/constants/videodictionary'
import { chatCompletion } from '../services/openai'
export default async function send(goals) {
    
    console.log("request sent")
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
            description: 'Get aim of the uuserinput to generate the exercise recommendations', 
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

    let messages = [{ role: 'system', content: function_system_prompt }]

    messages.push({ role: 'user', content: `I am looking for exercise recommendations to achieve the following goal:${goals} `})


    try {
        
        result = await chatCompletion({
            messages,
            functions
        })

        
        if(result.content === null) {

            // mock api processing       
            const func_call = result
            const func_args = JSON.parse(func_call.function_call.arguments)
            const finaldata= queryvideo(func_args["products"])

            return (finaldata)
            
        }
        else{
            return("no match found")
            
        }

    } catch(error) {

        console.log(error)

    }

    
function queryvideo(listquries){
    var videolist = [];
    console.log(listquries);
    
    listquries.forEach(query => {
        const aim = query["aim"];
        const difficulty = query["difficulty"];
    
        const filteredData = Object.keys(dictionary)
            .filter(key => dictionary[key].aim === aim && dictionary[key].difficulty === difficulty)
            .map(key => ({ id: dictionary[key].id,name:key, ...dictionary[key] }));
    
        videolist.push(filteredData);

        videolist = videolist.flatMap(item => item);
        
    });
    

    if (videolist.length==0){

        listquries.forEach(query => {
            const body = query["body"];
           
            const filteredData = Object.keys(dictionary)
                .filter(key => dictionary[key].aim === body )
                .map(key => ({ id: dictionary[key].id,name:key, ...dictionary[key] }));
        
            videolist.push(filteredData);
        });

        const flattenedList = videolist
        return videolist
        
        

    }


    return videolist
    
    
    
  
    
    
}
   



  }
  