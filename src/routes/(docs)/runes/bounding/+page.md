---
title: Bounding - Runes - @unsv/hooks
---

<script>
    import { Bounding } from '$lib/runes/index.js'

    let el =  $state()
    let bounding = new Bounding(() => el)

	$inspect(el)
</script>

# Bounding

Reactive bounding box of an HTML element

---

<br>

## Demo

<div class="bg-zinc-50 p-4 rounded-md min-h-xs">
	<textarea
        bind:this={el}
		class="resize w-sm max-w-full h-32 p-4 border"
		value={JSON.stringify(bounding.value)}
	></textarea>
</div>

## Usage

```svelte
<script>
	import { Bounding } from '@unsv/hooks/runes';

	let el = $state();
	let bounding = new Bounding(() => el);
</script>

<textarea bind:this={el}>{JSON.stringify(bounding.value)}</textarea>
```
