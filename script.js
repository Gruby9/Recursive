const result = [0, 1];

function fibsRec(n) {
    if (n <= 0) {
        return console.log(result)
    } else {
        const newEl = result[result.length-1] + result[result.length-2]
        result.push(newEl)
        fibsRec(n-1)
    }
}

// fibsRec(5)

// const arr = [1,2,3]


// const memory = []
// const secondStage = []
// function mergeSort(arr) {
//     if (arr.length < 2) {
//         secondStage.push(...arr)
//         if (secondStage.length === 2) {
//             return console.log(secondStage)
//         } else {
//             mergeSort(memory)
//         }    
//     } else {
//         const worker = arr.slice(0, (arr.length)/2)
//         arr.splice(0, worker.length)
//         memory.push(...arr)
//         console.log(worker, memory)
//         mergeSort(worker)
//     }
// }

// const secondStage = []

// function mergeSort(arr) {
//     if (arr.length < 2) {
//         console.log(arr, 'done')
//     } else {
//         secondStage.push(arr[0])
//         arr.splice(0,1)
//         if 
//         mergeSort(arr)
//     }
// }


// const newArr = arr.slice(0, (arr.length)/2) 
// console.log(newArr)
// console.log(arr)


const mergeSort = (array) => {
    if (array.length <= 1) return array;
  
    const midPoint = Math.floor(array.length / 2);
    const leftHalf = mergeSort(array.slice(0, midPoint));
    const rightHalf = mergeSort(array.slice(midPoint));
    return merge(leftHalf, rightHalf);
  };
  
  const merge = (leftArray, rightArray) => {
    const mergedCollection = [];
  
    while (leftArray.length > 0 && rightArray.length > 0) {
      const arrayWithMin = leftArray[0] < rightArray[0] ? leftArray : rightArray;
      const mergeElement = arrayWithMin.shift();
      mergedCollection.push(mergeElement);
    }
  
    return mergedCollection.concat(leftArray, rightArray);
  }
  
  console.log(mergeSort([7,6,5,4,3,2,1])); // [-5, -3, -1, 0, 4, 5, 10, 12];
//   console.log(mergeSort([])); // []

function test(a) {
    if (a < 2) return a
    const b = a
    a--
    test(a)
}

function pri(a) {
    console.log(a)
}
