import insertionSort from "../insertionSort";
import { SortOrder } from "../types";
import { sortedArraysASC, sortedArraysDSC } from "./data";

describe("'Insertion Sort'", () => {
  test.each(sortedArraysASC)(
    "InsertionSort, given %p as argument, returns %p",
    (firstArg, expectedResult) => {
      const result = insertionSort(firstArg, SortOrder.ASC);
      expect(result).toEqual(expectedResult);
    }
  );
  test.each(sortedArraysDSC)(
    "InsertionSort, given %p as argument, returns %p",
    (firstArg, expectedResult) => {
      const result = insertionSort(firstArg, SortOrder.DSC);
      expect(result).toEqual(expectedResult);
    }
  );
});
