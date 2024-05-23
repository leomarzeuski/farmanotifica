import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

export function Profile() {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    flex: 1,
  },
});
