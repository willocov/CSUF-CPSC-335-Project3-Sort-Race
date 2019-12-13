const quickSort = (
    unsortedArray,
    comparator = defaultComparator
  ) => {
  
    // Create a sortable array to return.
    const sortedArray = [ ...unsortedArray ];
  
    // Recursively sort sub-arrays.
    const recursiveSort = (start, end) => {
  
     
  
    // Sort the entire array.
    recursiveSort(0, unsortedArray.length - 1);
    return sortedArray;
  };