import path from "path";
import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from 'vite'
import linaria from '@linaria/vite'

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  viteFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '../src'),
        '@public': path.resolve(__dirname, '../public'),
      };
    }

    // Merge custom configuration into the default config
    return mergeConfig(config, {
      plugins: [
        linaria({
          include: ['**/*.{ts,tsx}'],
          babelOptions: {
            presets: ['@babel/preset-typescript', '@babel/preset-react'],
          },
        }),
      ],
    })
  },
};
export default config;
