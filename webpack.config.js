import createStyledComponentsTransformer from "typescript-styled-components-plugin";

export default {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
        options: {
          getCustomTransformers: () => ({
            before: [styledComponentsTransformer],
          }),
        },
      },
    ],
  },
};
