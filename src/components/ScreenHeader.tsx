import React from "react";
import { Appbar, useTheme } from "react-native-paper";
import { StyleSheet } from "react-native";
import theme from "src/theme";

type Props = {
  title: string;
};

export const ScreenHeader = ({ title }: Props) => {
  return (
    <Appbar.Header
      style={[styles.header, { backgroundColor: theme.colors.surface }]}
    >
      <Appbar.Content
        style={{ height: 60, alignItems: "center" }}
        title={title}
        titleStyle={styles.title}
      />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingBottom: 24,
    paddingTop: 32,
  },
  title: {
    color: "white",
    fontSize: 20,
  },
});
