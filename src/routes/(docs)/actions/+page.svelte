<script lang="ts">
	import { goto } from '$app/navigation';

	$effect(() => {
		goto('/actions/bounding');
	});
</script>
