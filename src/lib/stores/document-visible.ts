import { writable } from 'svelte/store';

export const document_visible = writable(true);

const listener = () => document_visible.set(document.visibilityState === 'visible');

if (typeof document !== 'undefined') {
	document.addEventListener('visibilitychange', listener);
}
