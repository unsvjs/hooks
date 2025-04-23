<script lang="ts">
	import { resize } from '$lib/actions/index.js';

	let num = $state();
</script>

<textarea
	class="resize w-sm max-w-full h-32"
	use:resize={(v) => (num = v[0].target.getBoundingClientRect())}
	value={JSON.stringify(num)}
></textarea>
