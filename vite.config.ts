import { defaultTheme } from "@sveltepress/theme-default";
import { sveltepress } from "@sveltepress/vite";
import { defineConfig } from "vite";

const config = defineConfig({
  plugins: [
    sveltepress({
      theme: defaultTheme({
        navbar: [
          // Add your navbar configs here
        ],
        sidebar: {
          // Add your sidebar configs here
        },
        github: "https://github.com/unsvjs/hooks",
        logo: "/sveltepress.svg",
      }),
      siteConfig: {
        title: "unsv/hooks",
        description: "collection of Svelte utilities",
      },
    }),
  ],
});

export default config;
