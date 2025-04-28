<script>
	import { hover } from '$lib/actions/index.js';

	let hovered = $state(false);
</script>

# Mouseover

Reactive element's hover state. Similar to Mouseover, but respect the other elements above target element

---

<br>

## Demo

<div class="bg-zinc-50 border-2 border-dashed p-4 min-h-xs">
  <button
      class="bg-orange-600 text-white rounded-md px-4 h-10 "
      use:hover={(v) => hovered = v}
  >
    {hovered ? 'Thank you!' : 'Hover me'}
  </button>
</div>


## Usage

```svelte
<script>
	import { hover } from '@unsv/hooks/actions';

	let hovered = $state(false);
</script>

<button use:hover={(v) => (hovered = v)}>
	element hovered: {hovered}
</button>
```
