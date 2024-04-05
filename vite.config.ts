import { resolve } from "path";
import { defineConfig } from "vite";
import "dotenv/config";

export default defineConfig(({ mode }) => {
  return {
    base: process.env?.BASE_PATH ?? "/",
    build: {
      outDir: mode === "doc" ? "docs" : "dist",
      lib:
        mode === "doc"
          ? undefined
          : {
              entry: resolve(__dirname, "src/main.ts"),
              name: "canUseTheFont",
              fileName: "can-use-the-font",
            },
      rollupOptions: {
        input: mode === "doc" ? resolve(__dirname, "index.html") : undefined,
      },
    },
  };
});
