import { writable } from 'svelte/store';

export const window_focus = writable(true);

if (typeof window !== 'undefined') {
	window.addEventListener('blur', () => window_focus.set(false));
	window.addEventListener('focus', () => window_focus.set(true));
}
