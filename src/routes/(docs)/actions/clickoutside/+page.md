<script>
	import { clickoutside } from '$lib/actions/index.js';

	let dialog_open = $state(true);

	$effect(() => {
	})
</script>

# Mouseover

Listen for clicks outside of an element. Useful for modal or dropdown.

---

<br>

## Demo

<div class="min-h-xs bg-zinc-50 p-4">
	<button class="bg-orange-600 text-white h-10 rounded-md px-4" onclick={() => dialog_open = !dialog_open} >
		open dialog: {dialog_open}
	</button>


  <dialog
    open={dialog_open}
   	class="backdrop-black/50 bg-white shadow-lg p-4 inset-0 rounded-lg"
   	use:clickoutside={() => dialog_open = false}
  >
   	Close this dialog by clicking on the backdrop
  </dialog>
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
