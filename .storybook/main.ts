module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-essentials"],
  framework: "@storybook/react",
  core: {
    builder: "storybook-builder-vite",
  },
  // features: {
  //   storyStoreV7: true,
  // },
  viteFinal: async (config) => {
    config.plugins = [
      ...config.plugins,
      require("vite-tsconfig-paths").default(),
    ];
    return config;
  },
};
