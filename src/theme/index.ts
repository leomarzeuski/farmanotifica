import { DefaultTheme } from "react-native-paper";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#00B37E",
    secondary: "#00875F",
    accent: "#F75A68",
    background: "#121214",
    surface: "#202024",
    text: "#FFFFFF",
    disabled: "#7C7C8A",
    placeholder: "#C4C4CC",
    backdrop: "#29292E",
    notification: "#F75A68",
    onSurface: "#323238",
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
  },
  sizes: {
    14: 56,
    33: 148,
  },
};

export default theme;
