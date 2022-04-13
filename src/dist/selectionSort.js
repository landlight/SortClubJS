"use strict";
/**
 * Pseudo code
 * repeat (numOfElements - 1) times
 * set the first unsorted element as the minimum
 * for each of the unsorted elements
 *   if element < currentMinimum
 *     set element as new minimum
 * swap minimum with first unsorted position
 * @param inputArray
 * @returns sortedArray
 */
exports.__esModule = true;
function selectionSort(inputArray, sortOrder) {
    if (sortOrder === void 0) { sortOrder = "ascending" /* ASC */; }
    for (var i = 0; i < inputArray.length - 1; i++) {
        var min = inputArray[i];
        var position = i;
        for (var j = i; j <= inputArray.length - 1; j++) {
            if (sortOrder === "ascending" /* ASC */ && min > inputArray[j]) {
                min = inputArray[j];
                position = j;
            }
            if (sortOrder === "descending" /* DSC */ && min < inputArray[j]) {
                min = inputArray[j];
                position = j;
            }
            if (j === inputArray.length - 1 && position != -1) {
                var temp = inputArray[i];
                inputArray[i] = min;
                inputArray[position] = temp;
            }
        }
    }
    return inputArray;
}
exports["default"] = selectionSort;
// const unsortedArray = [9, 8, 4, 3, 6, 5, 2, 1, 54, 43, 19, 17];
// console.log(SortingTypes.SELECTION_SORT, selectionSort(unsortedArray, SortOrder.ASC), SortOrder.ASC);
// console.log(SortingTypes.SELECTION_SORT, selectionSort(unsortedArray, SortOrder.DSC), SortOrder.DSC);
