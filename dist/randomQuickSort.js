"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function swap(items, leftIndex, rightIndex) {
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function partition(items, low, high) {
    let pivot = items[high];
    let i = (low - 1);
    for (let j = low; j <= high - 1; j++) {
        // If current element is smaller
        // than or equal to pivot
        if (items[j] <= pivot) {
            // increment index of
            // smaller element
            i++;
            swap(items, i, j);
        }
    }
    swap(items, i + 1, high);
    return (i + 1);
}
function partition_r(items, low, high) {
    let random = low + getRandomInt(Number.MAX_SAFE_INTEGER) % (high - low);
    swap(items, random, high);
    return partition(items, low, high);
}
function randomQuickSortASC(items, low, high) {
    if (low < high) {
        /* pi is partitioning index,
        arr[p] is now
        at right place */
        let pi = partition_r(items, low, high);
        // Separately sort elements before
        // partition and after partition
        randomQuickSortASC(items, low, pi - 1);
        randomQuickSortASC(items, pi + 1, high);
    }
    return items;
}
function randomQuickSort(inputArray, sortOrder = "ascending" /* ASC */) {
    // Copy array to be unaffected by the shift
    const copy = [...inputArray];
    const sorted = randomQuickSortASC(copy, 0, copy.length - 1);
    if (sortOrder === "descending" /* DSC */) {
        return sorted.reverse();
    }
    return sorted;
}
exports.default = randomQuickSort;
const unsortedArray = [9, 8, 4, 3, 6, 5, 2, 1, 54, 43, 19, 17];
console.log("Random Quick Sort" /* RANDOM_QUICK_SORT */, randomQuickSort(unsortedArray, "ascending" /* ASC */), "ascending" /* ASC */);
console.log("Random Quick Sort" /* RANDOM_QUICK_SORT */, randomQuickSort(unsortedArray, "descending" /* DSC */), "descending" /* DSC */);
//# sourceMappingURL=randomQuickSort.js.map