import React, { ReactNode } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import theme from "../theme";

interface ColumnProps {
  children: ReactNode;
  style?: ViewStyle | ViewStyle[];
  [key: string]: any;
}

export const Column: React.FC<ColumnProps> = ({
  children,
  style,
  ...props
}) => {
  return (
    <View style={[styles.Column, style]} {...props}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  Column: {
    flexDirection: "column",
    justifyContent: "center",
    flex: 1,
  },
});
