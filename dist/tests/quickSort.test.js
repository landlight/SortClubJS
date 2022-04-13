"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const quickSort_1 = __importDefault(require("../quickSort"));
const data_1 = require("./data");
describe("'Quick Sort'", () => {
    test.each(data_1.sortedArraysASC)("QuickSort, given %p as argument, returns %p", (firstArg, expectedResult) => {
        const result = (0, quickSort_1.default)(firstArg, "ascending" /* ASC */);
        expect(result).toEqual(expectedResult);
    });
    test.each(data_1.sortedArraysDSC)("QuickSort, given %p as argument, returns %p", (firstArg, expectedResult) => {
        const result = (0, quickSort_1.default)(firstArg, "descending" /* DSC */);
        expect(result).toEqual(expectedResult);
    });
});
//# sourceMappingURL=quickSort.test.js.map