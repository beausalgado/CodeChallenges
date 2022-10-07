function QuestionsMarks(str) { 
    var regularExpression = /\[A-Za-z]/gi;
     //return str.includes("???")
     return str.replace(/[a-z]/gi, '')
    
    
    }
       
    // keep this function call here 
    console.log(QuestionsMarks(readline()));