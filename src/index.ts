import bubbleSort from "./bubbleSort";
import insertionSort from "./insertionSort";
import mergeSort from "./mergeSort";
import quickSort from "./quickSort";
import selectionSort from "./selectionSort";
import { SortingTypes, SortOrder } from "./types";

console.log("hello, i will write the sorting methods and description here \n");

const unsortedArray = [9, 8, 4, 3, 6, 5, 2, 1, 54, 43, 19, 17];
console.time(SortingTypes.BUBBLE_SORT);
console.log(SortingTypes.BUBBLE_SORT, bubbleSort(unsortedArray, SortOrder.ASC), SortOrder.ASC);
console.log(SortingTypes.BUBBLE_SORT, bubbleSort(unsortedArray, SortOrder.DSC), SortOrder.DSC);
console.timeEnd(SortingTypes.BUBBLE_SORT);

console.time(SortingTypes.SELECTION_SORT);
console.log(SortingTypes.SELECTION_SORT, selectionSort(unsortedArray, SortOrder.ASC), SortOrder.ASC);
console.log(SortingTypes.SELECTION_SORT, selectionSort(unsortedArray, SortOrder.DSC), SortOrder.DSC);
console.timeEnd(SortingTypes.SELECTION_SORT);

console.time(SortingTypes.INSERTION_SORT);
console.log(SortingTypes.INSERTION_SORT, insertionSort(unsortedArray, SortOrder.ASC), SortOrder.ASC);
console.log(SortingTypes.INSERTION_SORT, insertionSort(unsortedArray, SortOrder.DSC), SortOrder.DSC);
console.timeEnd(SortingTypes.INSERTION_SORT);

console.time(SortingTypes.MERGE_SORT);
console.log(SortingTypes.MERGE_SORT, mergeSort(unsortedArray, SortOrder.ASC), SortOrder.ASC);
console.log(SortingTypes.MERGE_SORT, mergeSort(unsortedArray, SortOrder.DSC), SortOrder.DSC);
console.timeEnd(SortingTypes.MERGE_SORT);

console.time(SortingTypes.QUICK_SORT);
console.log(SortingTypes.QUICK_SORT, quickSort(unsortedArray, SortOrder.ASC), SortOrder.ASC);
console.log(SortingTypes.QUICK_SORT, quickSort(unsortedArray, SortOrder.DSC), SortOrder.DSC);
console.timeEnd(SortingTypes.QUICK_SORT);

console.time(SortingTypes.DEFAULT_SORT);
console.log(SortingTypes.DEFAULT_SORT, unsortedArray.sort(), SortOrder.ASC);
console.log(SortingTypes.DEFAULT_SORT, unsortedArray.sort().reverse(), SortOrder.DSC);
console.timeEnd(SortingTypes.DEFAULT_SORT);
