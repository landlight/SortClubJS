import quickSort from "../quickSort";
import { SortOrder } from "../types";
import { sortedArraysASC, sortedArraysDSC } from "./data";

describe("'Quick Sort'", () => {
  test.each(sortedArraysASC)(
    "QuickSort, given %p as argument, returns %p",
    (firstArg, expectedResult) => {
      const result = quickSort(firstArg, SortOrder.ASC);
      expect(result).toEqual(expectedResult);
    }
  );
  test.each(sortedArraysDSC)(
    "QuickSort, given %p as argument, returns %p",
    (firstArg, expectedResult) => {
      const result = quickSort(firstArg, SortOrder.DSC);
      expect(result).toEqual(expectedResult);
    }
  );
});
