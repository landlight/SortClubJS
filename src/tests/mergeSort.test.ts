import mergeSort from "../mergeSort";
import { SortOrder } from "../types";
import { sortedArraysASC, sortedArraysDSC } from "./data";

describe("'Mmerge Sort'", () => {
  test.each(sortedArraysASC)(
    "MergeSort, given %p as argument, returns %p",
    (firstArg, expectedResult) => {
      const result = mergeSort(firstArg, SortOrder.ASC);
      expect(result).toEqual(expectedResult);
    }
  );
  test.each(sortedArraysDSC)(
    "MergeSort, given %p as argument, returns %p",
    (firstArg, expectedResult) => {
      const result = mergeSort(firstArg, SortOrder.DSC);
      expect(result).toEqual(expectedResult);
    }
  );
});
