export function getEquip(ExVideoArray){
    var equipmaster=[]
    var equiplist=ExVideoArray.map((ex)=>{return ex.equip})
    //quiplist is now [[...],[...],[...]]
    var spreadlist=equiplist.flat()
    //now it is [.,.,.,.]

    var names=spreadlist.map((e)=>{return e.label})
 

   var newset= new Set(names);
   const array = Array.from(newset);


  return array


}