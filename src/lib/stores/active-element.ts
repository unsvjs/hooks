import { writable } from 'svelte/store';

export const active_element = writable<HTMLElement | null>(null);

const listener = () => active_element.set(document.activeElement as HTMLElement);

if (typeof window !== 'undefined') {
	window.addEventListener('focusin', listener);
	window.addEventListener('focusout', listener);
}
