import React, { useState } from "react";
import {
  View,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import {
  Text,
  Card,
  IconButton,
  Button,
  Menu,
  Title,
} from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import theme from "src/theme";

export const PharmacyDetails = () => {
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const route = useRoute<any>();
  const { pharmacy } = route.params;

  const [selectedMedication, setSelectedMedication] = useState<string | null>(
    null
  );
  const [menuVisible, setMenuVisible] = useState(false);

  function handleGoBack() {
    navigation.goBack();
  }

  function handleReserve() {
    if (selectedMedication) {
      navigation.navigate("history", { medication: selectedMedication });
    } else {
      alert("Por favor, selecione um medicamento.");
    }
  }

  return (
    <View style={styles.container}>
      <Card style={[styles.header, { backgroundColor: theme.colors.surface }]}>
        <TouchableOpacity onPress={handleGoBack}>
          <IconButton
            icon="arrow-left"
            iconColor={theme.colors.primary}
            size={24}
            onPress={handleGoBack}
          />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>{pharmacy.name}</Text>
          <View style={styles.headerAddress}>
            <MaterialCommunityIcons
              name="hospital-building"
              size={18}
              color={theme.colors.text}
            />
            <Text style={styles.headerAddressText}>{pharmacy.address}</Text>
          </View>
        </View>
      </Card>
      <ScrollView contentContainerStyle={styles.content}>
        <Title style={styles.centeredTitle}>{pharmacy.name}</Title>
        <Image
          source={{
            uri: "https://noticiasdepaulinia.com.br/wp-content/uploads/2024/01/Farmacia-Autos-Custo-de-Paulinia.jpeg",
          }}
          style={styles.image}
          resizeMode="cover"
        />
        <Card
          style={[
            styles.detailsCard,
            { backgroundColor: theme.colors.surface },
          ]}
        >
          <View style={styles.detailsContainer}>
            <View style={styles.detailsItem}>
              <MaterialCommunityIcons
                name="pill"
                size={24}
                color={theme.colors.primary}
              />
              <Text style={styles.detailsText}>Medicamentos</Text>
            </View>
            <View style={styles.detailsItem}>
              <MaterialCommunityIcons
                name="clipboard-text"
                size={24}
                color={theme.colors.primary}
              />
              <Menu
                visible={menuVisible}
                onDismiss={() => setMenuVisible(false)}
                anchor={
                  <Button mode="outlined" onPress={() => setMenuVisible(true)}>
                    {selectedMedication || "Selecione um medicamento"}
                  </Button>
                }
              >
                {pharmacy.medications.map(
                  (medication: string, index: number) => (
                    <Menu.Item
                      key={index}
                      onPress={() => {
                        setSelectedMedication(medication);
                        setMenuVisible(false);
                      }}
                      title={medication}
                    />
                  )
                )}
              </Menu>
            </View>
            <Button
              mode="contained"
              onPress={handleReserve}
              style={styles.button}
            >
              Quero reservar!
            </Button>
          </View>
        </Card>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  headerContent: {
    marginLeft: 16,
    flex: 1,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: theme.colors.text,
  },
  headerAddress: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  headerAddressText: {
    marginLeft: 4,
    color: theme.colors.text,
  },
  content: {
    padding: 16,
  },
  centeredTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 16,
    color: theme.colors.primary,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  detailsCard: {
    padding: 16,
    borderRadius: 8,
  },
  detailsContainer: {
    marginTop: 16,
  },
  detailsItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  detailsText: {
    marginLeft: 8,
    color: theme.colors.text,
  },
  button: {
    marginTop: 16,
  },
});
