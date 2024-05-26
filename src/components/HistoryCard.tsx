import React from "react";
import { Card, Text, IconButton, useTheme } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import theme from "src/theme";

export const HistoryCard = ({ status, title, action, onPress }: any) => {
  const getStatusColor = () => {
    switch (status) {
      case "Enviar":
        return theme.colors.primary;
      case "Agendar":
        return theme.colors.primary;
      case "Reenviar":
        return theme.colors.error;
      case "Em análise":
        return theme.colors.primary;
      default:
        return theme.colors.elevation;
    }
  };

  const getIcon = () => {
    switch (status) {
      case "Em análise":
        return (
          <MaterialIcons
            name="hourglass-empty"
            size={24}
            color={theme.colors.warning}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Card style={styles.card} onPress={onPress}>
      <Card.Content style={styles.content}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.status}>{status}</Text>
        </View>
        <View style={styles.actionContainer}>
          {getIcon()}
          <Text style={[styles.action, { color: getStatusColor() }]}>
            {action}
          </Text>
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 12,
    backgroundColor: "#444",
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 16,
  },
  status: {
    color: "gray",
    fontSize: 12,
  },
  actionContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  action: {
    fontSize: 16,
    marginLeft: 8,
  },
});
