import vituum from 'vituum'
import nunjucks from '@vituum/vite-plugin-nunjucks'

export default {
    base: './',
    build: {
        rollupOptions: {
            output: {
                preserveModules: true,
            },
            preserveEntrySignatures: "exports-only",
        },
    },
    plugins: [
        vituum({
            pages: {
                normalizeBasePath: true,
            }
        }),
        nunjucks({
            root: './src',
            options: {
                autoescape: true,
            }
        })
    ]
}