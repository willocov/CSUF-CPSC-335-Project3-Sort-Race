function selectionStep(selectionArray, index){
	var len = selectionArray.length;

	for (var i = index; i < len - 1; i = i + 1) {
        var j_min = i;
        for (var j = i + 1; j < len; j = j + 1) {
            if (selectionArray[j] < selectionArray[j_min]) {
                j_min = j;
            } else {}
        }
        if (j_min !== i) {
			selectionArray = swap(selectionArray, i, j_min);
			
			var returnInfo = [selectionArray, false];
			return returnInfo;
        } else {}
	}
	var returnInfo = [selectionArray, true];
	return returnInfo;
}

function swap(A, x, y) {
    var temp = A[x];
    A[x] = A[y];
	A[y] = temp;
	return A;
}