<script lang="ts">
	import IconSearch from '~icons/tabler/search';
	import IconBrandGithub from '~icons/tabler/brand-github';
	import IconBook from '~icons/tabler/book-2';
	import IconRocket from '~icons/tabler/rocket';
	import { titleCase } from 'scule';
	import { page } from '$app/state';
	import { type Component } from 'svelte';
	const { children, ...rest } = $props();

	// const main_links = [];
	const links = {
		actions: ['bounding', 'clickoutside', 'hover', 'mouseover', 'resize', 'visibility'],
		runes: ['bounding'],
		stores: ['active-element']
	};
</script>

<header
	class={[
		'h-16 bg-white/50 border-b backdrop-blur-md fixed w-full top-0 z-20 flex items-center gap-4 px-4'
	]}
>
	<div class="h-full w-60 font-bold text-xl flex items-center px-4 gap-2">
		<div class="size-7 bg-orange-600 rounded-md text-white grid place-items-center">
			<svg
				class="size-5"
				viewBox="0 0 512 512"
				xmlns="http://www.w3.org/2000/svg"
				style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2"
			>
				<g transform="matrix(12.8805,0,0,11.9751,-2837.08,-2633.52)">
					<path
						d="M229.611,222.894l-0.45,0.05l-1.85,0l-0.1,0.35l-0.3,1.5l-0.2,0.3l-2.7,6.75l0.25,0.55l-0.9,0.65l-2.7,6.55l-0.4,0.25l0.1,3.15l1.2,2.55l1.8,4.25l1.5,3.1l0.55,0l-0.15,0.85l1.75,4.35l0.05,1.65l4.55,0.05l0.1,-0.55l0.6,-1.6l2.7,-6.4l1.15,-2.4l0.05,-0.8l0.4,-0.5l2.45,-4.95l0.15,-2.75l-1.7,-3.7l-1.35,-3l-0.5,0l-0.25,-1.35l-2.55,-6.25l-1,-2.75l-2.25,0.1Zm0.1,30.5l-2.2,-5.75l-1,-2.05l-1,-0.7l0.5,-0.6l-0.45,-1.45l-0.65,-1.65l-0.05,-0.6l1.65,-4.3l-0.35,-0.8l0.7,-0.2l2.75,-7.25l0.3,0.95l1.15,3.05l0.9,0.55l-0.45,0.6l1.95,5.05l0.6,1.7l0.4,1.25l-2.45,6l0.05,0.9l0.05,0l-0.6,0.6l-1.6,5.25l-0.2,-0.55Z"
						style="fill-rule: nonzero"
						fill="currentColor"
					/>
				</g>
				<g transform="matrix(12.8805,0,0,11.9751,-2837.08,-2633.52)">
					<path
						d="M250.411,222.894l-0.45,0.05l-1.85,0l-0.1,0.35l-0.3,1.5l-0.2,0.3l-2.7,6.75l0.25,0.55l-0.9,0.65l-2.7,6.55l-0.4,0.25l0.1,3.15l1.2,2.55l1.8,4.25l1.5,3.1l0.55,0l-0.15,0.85l1.75,4.35l0.05,1.65l4.55,0.05l0.1,-0.55l0.6,-1.6l2.7,-6.4l1.15,-2.4l0.05,-0.8l0.4,-0.5l2.45,-4.95l0.15,-2.75l-1.7,-3.7l-1.35,-3l-0.5,0l-0.25,-1.35l-2.55,-6.25l-1,-2.75l-2.25,0.1Zm0.1,30.5l-2.2,-5.75l-1,-2.05l-1,-0.7l0.5,-0.6l-0.45,-1.45l-0.65,-1.65l-0.05,-0.6l1.65,-4.3l-0.35,-0.8l0.7,-0.2l2.75,-7.25l0.3,0.95l1.15,3.05l0.9,0.55l-0.45,0.6l1.95,5.05l0.6,1.7l0.4,1.25l-2.45,6l0.05,0.9l0.05,0l-0.6,0.6l-1.6,5.25l-0.2,-0.55Z"
						style="fill-rule: nonzero"
						fill="currentColor"
					/>
				</g>
			</svg>
		</div>

		@unsv/hooks
	</div>

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
	{@render link({ href: `/guides/introduction`, title: 'Introduction', icon: IconBook })}
	{@render link({ href: `/guides/getting-started`, title: 'Getting Started', icon: IconRocket })}

	{#each Object.entries(links) as [key, names] (key)}
		{#if !!key}
			<span class="uppercase text-xs flex items-center px-4 pt-4 pb-2 font-bold text-black/40">
				{key}
			</span>
		{/if}

		{#each names as name (name)}
			{@render link({ href: `/${key}/${name}`, title: titleCase(name) })}
		{/each}
	{/each}

	{#snippet link(opts: { href: string; title: string; icon?: Component })}
		<a
			class={[
				'px-4 rounded-md transition h-10 inline-flex gap-2 items-center',
				page.url.pathname === opts.href ? 'bg-zinc-100' : 'hover:(bg-zinc-50)'
			]}
			href={opts.href}
		>
			{#if opts.icon}
				<opts.icon class="size-5" />
			{/if}

			{opts.title}
		</a>
	{/snippet}
</nav>

<div class="flex min-h-vh pt-16 px-64">
	<main class="flex-grow p-4 max-w-5xl mx-auto flex flex-col gap-6">
		{@render children?.()}
	</main>
</div>
