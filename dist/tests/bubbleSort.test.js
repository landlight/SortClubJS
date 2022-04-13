"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bubbleSort_1 = __importDefault(require("../bubbleSort"));
const data_1 = require("./data");
describe("'Bubble Sort'", () => {
    test.each(data_1.sortedArraysASC)("BubbleSort, given %p as argument, returns %p", (firstArg, expectedResult) => {
        const result = (0, bubbleSort_1.default)(firstArg, "ascending" /* ASC */);
        expect(result).toEqual(expectedResult);
    });
    test.each(data_1.sortedArraysDSC)("BubbleSort, given %p as argument, returns %p", (firstArg, expectedResult) => {
        const result = (0, bubbleSort_1.default)(firstArg, "descending" /* DSC */);
        expect(result).toEqual(expectedResult);
    });
});
//# sourceMappingURL=bubbleSort.test.js.map