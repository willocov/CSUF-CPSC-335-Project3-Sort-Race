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

