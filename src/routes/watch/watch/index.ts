import { writable, type Readable,  } from "svelte/store";

export type WatchSource<T = any> = Readable<T> | (() => T);

export type WatchCallback<V = any, OV = any> = (value: V, oldValue: OV) => any;

export function watch<T>(
  sources: WatchSource | WatchSource[],
  fn: WatchCallback<T, T>,
) {}

const a = writable(1);
const b = writable(2);

watch([a, b], (value, oldValue) => {});

a.set(2);
b.set(3);
