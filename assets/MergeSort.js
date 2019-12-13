// Merge Sort Implentation (Recursion)
function mergeSort(unsortedArray, mergeSteps){
    //Array has already been divided.
    //First reassembling of the array.
    var mergeSortedArray = unsortedArray;

    if(mergeSteps >= 1){
        let arr1 = unsortedArray.slice(0,2);
        let arr2 = unsortedArray.slice(2,4);
        let arr3 = unsortedArray.slice(4,6);
        let arr4 = unsortedArray.slice(6,8);
        let arr5 = unsortedArray.slice(8,10);
        let arr6 = unsortedArray.slice(10);

        arr1 = arr1.sort (sortNumber);
        arr2 = arr2.sort (sortNumber);
        arr3 = arr3.sort (sortNumber);
        arr4 = arr4.sort (sortNumber);
        arr5 = arr5.sort (sortNumber);
        arr6 = arr6.sort (sortNumber);

        mergeSortedArray = arr1;
        mergeSortedArray = mergeSortedArray.concat(arr2);
        mergeSortedArray = mergeSortedArray.concat(arr3);
        mergeSortedArray = mergeSortedArray.concat(arr4);
        mergeSortedArray = mergeSortedArray.concat(arr5);
        mergeSortedArray = mergeSortedArray.concat(arr6);

        //return mergeSortedArray;
    }
    if(mergeSteps >= 2){
        //begin second reassembling of array
        let arr1 = mergeSortedArray.slice(0,4);
        let arr2 = mergeSortedArray.slice(4,8);
        let arr3 = mergeSortedArray.slice(8,12);

        arr1 = arr1.sort (sortNumber);
        arr2 = arr2.sort (sortNumber);
        arr3 = arr3.sort (sortNumber);

        mergeSortedArray = arr1;
        mergeSortedArray = mergeSortedArray.concat(arr2);
        mergeSortedArray = mergeSortedArray.concat(arr3);
    }
    if(mergeSteps >= 3){
        let arr1 = mergeSortedArray.slice(0,8);
        let arr2 = mergeSortedArray.slice(8,12);

        arr1 = arr1.sort (sortNumber);

        mergeSortedArray = arr1;
        mergeSortedArray = mergeSortedArray.concat(arr2);
    } 
    if(mergeSteps >= 4){
        let arr1 = mergeSortedArray.slice(0,12);

        arr1 = arr1.sort (sortNumber);

        mergeSortedArray = arr1;
    }

        return mergeSortedArray;

}

function sortNumber(a, b) {
    return a - b;
  }

/*
function mergeSort (unsortedArray, mergeStepsRemaining) {
    // No need to sort the array if the array only has one element or empty
    if (unsortedArray.length <= 1) {
      return unsortedArray;
    }
    // In order to divide the array in half, we need to figure out the middle
    const middle = Math.floor(unsortedArray.length / 2);
  
    // This is where we will be dividing the array into left and right
    const left = unsortedArray.slice(0, middle);
    const right = unsortedArray.slice(middle);
  
    // Using recursion to combine the left and right
    if(mergeStepsRemaining > 0){
        mergeStepsRemaining--;
        return merge(mergeSort(left, mergeStepsRemaining), mergeSort(right, mergeStepsRemaining));
    }
        else{
        return merge(left, right);
    }
  }

  // Merge the two arrays: left and right
function merge (left, right) {
    let resultArray = [], leftIndex = 0, rightIndex = 0;
  
    // We will concatenate values into the resultArray in order
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        resultArray.push(left[leftIndex]);
        leftIndex++; // move left array cursor
      } else {
        resultArray.push(right[rightIndex]);
        rightIndex++; // move right array cursor
      }
    }
  
    // We need to concat here because there will be one element remaining
    // from either left OR the right
    return resultArray
            .concat(left.slice(leftIndex))
            .concat(right.slice(rightIndex));
  }
  */