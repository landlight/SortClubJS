"use strict";
exports.__esModule = true;
var bubbleSort_1 = require("../bubbleSort");
var data_1 = require("./data");
describe("'Bubble Sort'", function () {
    test.each(data_1.sortedArraysASC)("BubbleSort, given %p as argument, returns %p", function (firstArg, expectedResult) {
        var result = bubbleSort_1["default"](firstArg, "ascending" /* ASC */);
        expect(result).toEqual(expectedResult);
    });
    test.each(data_1.sortedArraysDSC)("BubbleSort, given %p as argument, returns %p", function (firstArg, expectedResult) {
        var result = bubbleSort_1["default"](firstArg, "descending" /* DSC */);
        expect(result).toEqual(expectedResult);
    });
});
