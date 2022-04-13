/**
 * mark first element as sorted
 * for each unsorted element X
 * 'extract' the element X
 * for j = lastSortedIndex down to 0
 *   if current element j > X
 *     move sorted element to the right by 1
 * break loop and insert X here
 * @param inputArray 
 * @returns sortedArray
 */

import { SortingTypes, SortOrder } from "./types";

export default function insertionSort(inputArray: number[], sortOrder: SortOrder= SortOrder.ASC): number[] {
   // Write Insertion Sort Logic
  for (let i = 1; i < inputArray.length; i++) {
    const unsortedItem = inputArray[i];
    let positionToMove = 0;
    let j = i-1; 
    if (sortOrder === SortOrder.ASC) {
      while ((j > -1) && (unsortedItem < inputArray[j])) {
          inputArray[j+1] = inputArray[j];
          j--;
      }
    } else {
      while ((j > -1) && (unsortedItem > inputArray[j])) {
        inputArray[j+1] = inputArray[j];
        j--;
      }
    }
    inputArray[j+1] = unsortedItem;
  }
  return inputArray;
}
 
// const unsortedArray = [9, 8, 4, 3, 6, 5, 2, 1, 54, 43, 19, 17];

// console.log(SortingTypes.INSERTION_SORT, insertionSort(unsortedArray, SortOrder.ASC), SortOrder.ASC);
// console.log(SortingTypes.INSERTION_SORT, insertionSort(unsortedArray, SortOrder.DSC), SortOrder.DSC);