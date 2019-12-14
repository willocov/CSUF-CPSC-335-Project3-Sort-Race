function quickStep(start, end, array, stepIndex, maxSteps){
    stepIndex++;

    // If this sub-array is empty, it's sorted.
    if (end - start < 1) {
        var returnInfo = [array, true];
        return returnInfo;
    }

    var isSorted = isArraySorted(array);
    if(isSorted == true){
        var returnInfo = [array, true];
        return returnInfo;
    }

    var pivotValue = array[end];
    let splitIndex = start;
    for (let i = start; i < end; i++) {
        sort = comparator(array[i], pivotValue);

        // This value is less than the pivot value.
        if (sort === -1) {

            // If the element just to the right of the split index,
            //   isn't this element, swap them.
            if (splitIndex !== i) {
                const temp = array[splitIndex];
                array[splitIndex] = array[i];
                array[i] = temp;
            }
            splitIndex++;
        }
    }

    // Move the pivot value to between the split.
    array[end] = array[splitIndex];
    array[splitIndex] = pivotValue;

    // Recursively sort the less-than and greater-than arrays.
    if(stepIndex < maxSteps){
        //Create 2 subarrays and copy original arrays
        var returnLeft = quickStep(start, splitIndex - 1, array, stepIndex, maxSteps);
        var returnRight = quickStep(splitIndex + 1, end, array, stepIndex, maxSteps)
        
        array = returnRight[0];

    }

    var returnInfo = [array, false];
        return returnInfo;
}

function comparator(a, b){
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  }

  function isArraySorted(array){
    for(let i = 0; i < array.length - 1; i++){  //Loop through array
        if(array[i] > array[i + 1]){   //
            return false
        }
    }
    return true;
  }