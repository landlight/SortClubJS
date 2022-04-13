"use strict";
/**
 * Pseudo code
 * do
 * swapped = false
 * for i = 1 to indexOfLastUnsortedElement-1
 *   if leftElement > rightElement
 *    swap(leftElement, rightElement)
 *   swapped = true; ++swapCounter
 * while swapped
 *
 * @param inputArray
 * @returns sortedArray
 */
exports.__esModule = true;
function bubbleSort(inputArray, sortOrder) {
    if (sortOrder === void 0) { sortOrder = "ascending" /* ASC */; }
    var swapped = true;
    while (swapped) {
        swapped = false;
        for (var i = 0; i < inputArray.length - 1; i++) {
            if (sortOrder === "ascending" /* ASC */) {
                if (inputArray[i] > inputArray[i + 1]) {
                    var temp = inputArray[i];
                    inputArray[i] = inputArray[i + 1];
                    inputArray[i + 1] = temp;
                    swapped = true;
                }
            }
            else {
                if (inputArray[i] < inputArray[i + 1]) {
                    var temp = inputArray[i];
                    inputArray[i] = inputArray[i + 1];
                    inputArray[i + 1] = temp;
                    swapped = true;
                }
            }
        }
    }
    return inputArray;
}
exports["default"] = bubbleSort;
// const unsortedArray = [9, 8, 4, 3, 6, 5, 2, 1, 54, 43, 19, 17];
// console.log(SortingTypes.BUBBLE_SORT, bubbleSort(unsortedArray, SortOrder.ASC), SortOrder.ASC);
// console.log(SortingTypes.BUBBLE_SORT, bubbleSort(unsortedArray, SortOrder.DSC), SortOrder.DSC);
