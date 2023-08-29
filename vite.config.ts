import * as path from "path";
import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import terser from "@rollup/plugin-terser";
import { promisify } from "util";
import { brotliCompress } from "zlib";
import gzipPlugin from "rollup-plugin-gzip";
import { VitePWA } from "vite-plugin-pwa";
import zlib from "zlib";

const brotliPromise = promisify(brotliCompress);

export default defineConfig({
  plugins: [
    preact(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "mask-icon.svg"],
      manifest: {
        name: "rgl-website",
        short_name: "RGL Website",
        description:
          "Rodrigo Gross Lopez, a seasoned React Developer with 9+ years of experience. 🌟 Specializing in speed, performance, and scalability, Rodrigo delivers top-tier web applications",
        start_url: ".",
        theme_color: "#212121",
        background_color: "#212121",
        icons: [
          {
            src: "pwa-64x64.png",
            sizes: "64x64",
            type: "image/png",
          },
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "maskable-icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
    }),
  ],
  build: {
    target: "esnext",
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code === "MODULE_LEVEL_DIRECTIVE") {
          return;
        }
        warn(warning);
      },
      plugins: [
        gzipPlugin() as any,
        gzipPlugin({
          customCompression: (content) =>
            brotliPromise(Buffer.from(content), {
              params: { [zlib.constants.BROTLI_PARAM_QUALITY]: 11 },
            }),
          fileName: ".br",
        }),
      ],
      treeshake: {
        preset: "smallest",
        moduleSideEffects: true,
      },
      output: {
        format: "es",
        plugins: [
          terser({
            sourceMap: false,
            ecma: 2020,
          }) as any,
        ],
        manualChunks: {
          "react-libs": ["preact", "react-router-dom", "recoil"],
          "mui-libs": ["@mui/material"],
        },
        compact: true,
        minifyInternalExports: true,
      },
    },
  },
  resolve: {
    alias: {
      "@apollo-client": `${path.resolve(__dirname, "src/apollo/index")}`,
      "@authentication": `${path.resolve(
        __dirname,
        "src/api/authentication/index"
      )}`,
      "@queries": `${path.resolve(__dirname, "src/graphql/queries/index")}`,
      "@mutations": `${path.resolve(__dirname, "src/graphql/mutations/index")}`,
      "@router": `${path.resolve(__dirname, "src/router/index")}`,
      "@pages": `${path.resolve(__dirname, "src/pages/index")}`,
      "@components": `${path.resolve(__dirname, "src/components/index")}`,
      "@layout": `${path.resolve(__dirname, "src/layout/index")}`,
      "@theme": `${path.resolve(__dirname, "src/theme/index")}`,
      "@assets": `${path.resolve(__dirname, "src/assets/index")}`,
      "@images": `${path.resolve(__dirname, "src/assets/images/index")}`,
      "@hooks": `${path.resolve(__dirname, "src/hooks/index")}`,
      "@utils": `${path.resolve(__dirname, "src/utils/index")}`,
      "@atoms": `${path.resolve(__dirname, "src/recoil/atoms/index")}`,
      "@selectors": `${path.resolve(__dirname, "src/recoil/selectors/index")}`,
    },
  },
});
