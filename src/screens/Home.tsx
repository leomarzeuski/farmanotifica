import { HomeHeader } from "@components/HomeHeader";
import { Layout } from "@components/Layout";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

export function Home() {
  return (
    <Layout>
      <View>
        <HomeHeader />
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({});
