export function resize(node: HTMLElement, callback: ResizeObserverCallback) {
	let observer: ResizeObserver;

	if (typeof ResizeObserver !== 'undefined') {
		observer = new ResizeObserver(callback);
		observer.observe(node);
	}

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
