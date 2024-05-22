import React from "react";
import { TextInput, TextInputProps } from "react-native-paper";
import { StyleSheet } from "react-native";
import theme from "../theme";

export function Input({ ...rest }: TextInputProps) {
  return (
    <TextInput
      {...rest}
      style={styles.input}
      textColor={theme.colors.text}
      placeholderTextColor={theme.colors.placeholder}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#131215",
    borderRadius: 5,
    marginBottom: 8,
    width: 300,
  },
});
