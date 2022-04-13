"use strict";
exports.__esModule = true;
var quickSort_1 = require("../quickSort");
var data_1 = require("./data");
describe("'Quick Sort'", function () {
    test.each(data_1.sortedArraysASC)("QuickSort, given %p as argument, returns %p", function (firstArg, expectedResult) {
        var result = quickSort_1["default"](firstArg, "ascending" /* ASC */);
        expect(result).toEqual(expectedResult);
    });
    test.each(data_1.sortedArraysDSC)("QuickSort, given %p as argument, returns %p", function (firstArg, expectedResult) {
        var result = quickSort_1["default"](firstArg, "descending" /* DSC */);
        expect(result).toEqual(expectedResult);
    });
});
