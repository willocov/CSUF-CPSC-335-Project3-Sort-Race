function getRandomInt(min, max) {
	//Returns a random int between min and max
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function drawWord(context, word, posx, posy, color) {
	//Draws a string or chars
	context.save();
	context.font="15px sans-serif";
	context.beginPath();
	context.fillStyle = color;
	context.fillText(word, posx, posy);
	context.fill();
	context.restore();
}

function printList(context, array, posx, posy) {
	//Prints an array
	for (var i of array) {
		context.save();
		context.font ="20px sans-serrif";
		context.beginPath();
		//context.fillStyle = color;
		context.fillText(i.toString(16).toUpperCase(), posx, posy);
		context.fill();
		context.restore();
		posx += 20;
	}
}

function RaceManager(context, testArray) {
	//Variables used for tracking alogrithm progress and gui

	//Printing variables
	mergePosX = 10;
	quickPosX = 320;
	selectPosX = 650;
	linePosY = 100;
	changeInPositionY = 25;
	
	//Step counter
	remainingSteps = 20;

	//Arrays for each sorting algorithm
	var mergeArray = testArray.slice();
	var quickArray = testArray.slice();
	var selectionArray = testArray.slice();
	
	//variables used to print arrays during recursion
	selectionIndex = 0;
	quickIndex = 0;
	quickMaxIndex = 1;
	mergeStepsRemaining = 1;
	
	//Finished flags
	isMergeFinished = false;
	isQuickFinished = false;
	isSelectionFinished = false;

	//Begins the first step
	NextStep(context, mergePosX, quickPosX, selectPosX, linePosY, remainingSteps, mergeStepsRemaining, quickIndex, quickMaxIndex, mergeArray, quickArray, selectionArray, selectionIndex, isMergeFinished, isQuickFinished, isSelectionFinished);
}

function NextStep(context, mergePosX, quickPosX, selectPosX, linePosY, remainingSteps, mergeStepsRemaining, quickIndex, quickMaxIndex, mergeArray, quickArray, selectionArray, selectionIndex, isMergeFinished, isQuickFinished, isSelectionFinished){
	//Function continues to loop
	//Prints array at end of each step
	//Pauses for 0.5 seconds and calls itself with setTimeout
	
	//Stop program if the max number of steps have been reached
	if(remainingSteps = 0){	
		return;
	}

	//Run Step of Merge Sort
	if(isMergeFinished == false){
		var sortedMergeArray = mergeSort(mergeArray, mergeStepsRemaining);
	}

	//Run Step of Quick Sort
	let quickDontPrint = false;
	const quickConstArray = quickArray.slice();
	if(isQuickFinished == false){
		var quickReturnInfo = quickStep(0, quickArray.length - 1, quickArray, 0, quickMaxIndex);
		quickArray = quickReturnInfo[0];
		quickFinished = quickReturnInfo[1];
	}

	//Run step of Selection Sort
	if(isSelectionFinished == false){
		returnInfo = selectionStep(selectionArray, selectionIndex);
		selectionArray = returnInfo[0];
		selectionFinished = returnInfo[1];
		if(selectionFinished == true){
			isSelectionFinished = true;
		}
	}

	//Print  Merge Array
	if(isMergeFinished != true){
		printList(context, sortedMergeArray, mergePosX, linePosY);
		if(isArraySorted(sortedMergeArray) == true){
			isMergeFinished = true;
		}
	}

	//Print Selection array
	if(isSelectionFinished != true){
		printList(context, selectionArray, selectPosX, linePosY);
	}

	//Print Quick array
	if(isQuickFinished != true && quickDontPrint != true){
		printList(context, quickArray, quickPosX, linePosY);
		if(isArraySorted(quickArray) == true){
			isQuickFinished = true;
		}
	}


	//increment variables
	linePosY += changeInPositionY;
	remainingSteps--;
	selectionIndex++;
	quickMaxIndex++;
	mergeStepsRemaining++;

	//Pause for 0.5 Seconds and run again
	setTimeout(NextStep, 500, context, mergePosX, quickPosX, selectPosX, linePosY, remainingSteps, mergeStepsRemaining, quickIndex, quickMaxIndex, mergeArray, quickConstArray, selectionArray, selectionIndex, isMergeFinished, isQuickFinished, isSelectionFinished);
}

