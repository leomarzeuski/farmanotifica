import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import { Card, Text } from "react-native-paper";
import * as Notifications from "expo-notifications";
import theme from "src/theme";

export const HistoryCard = ({ status, title, action, onPress }: any) => {
  const getStatusColor = () => {
    switch (status) {
      case "Enviar":
        return theme.colors.secondary;
      case "Agendar":
        return theme.colors.secondary;
      case "Reenviar":
        return theme.colors.notification;
      case "Em análise":
        return theme.colors.secondary;
      default:
        return theme.colors.primary;
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

  const handlePress = async () => {
    if (status === "Em análise") {
      await sendNotification();
    }
    onPress();
  };

  const sendNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Seu laudo foi aprovado. 🎉🎉",
        body: "O status foi alterado, agende uma data para a retirada do medicamento! 😊📅",
        data: { screen: "agendamento" },
        badge: 1,
        sound: true,
      },
      trigger: null,
    });
  };

  return (
    <Card style={styles.card} onPress={handlePress}>
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
