"use strict";
exports.__esModule = true;
var insertionSort_1 = require("../insertionSort");
var data_1 = require("./data");
describe("'Insertion Sort'", function () {
    test.each(data_1.sortedArraysASC)("InsertionSort, given %p as argument, returns %p", function (firstArg, expectedResult) {
        var result = insertionSort_1["default"](firstArg, "ascending" /* ASC */);
        expect(result).toEqual(expectedResult);
    });
    test.each(data_1.sortedArraysDSC)("InsertionSort, given %p as argument, returns %p", function (firstArg, expectedResult) {
        var result = insertionSort_1["default"](firstArg, "descending" /* DSC */);
        expect(result).toEqual(expectedResult);
    });
});
