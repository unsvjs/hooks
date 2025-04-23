import { writable } from 'svelte/store';

export const window_size = writable({ width: 0, height: 0 });

if (typeof window !== 'undefined') {
	window.addEventListener('resize', () => {
		window_size.set({ width: window.outerWidth, height: window.outerHeight });
	});
}
