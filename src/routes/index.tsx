import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { AuthRoutes } from "./auth.routes";
import { useTheme } from "react-native-paper";

const theme = DefaultTheme;
theme.colors.background = "#121214";

export function Routes() {
  return (
    <NavigationContainer theme={theme}>
      <AuthRoutes />
    </NavigationContainer>
  );
}
