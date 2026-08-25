import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
export default defineConfig({
    plugins: [react()],
    resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
    build: {
        // Keep the vendor chunk separate so the animation library doesn't
        // bloat the main bundle on first load.
        rollupOptions: {
            output: {
                manualChunks: {
                    motion: ["framer-motion"],
                },
            },
        },
    },
});
