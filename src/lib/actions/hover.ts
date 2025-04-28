export function hover(node: HTMLElement, callback: (e: boolean) => void) {
	function listener(e: MouseEvent) {
		if (!e.target) return callback(false);

		callback(node.isEqualNode(e.target as Node));
	}

	window.addEventListener('mousemove', listener);
	node.addEventListener('mouseenter', listener);
	node.addEventListener('mouseleave', listener);
	node.addEventListener('mousemove', listener);
	return {
		destroy() {
			window.removeEventListener('mouseleave', listener);
		}
	};
}
