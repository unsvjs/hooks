<script lang="ts">
	import '@unocss/reset/tailwind.css';
	import 'virtual:uno.css';
	import './main.css';

	const { children } = $props();
</script>

{@render children?.()}
