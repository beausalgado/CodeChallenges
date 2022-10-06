function FirstFactorial(num) { 

    let factorialArray = []
    for (i = num; i > 0; i--){
    factorialArray.push(i);
    }
    
    let factorial = factorialArray.reduce((previousValue, currentValue) => previousValue * currentValue)
    
      return factorial;
    
    }
       
    
    console.log(FirstFactorial(4));