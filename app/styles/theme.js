import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    beige: {
      50: "#F7F6F4",
      200: "#FFF4EE",
    },
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
    primary: {
      900: "#0A0B21",
      700: "#101234",
    },
  },
  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },
  styles: {
    global: {
      body: {
        bg: "beige.50",
        // bg: "gray.900",
        color: "gray.900",
      },

      "&::-webkit-scrollbar": {
        width: "12px",
        borderRadius: "8px",
        backgroundColor: `rgba(0, 0, 0, 0.05)`,
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: `rgba(0, 0, 0, 0.08)`,
        borderRadius: "8px",
      },
    },
  },
});
