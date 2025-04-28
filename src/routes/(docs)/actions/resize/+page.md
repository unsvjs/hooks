<script>
	import { resize } from '$lib/actions/index.js';

	let num = $state();
</script>

# Resize

Reports changes to the dimensions of an Element's content or the border-box

---

<br>

## Demo

<textarea
	class="resize w-sm max-w-full h-32"
	use:resize={(v) => (num = v[0].target.getBoundingClientRect())}
	value={JSON.stringify(num)}
></textarea>
