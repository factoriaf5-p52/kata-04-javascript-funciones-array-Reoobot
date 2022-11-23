/* Encuentra el máximo */

export function maxOfTwoNumbers(a, b){
    if(a>b){
        return a
    }else if (a<b){
        return b
    } else{
        return a
    }
}

//------------EJERCICIO Nº2--------------//

export function findLongestWord(words){
    let longestWord = '';
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
        if(words.length ==0){
        return undefined;
    }
    return longestWord;
}
  //------------EJERCICIO Nº3--------------//

export function sumArray(array){
    let addition = 0
    for (let i = 0; i<array.length; i++){
        addition += array[i];
    }
    return addition;
}
    
    //------------EJERCICIO Nº4--------------// 

export function averageNumbers(array){
    if(array.length == 0){
        return undefined;
    }
    let average = array.reduce((a, b)=> a + b, 0) / array.length;
    return average;
}

//------------EJERCICIO Nº5--------------// 

export function averageWordLength(array){
    if(array.length == 0){
        return undefined;
    }
    let averageWord = array.join('').length / array.length;
    return averageWord;
}

export function uniquifyArray(){}
export function doesWordExist(){}
export function howManyTimes(){}
export function greatestProduct(){}





