import bubbleSort from "../bubbleSort";
import { SortOrder } from "../types";
import { sortedArraysASC, sortedArraysDSC } from "./data";

describe("'Bubble Sort'", () => {
  test.each(sortedArraysASC)(
    "BubbleSort, given %p as argument, returns %p",
    (firstArg, expectedResult) => {
      const result = bubbleSort(firstArg, SortOrder.ASC);
      expect(result).toEqual(expectedResult);
    }
  );
  test.each(sortedArraysDSC)(
    "BubbleSort, given %p as argument, returns %p",
    (firstArg, expectedResult) => {
      const result = bubbleSort(firstArg, SortOrder.DSC);
      expect(result).toEqual(expectedResult);
    }
  );
});
