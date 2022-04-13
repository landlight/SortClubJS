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

import { SortOrder } from "./types";

export default function bubbleSort(inputArray: number[], sortOrder: SortOrder= SortOrder.ASC): number[] {
  let swapped = true;
  while (swapped) {
    swapped = false;
      for (let i = 0; i < inputArray.length - 1; i++) {        
      if (sortOrder === SortOrder.ASC) {
        if (inputArray[i] > inputArray[i+1]){
          const temp = inputArray[i];
          inputArray[i] = inputArray[i+1];
          inputArray[i+1] = temp;
          swapped = true;
        }
      } else {
        if (inputArray[i] < inputArray[i+1]){
          const temp = inputArray[i];
          inputArray[i] = inputArray[i+1];
          inputArray[i+1] = temp;
          swapped = true;
        }
      }
    } 
  }
  
  return inputArray;
}

