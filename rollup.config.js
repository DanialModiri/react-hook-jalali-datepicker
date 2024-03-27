import typescript from "rollup-plugin-typescript2";
export default [
  {
    input: "src/index.ts",
    output: {
      file: "dist/bundle.es.js",
      format: "es",
    },
    plugins: [
      typescript({
        useTsconfigDeclarationDir: true,
        exclude: ["src/stories/**"],
      }),
    ],
  },
];
