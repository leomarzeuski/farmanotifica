// src/App.tsx
import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { PaperProvider } from "react-native-paper";
import { Loading } from "./src/components/Loading";
import theme from "./src/theme";
import { Routes } from "./src/routes";
import * as Notifications from "expo-notifications";
import { AuthProvider } from "@routes/AuthContext";
import { SnackbarProvider } from "src/context/snackbar.context";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const notificationListener = React.useRef<any>();
  const responseListener = React.useRef<any>();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        console.log(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        const screen = response.notification.request.content.data.screen;
        if (screen) {
        }
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <AuthProvider>
      <PaperProvider theme={theme}>
        <SnackbarProvider>
          <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
          />
          <View
            style={[
              styles.container,
              { backgroundColor: theme.colors.background },
            ]}
          >
            {isLoading ? <Loading /> : <Routes />}
          </View>
        </SnackbarProvider>
      </PaperProvider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});
