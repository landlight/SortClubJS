import { SortOrder } from "./types";

function swap(items, leftIndex, rightIndex){
  var temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
}

function partition(items, left, right) {
  var pivot = items[Math.floor((right + left) / 2)], //middle element
      i = left, //left pointer
      j = right; //right pointer
  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(items, i, j); //swapping two elements
      i++;
      j--;
    }
  }
  return i;
}

function quickSortASC(items, left, right) {
  var index;
  if (items.length > 1) {
    index = partition(items, left, right); //index returned from partition
    if (left < index - 1) { //more elements on the left side of the pivot
      quickSortASC(items, left, index - 1);
    }
    if (index < right) { //more elements on the right side of the pivot
      quickSortASC(items, index, right);
    }
  }
  return items;
}


export default function quickSort(inputArray: number[], sortOrder: SortOrder= SortOrder.ASC): number[] {
  // Copy array to be unaffected by the shift
  const copy = [...inputArray];
  const sorted = quickSortASC(copy, 0, copy.length-1);
  if (sortOrder === SortOrder.DSC) {
    return sorted.reverse();
  }
  return sorted;
}


// const unsortedArray = [9, 8, 4, 3, 6, 5, 2, 1, 54, 43, 19, 17];

// console.log(SortingTypes.QUICK_SORT, quickSort(unsortedArray, SortOrder.ASC), SortOrder.ASC);
// console.log(SortingTypes.QUICK_SORT, quickSort(unsortedArray, SortOrder.DSC), SortOrder.DSC);