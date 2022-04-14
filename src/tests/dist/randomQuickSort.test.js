"use strict";
exports.__esModule = true;
var randomQuickSort_1 = require("../randomQuickSort");
var data_1 = require("./data");
describe("'RandomQuick Sort'", function () {
    test.each(data_1.sortedArraysASC)("RandomQuickSort, given %p as argument, returns %p", function (firstArg, expectedResult) {
        var result = randomQuickSort_1["default"](firstArg, "ascending" /* ASC */);
        expect(result).toEqual(expectedResult);
    });
    test.each(data_1.sortedArraysDSC)("RandomQuickSort, given %p as argument, returns %p", function (firstArg, expectedResult) {
        var result = randomQuickSort_1["default"](firstArg, "descending" /* DSC */);
        expect(result).toEqual(expectedResult);
    });
});
