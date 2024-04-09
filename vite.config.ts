import { resolve } from "path";
import { defineConfig } from "vite";
import "dotenv/config";
import dts from "vite-plugin-dts";

export default defineConfig(({ mode, command }) => {
  return {
    plugins: [dts()],
    base: process.env?.BASE_PATH ?? "/",
    build: {
      outDir: mode === "doc" ? "docs" : "dist",
      lib:
        mode === "doc"
          ? undefined
          : {
              entry: resolve(__dirname, "src/main.ts"),
              name: "isFontAvailable",
              fileName: "is-font-available",
            },
      rollupOptions: {
        input:
          mode === "doc" || command === "serve"
            ? {
                main: resolve(__dirname, "/examples/index.html"),
                loading: resolve(__dirname, "/examples/loading.html"),
              }
            : undefined,
      },
    },
  };
});
