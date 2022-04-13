"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bubbleSort_1 = __importDefault(require("./bubbleSort"));
const insertionSort_1 = __importDefault(require("./insertionSort"));
const selectionSort_1 = __importDefault(require("./selectionSort"));
console.log("hello, i will write the sorting methods and description here \n");
const unsortedArray = [9, 8, 4, 3, 6, 5, 2, 1, 54, 43, 19, 17];
console.log("Bubble Sort" /* BUBBLE_SORT */, (0, bubbleSort_1.default)(unsortedArray, "ascending" /* ASC */), "ascending" /* ASC */);
console.log("Bubble Sort" /* BUBBLE_SORT */, (0, bubbleSort_1.default)(unsortedArray, "descending" /* DSC */), "descending" /* DSC */);
console.log("Selection Sort" /* SELECTION_SORT */, (0, selectionSort_1.default)(unsortedArray, "ascending" /* ASC */), "ascending" /* ASC */);
console.log("Selection Sort" /* SELECTION_SORT */, (0, selectionSort_1.default)(unsortedArray, "descending" /* DSC */), "descending" /* DSC */);
console.log("Insertion Sort" /* INSERTION_SORT */, (0, insertionSort_1.default)(unsortedArray, "ascending" /* ASC */), "ascending" /* ASC */);
console.log("Insertion Sort" /* INSERTION_SORT */, (0, insertionSort_1.default)(unsortedArray, "descending" /* DSC */), "descending" /* DSC */);
//# sourceMappingURL=index.js.map