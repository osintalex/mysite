import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        background: "#171923",
        color: "white",
      },
    },
  },
});

export default theme;
