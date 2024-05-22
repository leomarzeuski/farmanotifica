import React, { ReactNode } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";

interface RowProps {
  children: ReactNode;
  style?: ViewStyle | ViewStyle[];
  [key: string]: any;
}

export const Row: React.FC<RowProps> = ({ children, style, ...props }) => {
  return (
    <View style={[styles.row, style]} {...props}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
