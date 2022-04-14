import randomQuickSort from "../randomQuickSort";
import { SortOrder } from "../types";
import { sortedArraysASC, sortedArraysDSC } from "./data";

describe("'RandomQuick Sort'", () => {
  test.each(sortedArraysASC)(
    "RandomQuickSort, given %p as argument, returns %p",
    (firstArg, expectedResult) => {
      const result = randomQuickSort(firstArg, SortOrder.ASC);
      expect(result).toEqual(expectedResult);
    }
  );
  test.each(sortedArraysDSC)(
    "RandomQuickSort, given %p as argument, returns %p",
    (firstArg, expectedResult) => {
      const result = randomQuickSort(firstArg, SortOrder.DSC);
      expect(result).toEqual(expectedResult);
    }
  );
});
