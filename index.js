// Task 1
function reverseString (str){
    let result = '';
    for (let i = str.length - 1; i >= 0; i--){
        result += str[i]
    }
    return result;
}
console.log(reverseString('Hellow World'));

/*----------------------------------------------------------------------*/

// Task 2
function sumOfPositiveNumbers(arr) {
  let sum = 0;
  for (let num of arr) {
    if (num > 0) {
      sum += num;
    }
  }
  return sum;
}


const inputArray = [2, -5, 10, -3, 7];
const sumOfPositives = sumOfPositiveNumbers(inputArray);
console.log(sumOfPositives); 

/*----------------------------------------------------------------------*/

// Task 3
function mostFrequentElement(arr) {
    const frequencyMap = {};
    let maxFrequency = 0;
    let mostFrequent;
  
    for (let num of arr) {
      frequencyMap[num] = (frequencyMap[num] || 0) + 1;
      if (frequencyMap[num] > maxFrequency) {
        maxFrequency = frequencyMap[num];
        mostFrequent = num;
      }
    }
  
    return mostFrequent;
  }
  
  
  const inputArray2 = [3, 5, 2, 5, 3, 3, 1, 4, 5];
  const mostFrequentNum = mostFrequentElement(inputArray2);
  console.log(mostFrequentNum); 
  
/*----------------------------------------------------------------------*/

// Task 4
function findTwoNumbersWithSum(arr, target) {
    const numToIndexMap = {};
  
    for (let i = 0; i < arr.length; i++) {
      const complement = target - arr[i];
      if (complement in numToIndexMap) {
        return [numToIndexMap[complement], i];
      }
      numToIndexMap[arr[i]] = i;
    }
  
    return null; 
  }
  

  const sortedArray = [1, 3, 6, 8, 11, 15];
  const targetValue = 9;
  const indices = findTwoNumbersWithSum(sortedArray, targetValue);
  console.log(indices); 
  
/*----------------------------------------------------------------------*/

//   Task 5
function calculator(num1, num2, operator) {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        return num1 / num2;
      default:
        return "Invalid operator";
    }
  }
  

  const result = calculator(5, 3, '+');
  console.log(result); 
  
/*----------------------------------------------------------------------*/

//   Task 6
function generateRandomPassword(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
    return password;
  }
  
 
  const passwordLength = 12;
  const randomPassword = generateRandomPassword(passwordLength);
  console.log(randomPassword); 

/*----------------------------------------------------------------------*/

//   Task 8
function findSecondSmallest(arr) {
    let smallest = Infinity;
    let secondSmallest = Infinity;
  
    for (let num of arr) {
      if (num < smallest) {
        secondSmallest = smallest;
        smallest = num;
      } else if (num < secondSmallest && num !== smallest) {
        secondSmallest = num;
      }
    }
  
    return secondSmallest;
  }
  
  
  const inputArray3 = [5, 2, 8, 1, 7, 3];
  const secondSmallestNum = findSecondSmallest(inputArray3);
  console.log(secondSmallestNum); 
  