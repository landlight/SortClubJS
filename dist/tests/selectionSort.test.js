"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const selectionSort_1 = __importDefault(require("../selectionSort"));
const data_1 = require("./data");
describe("'Selection Sort'", () => {
    test.each(data_1.sortedArraysASC)("SelectionSort, given %p as argument, returns %p", (firstArg, expectedResult) => {
        const result = (0, selectionSort_1.default)(firstArg, "ascending" /* ASC */);
        expect(result).toEqual(expectedResult);
    });
    test.each(data_1.sortedArraysDSC)("SelectionSort, given %p as argument, returns %p", (firstArg, expectedResult) => {
        const result = (0, selectionSort_1.default)(firstArg, "descending" /* DSC */);
        expect(result).toEqual(expectedResult);
    });
});
//# sourceMappingURL=selectionSort.test.js.map