import { describe, expect, it } from "vitest";
import { watch } from "../src";
import { writable } from "svelte/store";

describe("watch for multiple sources", () => {
  const a = writable(1);
  const b = writable(2);

  watch([a, b], (value, oldValue) => {
    expect(value).toEqual([2, 3]);
    expect(oldValue).toEqual([1, 2]);
  });

  a.set(2);
  b.set(3);
});
