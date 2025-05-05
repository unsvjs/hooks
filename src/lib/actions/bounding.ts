import { resize } from './resize.js';

export const BOUNDING_ZEROS: DOMRect = {
	bottom: 0,
	height: 0,
	left: 0,
	right: 0,
	top: 0,
	width: 0,
	x: 0,
	y: 0,
	toJSON: () => {}
};

export type BoundingParams =
	| ((v: DOMRect) => void)
	| {
			value: (v: DOMRect) => void;
			/**
			 * Listen to window resize event
			 *
			 * @default true
			 */
			windowresize?: boolean;
			/**
			 * Listen to window scroll event
			 *
			 * @default true
			 */
			windowscroll?: boolean;
			/**
			 * Immediately call update on component mounted
			 *
			 * @default true
			 */
			immediate?: boolean;
	  };

export function bounding(node: HTMLElement, params: BoundingParams) {
	const has_value = 'value' in params;
	const callback = has_value ? params.value : params;
	const recalculate = () => callback(node.getBoundingClientRect());
	const onresize = resize(node, recalculate);
	const { windowresize = true, windowscroll = true, immediate = true } = has_value ? params : {};

	if (typeof window !== 'undefined') {
		if (windowresize) window.addEventListener('resize', recalculate);
		if (windowscroll) window.addEventListener('scroll', recalculate);
		if (immediate) callback(node.getBoundingClientRect());
	}

	return {
		destroy() {
			window.removeEventListener('resize', recalculate);
			window.removeEventListener('scroll', recalculate);
			onresize.destroy();
		}
	};
}
