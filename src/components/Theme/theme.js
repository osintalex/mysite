import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  globalCss: {
    "html, body": {
      background: "#171923",
      color: "white",
    },
  },
});

export const system = createSystem(defaultConfig, config);

export default system;
