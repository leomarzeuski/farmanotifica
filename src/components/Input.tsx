import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput, TextInputProps } from "react-native-paper";
import theme from "../theme";

interface InputProps extends TextInputProps {
  error?: boolean;
  errorMessage?: any;
}

export function Input({
  error,
  errorMessage,
  editable = true,
  ...rest
}: InputProps) {
  return (
    <View>
      <TextInput
        {...rest}
        editable={editable}
        style={[
          styles.input,
          error ? styles.errorInput : null,
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
      {error && errorMessage ? (
        <Text style={styles.errorText}>{errorMessage}</Text>
      ) : null}
    </View>
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
    borderBottomWidth: 2,
    borderBottomColor: "red",
  },
  disabledInput: {
    backgroundColor: "#2c2c2e",
  },
  errorText: {
    color: "red",
    fontSize: theme.fontSizes.sm,
  },
});
