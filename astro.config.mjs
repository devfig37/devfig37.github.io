// @ts-check
import { defineConfig } from 'astro/config';
const isProd = import.meta.env.PROD;

// https://astro.build/config
export default defineConfig({
    site: 'https://devfig37.github.io',
    // base: isProd === true ? '/devfig37' : '/',
});