"use strict";
exports.__esModule = true;
var bubbleSort_1 = require("./bubbleSort");
var insertionSort_1 = require("./insertionSort");
var mergeSort_1 = require("./mergeSort");
var quickSort_1 = require("./quickSort");
var randomQuickSort_1 = require("./randomQuickSort");
var selectionSort_1 = require("./selectionSort");
console.log("hello, i will write the sorting methods and description here \n");
var unsortedArray = [9, 8, 4, 3, 6, 5, 2, 1, 54, 43, 19, 17];
console.time("Bubble Sort" /* BUBBLE_SORT */);
console.log("Bubble Sort" /* BUBBLE_SORT */, bubbleSort_1["default"](unsortedArray, "ascending" /* ASC */), "ascending" /* ASC */);
console.log("Bubble Sort" /* BUBBLE_SORT */, bubbleSort_1["default"](unsortedArray, "descending" /* DSC */), "descending" /* DSC */);
console.timeEnd("Bubble Sort" /* BUBBLE_SORT */);
console.time("Selection Sort" /* SELECTION_SORT */);
console.log("Selection Sort" /* SELECTION_SORT */, selectionSort_1["default"](unsortedArray, "ascending" /* ASC */), "ascending" /* ASC */);
console.log("Selection Sort" /* SELECTION_SORT */, selectionSort_1["default"](unsortedArray, "descending" /* DSC */), "descending" /* DSC */);
console.timeEnd("Selection Sort" /* SELECTION_SORT */);
console.time("Insertion Sort" /* INSERTION_SORT */);
console.log("Insertion Sort" /* INSERTION_SORT */, insertionSort_1["default"](unsortedArray, "ascending" /* ASC */), "ascending" /* ASC */);
console.log("Insertion Sort" /* INSERTION_SORT */, insertionSort_1["default"](unsortedArray, "descending" /* DSC */), "descending" /* DSC */);
console.timeEnd("Insertion Sort" /* INSERTION_SORT */);
console.time("Merge Sort" /* MERGE_SORT */);
console.log("Merge Sort" /* MERGE_SORT */, mergeSort_1["default"](unsortedArray, "ascending" /* ASC */), "ascending" /* ASC */);
console.log("Merge Sort" /* MERGE_SORT */, mergeSort_1["default"](unsortedArray, "descending" /* DSC */), "descending" /* DSC */);
console.timeEnd("Merge Sort" /* MERGE_SORT */);
console.time("Quick Sort" /* QUICK_SORT */);
console.log("Quick Sort" /* QUICK_SORT */, quickSort_1["default"](unsortedArray, "ascending" /* ASC */), "ascending" /* ASC */);
console.log("Quick Sort" /* QUICK_SORT */, quickSort_1["default"](unsortedArray, "descending" /* DSC */), "descending" /* DSC */);
console.timeEnd("Quick Sort" /* QUICK_SORT */);
console.time("Random Quick Sort" /* RANDOM_QUICK_SORT */);
console.log("Random Quick Sort" /* RANDOM_QUICK_SORT */, randomQuickSort_1["default"](unsortedArray, "ascending" /* ASC */), "ascending" /* ASC */);
console.log("Random Quick Sort" /* RANDOM_QUICK_SORT */, randomQuickSort_1["default"](unsortedArray, "descending" /* DSC */), "descending" /* DSC */);
console.timeEnd("Random Quick Sort" /* RANDOM_QUICK_SORT */);
console.time("Default Sort" /* DEFAULT_SORT */);
console.log("Default Sort" /* DEFAULT_SORT */, unsortedArray.sort(), "ascending" /* ASC */);
console.log("Default Sort" /* DEFAULT_SORT */, unsortedArray.sort().reverse(), "descending" /* DSC */);
console.timeEnd("Default Sort" /* DEFAULT_SORT */);
module.exports = {
    bubbleSort: bubbleSort_1["default"],
    mergeSort: mergeSort_1["default"],
    selectionSort: selectionSort_1["default"],
    insertionSort: insertionSort_1["default"],
    quickSort: quickSort_1["default"],
    randomQuickSort: randomQuickSort_1["default"]
};
