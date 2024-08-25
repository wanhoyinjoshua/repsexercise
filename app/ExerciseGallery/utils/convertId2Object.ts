import { dictionary } from "@/constants/videodictionary"
export function convertid2Object(idarray){
    const object= idarray.map((id)=>{
      return dictionary.filter((object)=>{
        return object.id==id

      })[0]

    })

    return object


  }