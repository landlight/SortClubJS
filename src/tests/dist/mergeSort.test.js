"use strict";
exports.__esModule = true;
var mergeSort_1 = require("../mergeSort");
var data_1 = require("./data");
describe("'Mmerge Sort'", function () {
    test.each(data_1.sortedArraysASC)("MergeSort, given %p as argument, returns %p", function (firstArg, expectedResult) {
        var result = mergeSort_1["default"](firstArg, "ascending" /* ASC */);
        expect(result).toEqual(expectedResult);
    });
    test.each(data_1.sortedArraysDSC)("MergeSort, given %p as argument, returns %p", function (firstArg, expectedResult) {
        var result = mergeSort_1["default"](firstArg, "descending" /* DSC */);
        expect(result).toEqual(expectedResult);
    });
});
