import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex, escapeSvelte } from 'mdsvex';
import { createHighlighter } from 'shiki';

const config = {
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md'],
			highlight: {
				highlighter: async (code, lang = 'text') => {
					const highlighter = await createHighlighter({
						themes: ['one-light'],
						langs: ['svelte']
					});
					await highlighter.loadLanguage('svelte');
					const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: 'one-light' }));
					return `{@html \`${html}\` }`;
				}
			}
		})
	],
	extensions: ['.md', '.svelte'],
	kit: { adapter: adapter() }
};

export default config;
