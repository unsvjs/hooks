export function resize(node: HTMLElement, callback: ResizeObserverCallback) {
	const observer = new ResizeObserver(callback);
	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
