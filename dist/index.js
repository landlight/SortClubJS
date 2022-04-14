"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bubbleSort_1 = __importDefault(require("./bubbleSort"));
const insertionSort_1 = __importDefault(require("./insertionSort"));
const mergeSort_1 = __importDefault(require("./mergeSort"));
const quickSort_1 = __importDefault(require("./quickSort"));
const randomQuickSort_1 = __importDefault(require("./randomQuickSort"));
const selectionSort_1 = __importDefault(require("./selectionSort"));
console.log("hello, i will write the sorting methods and description here \n");
const unsortedArray = [9, 8, 4, 3, 6, 5, 2, 1, 54, 43, 19, 17];
console.time("Bubble Sort" /* BUBBLE_SORT */);
console.log("Bubble Sort" /* BUBBLE_SORT */, (0, bubbleSort_1.default)(unsortedArray, "ascending" /* ASC */), "ascending" /* ASC */);
console.log("Bubble Sort" /* BUBBLE_SORT */, (0, bubbleSort_1.default)(unsortedArray, "descending" /* DSC */), "descending" /* DSC */);
console.timeEnd("Bubble Sort" /* BUBBLE_SORT */);
console.time("Selection Sort" /* SELECTION_SORT */);
console.log("Selection Sort" /* SELECTION_SORT */, (0, selectionSort_1.default)(unsortedArray, "ascending" /* ASC */), "ascending" /* ASC */);
console.log("Selection Sort" /* SELECTION_SORT */, (0, selectionSort_1.default)(unsortedArray, "descending" /* DSC */), "descending" /* DSC */);
console.timeEnd("Selection Sort" /* SELECTION_SORT */);
console.time("Insertion Sort" /* INSERTION_SORT */);
console.log("Insertion Sort" /* INSERTION_SORT */, (0, insertionSort_1.default)(unsortedArray, "ascending" /* ASC */), "ascending" /* ASC */);
console.log("Insertion Sort" /* INSERTION_SORT */, (0, insertionSort_1.default)(unsortedArray, "descending" /* DSC */), "descending" /* DSC */);
console.timeEnd("Insertion Sort" /* INSERTION_SORT */);
console.time("Merge Sort" /* MERGE_SORT */);
console.log("Merge Sort" /* MERGE_SORT */, (0, mergeSort_1.default)(unsortedArray, "ascending" /* ASC */), "ascending" /* ASC */);
console.log("Merge Sort" /* MERGE_SORT */, (0, mergeSort_1.default)(unsortedArray, "descending" /* DSC */), "descending" /* DSC */);
console.timeEnd("Merge Sort" /* MERGE_SORT */);
console.time("Quick Sort" /* QUICK_SORT */);
console.log("Quick Sort" /* QUICK_SORT */, (0, quickSort_1.default)(unsortedArray, "ascending" /* ASC */), "ascending" /* ASC */);
console.log("Quick Sort" /* QUICK_SORT */, (0, quickSort_1.default)(unsortedArray, "descending" /* DSC */), "descending" /* DSC */);
console.timeEnd("Quick Sort" /* QUICK_SORT */);
console.time("Random Quick Sort" /* RANDOM_QUICK_SORT */);
console.log("Random Quick Sort" /* RANDOM_QUICK_SORT */, (0, randomQuickSort_1.default)(unsortedArray, "ascending" /* ASC */), "ascending" /* ASC */);
console.log("Random Quick Sort" /* RANDOM_QUICK_SORT */, (0, randomQuickSort_1.default)(unsortedArray, "descending" /* DSC */), "descending" /* DSC */);
console.timeEnd("Random Quick Sort" /* RANDOM_QUICK_SORT */);
console.time("Default Sort" /* DEFAULT_SORT */);
console.log("Default Sort" /* DEFAULT_SORT */, unsortedArray.sort(), "ascending" /* ASC */);
console.log("Default Sort" /* DEFAULT_SORT */, unsortedArray.sort().reverse(), "descending" /* DSC */);
console.timeEnd("Default Sort" /* DEFAULT_SORT */);
module.exports = {
    bubbleSort: bubbleSort_1.default,
    mergeSort: mergeSort_1.default,
    selectionSort: selectionSort_1.default,
    insertionSort: insertionSort_1.default,
    quickSort: quickSort_1.default,
    randomQuickSort: randomQuickSort_1.default
};
//# sourceMappingURL=index.js.map