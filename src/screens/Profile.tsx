import { Input } from "@components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as FileSystem from "expo-file-system";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import {
  ActivityIndicator,
  Avatar,
  Button,
  Headline,
  Snackbar,
  Text,
} from "react-native-paper";
import theme from "src/theme";
import * as yup from "yup";

type FormDataProps = {
  password: string;
  new_password: string;
  confirm_new_password: string;
};

const profileScheme = yup.object({
  password: yup
    .string()
    .required("Informe a senha.")
    .min(6, "A senha deve ter pelo menos 6 digitos."),
  new_password: yup
    .string()
    .required("Informe a nova senha.")
    .min(6, "A senha deve ter pelo menos 6 digitos."),
  confirm_new_password: yup
    .string()
    .required("Confirme a nova senha.")
    .oneOf(
      [yup.ref("new_password"), ""],
      "A confirmação da senha não confere."
    ),
});

const PHOTO_SIZE = 100;

export function Profile() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({ resolver: yupResolver(profileScheme) });
  const [photoIsLoading, setPhotoIsLoading] = useState(false);
  const [userPhoto, setUserPhoto] = useState(
    "https://media.licdn.com/dms/image/C4D03AQGcjUCUcjM8Qg/profile-displayphoto-shrink_100_100/0/1658155159137?e=1721865600&v=beta&t=pTji-JOnCixqoa7RUL9v2qO1OyfHZSDuqRdxPKmuN2I"
  );
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  async function handleUserPhotoSelected() {
    setPhotoIsLoading(true);
    try {
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true,
      });

      if (photoSelected.canceled) {
        return;
      }

      if (photoSelected.assets[0].uri) {
        const photoInfo = await FileSystem.getInfoAsync(
          photoSelected.assets[0].uri
        );

        if (
          "size" in photoInfo &&
          photoInfo.size &&
          photoInfo.size / 1024 / 1024 > 5
        ) {
          setSnackbarMessage(
            "Essa imagem é muito grande. Escolha uma de até 5MB."
          );
          setSnackbarVisible(true);
          return;
        }

        setUserPhoto(photoSelected.assets[0].uri);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setPhotoIsLoading(false);
    }
  }

  const handleNewPassword = (data: FormDataProps) => {
    console.log(data);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Headline style={{ color: theme.colors.text }}>Perfil</Headline>
      </View>
      <View style={styles.content}>
        {photoIsLoading ? (
          <ActivityIndicator animating={true} size="large" />
        ) : (
          <Avatar.Image size={PHOTO_SIZE} source={{ uri: userPhoto }} />
        )}
        <TouchableOpacity onPress={handleUserPhotoSelected}>
          <Text
            style={[styles.changePhotoText, { color: theme.colors.primary }]}
          >
            Alterar Foto
          </Text>
        </TouchableOpacity>
        <Input
          placeholder="Leonardo Marzeuski"
          keyboardType="default"
          autoCapitalize="none"
          mode="outlined"
          style={styles.input}
        />
        <Input
          placeholder="leomarzeuski@gmail.com"
          keyboardType="email-address"
          autoCapitalize="none"
          mode="outlined"
          disabled={true}
          editable={false}
          style={styles.input}
        />

        <Headline style={styles.sectionTitle}>Alterar senha</Headline>
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <View style={styles.inputContainer}>
              <Input
                mode="outlined"
                placeholder="Senha antiga"
                secureTextEntry
                onChangeText={onChange}
                value={value}
                error={!!errors.password}
                style={styles.input}
                theme={{ colors: { background: theme.colors.footer } }}
              />
              {errors.password && (
                <Text style={styles.errorText}>{errors.password.message}</Text>
              )}
            </View>
          )}
        />
        <Controller
          control={control}
          name="new_password"
          render={({ field: { onChange, value } }) => (
            <View style={styles.inputContainer}>
              <Input
                mode="outlined"
                placeholder="Nova senha"
                placeholderTextColor={"primary"}
                secureTextEntry
                onChangeText={onChange}
                value={value}
                error={!!errors.new_password}
                style={styles.input}
                theme={{ colors: { background: theme.colors.footer } }}
              />
              {errors.new_password && (
                <Text style={styles.errorText}>
                  {errors.new_password.message}
                </Text>
              )}
            </View>
          )}
        />
        {/* <Controller
          control={control}
          name="confirm_new_password"
          render={({ field: { onChange, value } }) => (
            <View style={styles.inputContainer}>
              <Input
                mode="outlined"
                label="Confirme a nova senha"
                secureTextEntry
                onChangeText={onChange}
                value={value}
                error={!!errors.confirm_new_password}
                style={styles.input}
                theme={{ colors: { background: theme.colors.background } }}
              />
              {errors.confirm_new_password && (
                <Text style={styles.errorText}>
                  {errors.confirm_new_password.message}
                </Text>
              )}
            </View>
          )}
        /> */}
        <Button
          mode="contained"
          onPress={handleSubmit(handleNewPassword)}
          style={styles.button}
        >
          Atualizar
        </Button>
      </View>
      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={3000}
      >
        {snackbarMessage}
      </Snackbar>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { paddingBottom: 20 },
  header: {
    backgroundColor: theme.colors.surface,
    paddingTop: 60,
    marginBottom: 20,
    padding: 20,
    alignItems: "center",
  },
  content: {
    paddingHorizontal: 20,
    flexGrow: 1,
    alignItems: "center",
  },
  input: {
    color: theme.colors.text,
    width: "100%",
    marginBottom: 10,
    backgroundColor: theme.colors.footer,
  },
  button: {
    marginTop: 20,
    width: "100%",
  },
  sectionTitle: {
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 10,
    color: theme.colors.text,
  },
  changePhotoText: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 10,
    marginBottom: 20,
  },
  errorText: {
    color: "red",
    alignSelf: "flex-start",
    marginBottom: 10,
  },
  inputContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
});
