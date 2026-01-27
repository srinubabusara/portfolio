import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Name of your GitHub repo
const repoName = "portfolio";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction = mode === "production";

  return {
    // Use relative paths for local preview, GitHub Pages for production
    base: isProduction ? `/${repoName}/` : "./",

    server: {
      host: "0.0.0.0", // "::" also works, 0.0.0.0 is simpler
      port: 4949,
      strictPort: true, // fail if port is in use
      hmr: {
        overlay: false,
      },
    },

    plugins: [react(), !isProduction && componentTagger()].filter(Boolean),

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },

    // Optional: build optimization
    build: {
      outDir: "dist",
      sourcemap: !isProduction,
      rollupOptions: {
        output: {
          // Ensure hashed filenames for caching
          entryFileNames: "assets/[name]-[hash].js",
          chunkFileNames: "assets/[name]-[hash].js",
          assetFileNames: "assets/[name]-[hash].[ext]",
        },
      },
    },
  };
});
