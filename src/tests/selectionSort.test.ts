import selectionSort from "../selectionSort";
import { SortOrder } from "../types";
import { sortedArraysASC, sortedArraysDSC } from "./data";

describe("'Selection Sort'", () => {
  test.each(sortedArraysASC)(
    "SelectionSort, given %p as argument, returns %p",
    (firstArg, expectedResult) => {
      const result = selectionSort(firstArg, SortOrder.ASC);
      expect(result).toEqual(expectedResult);
    }
  );
  test.each(sortedArraysDSC)(
    "SelectionSort, given %p as argument, returns %p",
    (firstArg, expectedResult) => {
      const result = selectionSort(firstArg, SortOrder.DSC);
      expect(result).toEqual(expectedResult);
    }
  );
});
