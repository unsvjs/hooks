# @unsv/hooks

simplifying Svelte hooks


## Usage

Install the package into your project:

```sh
pnpm i @unsv/hooks
# npm i @unsv/hooks
# bun i @unsv/hooks
# why yarn
```

Start using inside your Svelte components

```svelte
<script lang="ts">
	import { visibility } from '$lib/actions/index.js';

	let visible = $state(true);
</script>

<div use:visibility={(v) => (visible = v)}>
	target element
</div>

<div style="height:calc(2 * 100vh)"></div>

<div style="position: fixed; bottom: 1rem">
	target is visible: {visible}
</div>
```
