import { bounding, BOUNDING_ZEROS } from '$lib/actions/bounding.js';

export class Bounding {
	value = $state(BOUNDING_ZEROS);

	constructor(node: () => HTMLElement) {
		$effect(() => {
			let element = node();
			if (element === undefined) return;

			const observer = bounding(element, (v) => (this.value = v));

			return () => {
				observer.destroy();
			};
		});
	}
}
