<script>
	import { visibility } from '$lib/actions/index.js';

	let visible = $state(true);
</script>

# Visibility

Tracks the visibility of an element within the viewport.

---

<br>

## Demo


<div class="bg-zinc-100 border-2 border-dashed p-4" use:visibility={(v) => (visible = v)}>
	target element
</div>

<div class="h-vh"></div>
<div class="h-vh"></div>

<div class={['fixed bottom-4 right-4 p-4', visible ? 'bg-green-300' : 'bg-red-300']}>
	target is visible: {visible}
</div>
