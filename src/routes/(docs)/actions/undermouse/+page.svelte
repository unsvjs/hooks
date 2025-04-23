<script lang="ts">
	import { undermouse } from '$lib/actions/index.js';

	let is_under = $state(false);
</script>

<div
	class={[
		'border-2 border-dashed p-4 w-sm aspect-video grid place-items-center',
		is_under ? 'bg-green-100' : 'bg-zinc-100'
	]}
	use:undermouse={(v) => (is_under = v.is_under)}
>
	element under mouse: {is_under}
</div>
