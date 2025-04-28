<script lang="ts">
	import IconSearch from '~icons/tabler/search';
	import IconBrandGithub from '~icons/tabler/brand-github';
	import { titleCase } from 'scule';
	import { page } from '$app/state';
	const { children } = $props();

	// const main_links = [];
	const links = {
		actions: ['bounding', 'clickoutside', 'hover', 'mouseover', 'resize', 'visibility'],
		stores: ['active-element']
	};
</script>

<header
	class={[
		'h-16 bg-white/50 border-b backdrop-blur-md fixed w-full top-0 z-20 flex items-center gap-4 px-4'
	]}
>
	<div class="h-full w-60 font-bold text-xl flex items-center px-4">@unsv/hooks</div>

	<button
		class="h-10 bg-zinc-100 hover:(bg-zinc-200) transition px-4 rounded-md text-black/50 flex items-center gap-1 text-sm"
	>
		<IconSearch class="size-5" />
		<span class=""> Search documentations... </span>
	</button>

	<span class="flex-grow"> </span>

	<a
		href="https://github.com/unsvjs/hooks"
		target="_blank"
		class="px-2 aspect-square hover:(bg-zinc-100) rounded-md grid place-items-center"
	>
		<IconBrandGithub />
	</a>
</header>

<nav class="border-r flex flex-col w-64 p-4 gap-0.5 fixed top-16 z-10 min-h-[calc(100vh-4rem)]">
	{#each Object.entries(links) as [key, names] (key)}
		{#if !!key}
			<span class="uppercase text-xs flex items-center px-4 pt-4 pb-2 font-bold text-black/40">
				{key}
			</span>
		{/if}

		{#each names as name (name)}
			{@const href = `/${key}/${name}`}

			<a
				class={[
					'px-4 rounded-md transition h-10 inline-flex items-center',
					page.url.pathname === href ? 'bg-zinc-100' : 'hover:(bg-zinc-50)'
				]}
				{href}
			>
				{titleCase(name)}
			</a>
		{/each}
	{/each}
</nav>

<div class="flex min-h-vh pt-16 px-64">
	<main class="flex-grow p-4 max-w-5xl mx-auto flex flex-col gap-6">
		{@render children?.()}
	</main>
</div>
