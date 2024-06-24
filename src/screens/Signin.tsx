import BackgroundImg from "@assets/background4.png";
import React, { useState } from "react";
import { Image, View, StyleSheet, Text, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import theme from "src/theme";
import { Headline } from "react-native-paper";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { Layout } from "@components/Layout";
import { useAuth } from "@routes/AuthContext";
import { useSnackbar } from "src/context/snackbar.context";
import { useForm, Controller } from "react-hook-form";

export function SignIn() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signIn } = useAuth();
  const { showSnackbar } = useSnackbar();
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  function handleNewAccount() {
    navigation.navigate("signUp");
  }

  const handleSignIn = (data: any) => {
    if (data.email) signIn(data.email, data.password);
  };

  return (
    <Layout>
      <View style={styles.container}>
        <Image
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          resizeMode="cover"
          style={{ position: "absolute", width: "100%" }}
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
        <Controller
          control={control}
          name="email"
          rules={{
            required: "E-mail é obrigatório",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "E-mail inválido",
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={!!errors.email}
              errorMessage={errors.email ? errors.email.message : ""}
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          rules={{ required: "Senha é obrigatória" }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Senha"
              secureTextEntry
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={!!errors.password}
              errorMessage={errors.password ? errors.password.message : ""}
            />
          )}
        />

        <Button title="Acessar" onPress={handleSubmit(handleSignIn)} />

        <View style={styles.createAccount}>
          <Text style={{ color: theme.colors.text }}>
            Ainda não tem acesso?
          </Text>
          <Button
            onPress={handleNewAccount}
            title="Criar conta"
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
