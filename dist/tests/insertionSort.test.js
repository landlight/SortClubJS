"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const insertionSort_1 = __importDefault(require("../insertionSort"));
const data_1 = require("./data");
describe("'Insertion Sort'", () => {
    test.each(data_1.sortedArraysASC)("InsertionSort, given %p as argument, returns %p", (firstArg, expectedResult) => {
        const result = (0, insertionSort_1.default)(firstArg, "ascending" /* ASC */);
        expect(result).toEqual(expectedResult);
    });
    test.each(data_1.sortedArraysDSC)("InsertionSort, given %p as argument, returns %p", (firstArg, expectedResult) => {
        const result = (0, insertionSort_1.default)(firstArg, "descending" /* DSC */);
        expect(result).toEqual(expectedResult);
    });
});
//# sourceMappingURL=insertionSort.test.js.map