"use strict";
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
function merge(left, right) {
    var arr = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift());
        }
        else {
            arr.push(right.shift());
        }
    }
    return __spreadArrays(arr, left, right);
}
function mergeSortASC(inputArray) {
    var half = inputArray.length / 2;
    // Base case or terminating case
    if (inputArray.length < 2) {
        return inputArray;
    }
    var left = inputArray.splice(0, half);
    return merge(mergeSortASC(left), mergeSortASC(inputArray));
}
function mergeSort(inputArray, sortOrder) {
    if (sortOrder === void 0) { sortOrder = "ascending" /* ASC */; }
    // Copy array to be unaffected by the shift
    var copy = __spreadArrays(inputArray);
    var sorted = mergeSortASC(copy);
    if (sortOrder === "descending" /* DSC */) {
        return sorted.reverse();
    }
    return sorted;
}
exports["default"] = mergeSort;
// const unsortedArray = [9, 8, 4, 3, 6];
// console.log(SortingTypes.MERGE_SORT, mergeSort(unsortedArray, SortOrder.ASC), SortOrder.ASC);
// console.log(SortingTypes.MERGE_SORT, mergeSort(unsortedArray, SortOrder.DSC), SortOrder.DSC);
