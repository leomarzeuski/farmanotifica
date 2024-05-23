import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

export function Products() {
  return (
    <View style={styles.container}>
      <Text>Products</Text>
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
