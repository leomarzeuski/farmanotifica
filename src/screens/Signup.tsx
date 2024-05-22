import BackgroundImg from "@assets/background.png";
import React from "react";
import { Image, View, StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import theme from "src/theme";
import { Headline } from "react-native-paper";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { Layout } from "@components/Layout";

export function SignUp() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleGoBack() {
    navigation.navigate("signIn");
  }

  return (
    <Layout>
      <View style={styles.container}>
        <Image
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          resizeMode="contain"
          style={{ position: "absolute" }}
        />
        <View style={styles.center}>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons
              name="pill"
              size={40}
              color={theme.colors.primary}
            />
            <Text style={styles.title}>FarmaNotifica</Text>
          </View>
          <Text style={styles.subtitle}>
            Consulte e agende seus medicamentos de forma rápida e prática!
          </Text>
        </View>
        <Headline style={{ color: theme.colors.text }}>
          Acesse sua conta
        </Headline>
        <Input placeholder="Nome" />
        <Input
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Input placeholder="Senha" secureTextEntry />
        <Button title="Criar e Acessar" />

        <View style={styles.createAccount}>
          <Button
            onPress={handleGoBack}
            title="Voltar para login"
            variant="outlined"
          />
        </View>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 10,
  },
  center: {
    marginVertical: 80,
    maxWidth: 250,
  },
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  title: {
    color: theme.colors.text,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    color: theme.colors.text,
    fontSize: theme.fontSizes.sm,
    textAlign: "center",
  },
  createAccount: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginTop: 120,
  },
});
