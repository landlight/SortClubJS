"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mergeSort_1 = __importDefault(require("../mergeSort"));
const data_1 = require("./data");
describe("'Mmerge Sort'", () => {
    test.each(data_1.sortedArraysASC)("MergeSort, given %p as argument, returns %p", (firstArg, expectedResult) => {
        const result = (0, mergeSort_1.default)(firstArg, "ascending" /* ASC */);
        expect(result).toEqual(expectedResult);
    });
    test.each(data_1.sortedArraysDSC)("MergeSort, given %p as argument, returns %p", (firstArg, expectedResult) => {
        const result = (0, mergeSort_1.default)(firstArg, "descending" /* DSC */);
        expect(result).toEqual(expectedResult);
    });
});
//# sourceMappingURL=mergeSort.test.js.map