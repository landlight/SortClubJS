"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const randomQuickSort_1 = __importDefault(require("../randomQuickSort"));
const data_1 = require("./data");
describe("'RandomQuick Sort'", () => {
    test.each(data_1.sortedArraysASC)("RandomQuickSort, given %p as argument, returns %p", (firstArg, expectedResult) => {
        const result = (0, randomQuickSort_1.default)(firstArg, "ascending" /* ASC */);
        expect(result).toEqual(expectedResult);
    });
    test.each(data_1.sortedArraysDSC)("RandomQuickSort, given %p as argument, returns %p", (firstArg, expectedResult) => {
        const result = (0, randomQuickSort_1.default)(firstArg, "descending" /* DSC */);
        expect(result).toEqual(expectedResult);
    });
});
//# sourceMappingURL=randomQuickSort.test.js.map