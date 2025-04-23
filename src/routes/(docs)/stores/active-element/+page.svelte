<script lang="ts">
	import { active_element } from '$lib/stores/index.js';
</script>

<div class="flex flex-wrap gap-4">
	{#each [1, 2, 3, 4, 5] as index (index)}
		<input
			id="input-{index}"
			class="bg-zinc-100 px-4 h-8 rounded-md"
			type="text"
			placeholder="#input-{index}"
		/>
	{/each}
</div>

<div class="py-4">
	active element: {$active_element?.id}
</div>
