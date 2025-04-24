<script>
	import { mouseover } from '$lib/actions/index.js';

	let is_over = $state(false);
</script>

# Mouseover

Reactive mouse position related to an element

---

## Demo

<div
	class={[
		'border-2 border-dashed p-4 w-sm aspect-video grid place-items-center',
		is_over ? 'bg-green-100' : 'bg-zinc-100'
	]}
	use:mouseover={(v) => (is_over = v.mouseover)}
>
	element under mouse: {is_over}
</div>
