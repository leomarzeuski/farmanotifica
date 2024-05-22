import { SafeAreaView, ScrollView } from "react-native";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>
    </ScrollView>
  );
}
