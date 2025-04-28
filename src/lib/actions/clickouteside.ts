export function clickoutside(node: HTMLElement, callback: (e: MouseEvent) => void) {
	function listener(e: MouseEvent) {
		if (!e.target) return callback(e);
		if (node.contains(e.target as HTMLElement)) return;

		callback(e);
	}

	window.addEventListener('click', listener);
	return {
		destroy() {
			window.removeEventListener('click', listener);
		}
	};
}
