import * as React from "react";
import { StyleSheet, View, StatusBar, ScrollView } from "react-native";
import { PaperProvider } from "react-native-paper";
import { Loading } from "./src/components/Loading";
import theme from "./src/theme";
import { Routes } from "@routes/index";

export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <PaperProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <View
        style={[styles.container, { backgroundColor: theme.colors.background }]}
      >
        {isLoading ? <Loading /> : <Routes />}
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});
