export function visibility(node: HTMLElement, callback: (v: boolean) => void) {
	const observer = new IntersectionObserver((entries) => callback(entries[0].isIntersecting));

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
