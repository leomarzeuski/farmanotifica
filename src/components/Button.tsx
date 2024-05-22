import React, { ReactNode, useState } from "react";
import {
  Button as ButtonComponent,
  ButtonProps,
  Text,
} from "react-native-paper";
import { StyleSheet } from "react-native";
import theme from "../theme";

type Props = Omit<ButtonProps, "children"> & {
  title: string;
  children?: ReactNode;
  variant?: "contained" | "outlined";
};

export function Button({ title, variant = "contained", ...rest }: Props) {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  const buttonStyles = [
    styles.button,
    variant === "outlined" && styles.buttonOutlined,
    isPressed &&
      (variant === "outlined"
        ? styles.buttonOutlinedPressed
        : styles.buttonPressed),
    rest.style,
  ];

  const textStyles = [
    styles.text,
    variant === "outlined" && styles.textOutlined,
  ];

  return (
    <ButtonComponent
      {...rest}
      mode={variant}
      style={buttonStyles}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Text style={textStyles}>{title}</Text>
    </ButtonComponent>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    marginBottom: 8,
    width: 300,
  },
  buttonPressed: {
    backgroundColor: theme.colors.secondary,
  },
  buttonOutlined: {
    backgroundColor: "transparent",
    borderColor: theme.colors.primary,
    borderWidth: 1,
  },
  buttonOutlinedPressed: {
    borderColor: theme.colors.secondary,
  },
  text: {
    color: theme.colors.text,
  },
  textOutlined: {
    color: theme.colors.primary,
  },
});
