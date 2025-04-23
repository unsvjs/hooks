import { bounding } from './bounding.js';

export const MOUSEOVER_ZEROS: MouseoverValue = {
	delta_x: 0,
	delta_y: 0,
	mouseover: false,
	mouse_x: 0,
	mouse_y: 0,
	element_x: 0,
	element_y: 0,
	element_height: 0,
	element_width: 0
};

export type MouseoverValue = {
	mouse_x: number;
	mouse_y: number;
	element_x: number;
	element_y: number;
	element_width: number;
	element_height: number;
	/**
	 * The delta in the x axis of mouse and element
	 */
	delta_x: number;
	/**
	 * The delta in the y axis of mouse and element
	 */
	delta_y: number;
	/**
	 * If mouse is over the element
	 */
	mouseover: boolean;
};

export function mouseover(node: HTMLElement, callback: (v: MouseoverValue) => void) {
	const value = MOUSEOVER_ZEROS;
	const bounding_handler = bounding(node, (v) => {
		value.element_x = v.left;
		value.element_y = v.top;
		value.element_width = v.width;
		value.element_height = v.height;
		update();
	});

	function listener(event: MouseEvent) {
		value.mouse_x = event.x;
		value.mouse_y = event.y;
		update();
	}

	function update() {
		value.delta_x = value.mouse_x - value.element_x;
		value.delta_y = value.mouse_y - value.element_y;

		const within_x = value.delta_x >= 0 && value.delta_x <= value.element_width;
		const within_y = value.delta_y >= 0 && value.delta_y <= value.element_height;

		value.mouseover = within_x && within_y;

		callback(value);
	}

	window.addEventListener('mousemove', listener);
	window.addEventListener('dragover', listener);
	callback(value);

	return {
		destroy() {
			window.removeEventListener('mousemove', listener);
			window.removeEventListener('dragover', listener);
			bounding_handler.destroy();
		}
	};
}
