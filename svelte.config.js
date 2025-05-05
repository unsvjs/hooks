import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex, escapeSvelte } from 'mdsvex';
import { createHighlighter } from 'shiki';

const highlighter = await createHighlighter({
	themes: ['one-light'],
	langs: ['svelte', 'sh']
});

const config = {
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md'],
			highlight: {
				highlighter: async (code, lang = 'text') => {
					await highlighter.loadLanguage(lang);
					const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: 'one-light' }));
					return `{@html \`${html}\` }`;
				}
			}
		}),
		{
			name: 'svelte-temp',
			markup({ content, filename }) {
				if (!filename.endsWith('.md')) return;

				console.log(content);
			}
		}
	],
	extensions: ['.md', '.svelte'],
	kit: { adapter: adapter() }
};

export default config;
