"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
function swap(items, leftIndex, rightIndex) {
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
function quickSort(inputArray, sortOrder) {
    if (sortOrder === void 0) { sortOrder = "ascending" /* ASC */; }
    // Copy array to be unaffected by the shift
    var copy = __spreadArrays(inputArray);
    var sorted = quickSortASC(copy, 0, copy.length - 1);
    if (sortOrder === "descending" /* DSC */) {
        return sorted.reverse();
    }
    return sorted;
}
exports["default"] = quickSort;
// const unsortedArray = [9, 8, 4, 3, 6, 5, 2, 1, 54, 43, 19, 17];
// console.log(SortingTypes.QUICK_SORT, quickSort(unsortedArray, SortOrder.ASC), SortOrder.ASC);
// console.log(SortingTypes.QUICK_SORT, quickSort(unsortedArray, SortOrder.DSC), SortOrder.DSC);
