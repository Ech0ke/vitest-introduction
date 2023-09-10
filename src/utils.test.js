import { describe, it, expect } from "vitest";
import { sum } from "./utils";

// use decribe for test grouping
describe("#sum", () => {
  it("should add the numbers passed to it", () => {
    const a = 1;
    const b = 2;
    expect(sum(a, b)).toBe(a + b);
  });

  it("should add the numbers passed to it", () => {
    const a = 1;
    const b = 2;
    //use .not to negate
    expect(sum(a, b)).not.toBe(a - b);
  });
});

it("should be same object values", () => {
  const object = { name: "A" };
  const newObject = { name: "A" };
  //use toEqual to check if object or array values are the same, using toBe vill compare references.
  expect(object).toEqual(newObject);
});
