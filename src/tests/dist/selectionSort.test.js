"use strict";
exports.__esModule = true;
var selectionSort_1 = require("../selectionSort");
var data_1 = require("./data");
describe("'Selection Sort'", function () {
    test.each(data_1.sortedArraysASC)("SelectionSort, given %p as argument, returns %p", function (firstArg, expectedResult) {
        var result = selectionSort_1["default"](firstArg, "ascending" /* ASC */);
        expect(result).toEqual(expectedResult);
    });
    test.each(data_1.sortedArraysDSC)("SelectionSort, given %p as argument, returns %p", function (firstArg, expectedResult) {
        var result = selectionSort_1["default"](firstArg, "descending" /* DSC */);
        expect(result).toEqual(expectedResult);
    });
});
