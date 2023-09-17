import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { delayedFunc, sum } from "./utils";

// use describe for test grouping
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
  //use toEqual to check if object or array values are the same, using toBe will compare references
  expect(object).toEqual(newObject);
});

describe("#delayedFunc", () => {
  // isolate all test in describe block to use fake timers
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });
  it("should call the passed in function after a delay", /* async */ () => {
    // .fn creates a new function
    const func = vi.fn();

    // await delayedFunc(func);

    // // ensure that the function has been called one time
    // expect(func).toHaveBeenCalledOnce();

    // // ensure what properties should be passed to a function
    // expect(func).toHaveBeenCalledWith(2);

    // way to get around timeout functions to run tests faster
    // vi.useFakeTimers();
    delayedFunc(func);
    vi.runAllTimers();
    //Always reset timers to real to avoid using fake timers for other tests to be written
    // vi.useRealTimers();

    expect(func).toHaveBeenCalledOnce();
    expect(func).toHaveBeenCalledWith(2);
  });
});
