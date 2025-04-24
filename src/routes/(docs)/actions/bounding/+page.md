<script>
	import { bounding, BOUNDING_ZEROS } from '$lib/actions/index.js';

	let num = $state(BOUNDING_ZEROS);
</script>

# Bounding
Reactive bounding box of an HTML element

---
<br>

## Demo

<div class="bg-zinc-50 p-4 rounded-md min-h-xs">
	<textarea
		class="resize w-sm max-w-full h-32 p-4 border"
		use:bounding={(v) => (num = v)}
		value={JSON.stringify(num)}
	></textarea>
</div>

## Usage

```svelte
<script>
	import { bounding, BOUNDING_ZEROS } from '@unsv/hooks/actions';

	let num = $state(BOUNDING_ZEROS);
	// 	let num = $state();
</script>

<div use:bounding={(v) => (num = v)}></div>

```
