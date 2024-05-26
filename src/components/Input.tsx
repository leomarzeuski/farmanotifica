import React from "react";
import { TextInput, TextInputProps } from "react-native-paper";
import { StyleSheet } from "react-native";
import theme from "../theme";

interface InputProps extends TextInputProps {
  error?: boolean;
}

export function Input({ error, editable = true, ...rest }: InputProps) {
  return (
    <TextInput
      {...rest}
      editable={editable}
      style={[
        styles.input,
        error && styles.errorInput,
        !editable && styles.disabledInput,
      ]}
      textColor={theme.colors.text}
      placeholderTextColor={error ? "red" : theme.colors.placeholder}
      theme={{
        colors: {
          text: theme.colors.text,
          placeholder: error ? "red" : theme.colors.placeholder,
          primary: error ? "red" : theme.colors.primary,
          error: "red",
          disabled: theme.colors.disabled,
        },
      }}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#212025",
    borderRadius: 5,
    marginBottom: 8,
    width: 300,
  },
  errorInput: {
    borderColor: "red",
  },
  disabledInput: {
    backgroundColor: "#2c2c2e",
  },
});
