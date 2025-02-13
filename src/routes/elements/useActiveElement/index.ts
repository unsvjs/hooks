import { readonly, writable } from "svelte/store";

export function useActiveElement<T extends HTMLElement>() {
  const active_element = writable<T | null>(null);

  const trigger = () => active_element.set(document.activeElement as T);

  active_element.subscribe(console.log);

  if (typeof window !== "undefined") {
    window.addEventListener("blur", (event) => {
      if (event.relatedTarget !== null) return;

      trigger();
    });

    window.addEventListener("focus", trigger);

    trigger();
  }

  return readonly(active_element);
}
