    import { defineConfig } from 'astro/config';
    import vercel from '@astrojs/vercel/static'; // o 'serverless' si necesitaras funciones

    export default defineConfig({
    output: 'static',
    adapter: vercel(),
    });
    // Puedes agregar más configuraciones aquí si es necesario