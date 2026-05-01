// import path from "path";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
// import { dependencies } from "./package.json";
import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";

// function renderChunks(deps: Record<string, string>) {
//   const chunks = {};
//   Object.keys(deps).forEach((key) => {
//     if (["phaser"].includes(key)) return;
//     chunks[key] = [key];
//   });
//   return chunks;
// }

export default defineConfig({
  plugins: [
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
    }),
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    tailwindcss(),
    visualizer({ open: true }),
  ],
  // build: {
  //   rollupOptions: {
  //     output: {
  //       manualChunks: {
  //         phaser: ["phaser"],
  //         ...renderChunks(dependencies),
  //       },
  //     },
  //   },
  // },
  // resolve: {
  //   alias: {
  //     phaser: path.resolve(
  //       __dirname,
  //       "node_modules/phaser/dist/phaser-arcade-physics.min.js",
  //     ),
  //   },
  // },
});
