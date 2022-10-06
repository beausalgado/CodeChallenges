function FirstFactorial(num) { 

    let sum = num;
  function RecursionMultiply (value) {
    let numMinusOne = value - 1;
    if (numMinusOne == 0){
      return sum;
    }
    else {
    let multiply = sum * numMinusOne;
    sum = multiply;
      RecursionMultiply(numMinusOne)
    }
  
  }
  RecursionMultiply(num)
  return sum;
  
  }
   
  
  console.log(FirstFactorial(6));