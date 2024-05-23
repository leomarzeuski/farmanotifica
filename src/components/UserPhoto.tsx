import React from "react";
import { Avatar } from "react-native-paper";
import { Image, StyleSheet } from "react-native";

type Props = {
  size?: number;
  uri?: string;
};

export function UserPhoto({ size, uri }: Props) {
  return <Avatar.Image size={size} source={{ uri }} style={styles.avatar} />;
}

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 50,
  },
});
