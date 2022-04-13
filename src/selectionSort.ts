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

 import { SortingTypes, SortOrder } from "./types";

 export default function selectionSort(inputArray: number[], sortOrder: SortOrder= SortOrder.ASC): number[] {
   for (let i = 0; i < inputArray.length -1; i++) {
    let min = inputArray[i];
    let position = i;
    for (let j = i; j <= inputArray.length -1; j++) {
      if (sortOrder === SortOrder.ASC && min > inputArray[j]) {
        min = inputArray[j];
        position = j;
      }
      if (sortOrder === SortOrder.DSC && min < inputArray[j]) {
        min = inputArray[j];
        position = j;
      }
      if (j === inputArray.length-1 && position != -1) {        
        const temp = inputArray[i];
        inputArray[i] = min;
        inputArray[position] = temp;
      }
    }
  }
  return inputArray;
}

// const unsortedArray = [9, 8, 4, 3, 6, 5, 2, 1, 54, 43, 19, 17];

// console.log(SortingTypes.SELECTION_SORT, selectionSort(unsortedArray, SortOrder.ASC), SortOrder.ASC);
// console.log(SortingTypes.SELECTION_SORT, selectionSort(unsortedArray, SortOrder.DSC), SortOrder.DSC);
