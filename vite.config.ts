import * as path from "path";
import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import terser from "@rollup/plugin-terser";
import { promisify } from "util";
import { brotliCompress } from "zlib";
import gzipPlugin from "rollup-plugin-gzip";

const brotliPromise = promisify(brotliCompress);

export default defineConfig({
  plugins: [preact()],
  build: {
    rollupOptions: {
      plugins: [
        gzipPlugin(),
        gzipPlugin({
          customCompression: (content) => brotliPromise(Buffer.from(content)),
          fileName: ".br",
        }),
      ],
      treeshake: {
        preset: "smallest",
        moduleSideEffects: true,
        tryCatchDeoptimization: false,
      },
      output: {
        format: "es",
        plugins: [
          terser({
            sourceMap: false,
            ecma: 2020,
            compress: {
              unused: true,
              dead_code: true,
              conditionals: true,
              evaluate: true,
            },
          }),
        ],
        manualChunks: {
          "react-libs": ["preact", "react-router-dom", "recoil"],
          "mui-libs": ["@mui/material", "@emotion/react", "@emotion/styled"],
        },
        compact: true,
        minifyInternalExports: true,
        generatedCode: {
          arrowFunctions: true,
          constBindings: true,
          objectShorthand: true,
        },
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
