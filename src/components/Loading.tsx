import { ActivityIndicator, Text } from "react-native-paper";
import theme from "../theme";
import { View } from "react-native";

export function Loading() {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <Text>
        <ActivityIndicator size={"large"} color={theme.colors.primary} />;
      </Text>
    </View>
  );
}
