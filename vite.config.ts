/// <reference types="vitest/config" />

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    include: ["**/*.spec.tsx", "**/*.spec.ts"],
    globals: true,
  },
  build: {
    outDir: "build",
  },
});
