import { active_element } from '$lib/stores/index.js';

export function focuswithin(node: HTMLElement, callback: (v: boolean) => void) {
	const unsubscribe = active_element.subscribe((el) => {
		if (!el) return callback(false);
		callback(el.contains(node));
	});
	return {
		destroy() {
			unsubscribe();
		}
	};
}
