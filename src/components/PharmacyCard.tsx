import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Card, Text, IconButton, Avatar } from "react-native-paper";
import { Entypo } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import theme from "src/theme";

type Props = TouchableOpacityProps & {
  title: string;
  status: string;
  action: string;
};

export function PharmacyCard({ title, status, action, ...rest }: Props) {
  return (
    <TouchableOpacity {...rest} style={styles.touchable}>
      <Card style={styles.card}>
        <Card.Title
          title={title}
          titleStyle={styles.title}
          left={(props) => (
            <Avatar.Image
              {...props}
              source={{
                uri: "https://noticiasdepaulinia.com.br/wp-content/uploads/2024/01/Farmacia-Autos-Custo-de-Paulinia.jpeg",
              }}
              size={48}
              style={styles.avatar}
            />
          )}
          right={(props) => (
            <IconButton
              {...props}
              icon="chevron-right"
              iconColor={theme.colors.primary}
              size={24}
            />
          )}
        />
        <Card.Content>
          <Text style={styles.status}>{status}</Text>
          <Text style={styles.action}>{action}</Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchable: {
    marginBottom: 12,
  },
  card: {
    backgroundColor: "#333",
    borderRadius: 8,
  },
  title: {
    color: "white",
  },
  avatar: {
    backgroundColor: "transparent",
  },
  status: {
    color: "gray",
    marginTop: 8,
    fontSize: 14,
  },
  action: {
    color: "gray",
    marginTop: 4,
    fontSize: 14,
  },
});
