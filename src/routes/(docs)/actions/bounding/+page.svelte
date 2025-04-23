<script lang="ts">
	import { bounding, BOUNDING_ZEROS } from '$lib/actions/index.js';

	let num = $state(BOUNDING_ZEROS);
</script>

<textarea
	class="resize w-sm max-w-full h-32"
	use:bounding={{ windowresize: false, value: (v) => (num = v) }}
	value={JSON.stringify(num)}
></textarea>
