export  function addScore(score,scoreObject){
  scoreObject.setScore(oldScore=>oldScore+score)
    if (typeof window !== "undefined") {
     if (!localStorage.getItem("score")) {
      // If it doesn't exist, add it to localStorage
     
      localStorage.setItem("score", `${score}`);
    
    } else {
        var score_1= localStorage.getItem("score")

        localStorage.setItem("score",  `${Number(score)+Number(score_1)}`);
    }
}

}

export function checkScore(){

    if (!localStorage.getItem("score")) {
        // If it doesn't exist, add it to localStorage
        localStorage.setItem("score", `0`);
      
      } else{
        return 
      }

}

export function getScore(){
    if (typeof window !== "undefined") {
        const storedScore = localStorage.getItem('score'); // Retrieve the score
    if (storedScore) {
      return Number(storedScore)// Convert to number and set state
   
    } else if(storedScore==null) {return 0  
    }

    }else{
        return 0
    }
    
}