/**
 * 
 * split each element into partitions of size 1
 * recursively merge adjacent partitions
 *   for i = leftPartIdx to rightPartIdx
 *     if leftPartHeadValue <= rightPartHeadValue
 *        copy leftPartHeadValue
 *     else: copy rightPartHeadValue; Increase InvIdx
 * copy elements back to original array
 * @param inputArray 
 * @returns sortedArray
 */


import { SortingTypes, SortOrder } from "./types";

function merge(left, right) {
  let arr = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());  
    } else {
      arr.push(right.shift()); 
    }
  }
  return [ ...arr, ...left, ...right ]
}

function mergeSortASC(inputArray: number[]): number[] {
  const half = inputArray.length / 2
  // Base case or terminating case
  if(inputArray.length < 2){
    return inputArray;
  }
  
  const left = inputArray.splice(0, half);
  return merge(mergeSortASC(left),mergeSortASC(inputArray));
}

export default function mergeSort(inputArray: number[], sortOrder: SortOrder= SortOrder.ASC): number[] {
  // Copy array to be unaffected by the shift
  const copy = [...inputArray];
  const sorted = mergeSortASC(copy);
  if (sortOrder === SortOrder.DSC) {
    return sorted.reverse();
  }
  return sorted;
}

 
// const unsortedArray = [9, 8, 4, 3, 6];
// console.log(SortingTypes.MERGE_SORT, mergeSort(unsortedArray, SortOrder.ASC), SortOrder.ASC);
// console.log(SortingTypes.MERGE_SORT, mergeSort(unsortedArray, SortOrder.DSC), SortOrder.DSC);