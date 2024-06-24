import { HomeHeader } from "@components/HomeHeader";
import React, { useState } from "react";
import {
  FlatList,
  Keyboard,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import {
  Button,
  Card,
  Headline,
  Menu,
  Paragraph,
  Text,
} from "react-native-paper";
import theme from "../theme";
import { useNavigation } from "@react-navigation/native";
import { PharmacyCard } from "@components/PharmacyCard";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export function Home() {
  const [pharmacies, setPharmacies] = useState([
    {
      id: 1,
      name: "Farmacia 1",
      address: "Avenida Sorocaba",
      medications: ["isotretinoina", "paracetamol", "ibuprofeno"],
      latitude: -23.501,
      longitude: -46.8489,
    },
    {
      id: 2,
      name: "Farmacia 2",
      address: "Rua das Flores",
      medications: ["amoxicilina", "omeprazol", "simeticona"],
      latitude: -23.5489,
      longitude: -46.6388,
    },
    {
      id: 3,
      name: "Farmacia 3",
      address: "Praça Central",
      medications: ["dipirona", "cetirizina", "loratadina"],
      latitude: -23.5505,
      longitude: -46.6333,
    },
    {
      id: 4,
      name: "Farmacia 4",
      address: "Rua Nova",
      medications: ["metformina", "losartana", "atenolol"],
      latitude: -23.5525,
      longitude: -46.6357,
    },
    {
      id: 5,
      name: "Farmacia 5",
      address: "Avenida Paulista",
      medications: ["fluoxetina", "prednisona", "dexametasona"],
      latitude: -23.5617,
      longitude: -46.6553,
    },
    {
      id: 6,
      name: "Farmacia 6",
      address: "Rua XV de Novembro",
      medications: ["bromoprida", "hidroxicloroquina", "azitromicina"],
      latitude: -23.5451,
      longitude: -46.6339,
    },
    {
      id: 7,
      name: "Farmacia 7",
      address: "Avenida Brasil",
      medications: ["ivermectina", "cloroquina", "atorvastatina"],
      latitude: -23.5733,
      longitude: -46.641,
    },
    {
      id: 8,
      name: "Farmacia 8",
      address: "Rua das Palmeiras",
      medications: ["rosuvastatina", "sinvastatina", "ciprofloxacino"],
      latitude: -23.5475,
      longitude: -46.6491,
    },
    {
      id: 9,
      name: "Farmacia 9",
      address: "Praça da Sé",
      medications: ["norfloxacino", "aas", "sulfametoxazol_trim"],
      latitude: -23.5502,
      longitude: -46.6333,
    },
    {
      id: 10,
      name: "Farmacia 10",
      address: "Avenida Independência",
      medications: ["sertralina", "clonazepam", "diazepam"],
      latitude: -23.5673,
      longitude: -46.6467,
    },
    {
      id: 11,
      name: "Farmacia 11",
      address: "Rua das Acácias",
      medications: ["lorazepam", "hidroclorotiazida", "furosemida"],
      latitude: -23.5639,
      longitude: -46.6351,
    },
    {
      id: 12,
      name: "Farmacia 12",
      address: "Avenida Central",
      medications: ["espironolactona", "metoclopramida", "enalapril"],
      latitude: -23.5675,
      longitude: -46.638,
    },
    {
      id: 13,
      name: "Farmacia 13",
      address: "Rua do Comércio",
      medications: ["ramipril", "valsartana", "amlodipino"],
      latitude: -23.5426,
      longitude: -46.6341,
    },
    {
      id: 14,
      name: "Farmacia 14",
      address: "Avenida Getúlio Vargas",
      medications: ["nifedipino", "dipirona", "omeprazol"],
      latitude: -23.562,
      longitude: -46.651,
    },
    {
      id: 15,
      name: "Farmacia 15",
      address: "Rua 7 de Setembro",
      medications: ["simeticona", "paracetamol", "ibuprofeno"],
      latitude: -23.5507,
      longitude: -46.6359,
    },
  ]);

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const items = [
    { label: "Outro medicamento", value: "outro" },
    { label: "Isotretinoína", value: "isotretinoina" },
    { label: "Paracetamol", value: "paracetamol" },
    { label: "Ibuprofeno", value: "ibuprofeno" },
    { label: "Amoxicilina", value: "amoxicilina" },
    { label: "Omeprazol", value: "omeprazol" },
    { label: "Simeticona", value: "simeticona" },
    { label: "Dipirona", value: "dipirona" },
    { label: "Cetirizina", value: "cetirizina" },
    { label: "Loratadina", value: "loratadina" },
    { label: "Metformina", value: "metformina" },
    { label: "Losartana", value: "losartana" },
    { label: "Atenolol", value: "atenolol" },
    { label: "Cloridrato de Fluoxetina", value: "fluoxetina" },
    { label: "Prednisona", value: "prednisona" },
    { label: "Dexametasona", value: "dexametasona" },
    { label: "Bromoprida", value: "bromoprida" },
    { label: "Hidroxicloroquina", value: "hidroxicloroquina" },
    { label: "Azitromicina", value: "azitromicina" },
    { label: "Ivermectina", value: "ivermectina" },
    { label: "Cloroquina", value: "cloroquina" },
    { label: "Atorvastatina", value: "atorvastatina" },
    { label: "Rosuvastatina", value: "rosuvastatina" },
    { label: "Sinvastatina", value: "sinvastatina" },
    { label: "Cloridrato de Ciprofloxacino", value: "ciprofloxacino" },
    { label: "Cloridrato de Norfloxacino", value: "norfloxacino" },
    { label: "AAS (Ácido Acetilsalicílico)", value: "aas" },
    { label: "Sulfametoxazol + Trimetoprima", value: "sulfametoxazol_trim" },
    { label: "Cloridrato de Sertralina", value: "sertralina" },
    { label: "Clonazepam", value: "clonazepam" },
    { label: "Diazepam", value: "diazepam" },
    { label: "Lorazepam", value: "lorazepam" },
    { label: "Hidroclorotiazida", value: "hidroclorotiazida" },
    { label: "Furosemida", value: "furosemida" },
    { label: "Espironolactona", value: "espironolactona" },
    { label: "Cloridrato de Metoclopramida", value: "metoclopramida" },
    { label: "Enalapril", value: "enalapril" },
    { label: "Ramipril", value: "ramipril" },
    { label: "Valsartana", value: "valsartana" },
    { label: "Amlodipino", value: "amlodipino" },
    { label: "Nifedipino", value: "nifedipino" },
  ];

  const [selectedValue, setSelectedValue] = useState<string>("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredPharmacies, setFilteredPharmacies] = useState(pharmacies);

  const handleOpenExerciseDetails = (pharmacy: any) => {
    navigation.navigate("pharmacy", { pharmacy });
  };

  const handleSearch = () => {
    if (selectedValue) {
      const filtered = pharmacies.filter((pharmacy) =>
        pharmacy.medications.includes(selectedValue)
      );
      setFilteredPharmacies(filtered);
    } else {
      setFilteredPharmacies(pharmacies);
    }
  };

  const handleOutsidePress = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handleOutsidePress}>
      <View style={{ flex: 1, flexGrow: 1 }}>
        <View style={styles.container}>
          <HomeHeader />
          <View style={styles.content}>
            <Headline style={styles.headline}>
              Informe o medicamento desejado
            </Headline>
            <View style={styles.selectContainer}>
              <Menu
                visible={showDropdown}
                onDismiss={() => setShowDropdown(false)}
                anchor={
                  <TouchableOpacity
                    style={styles.selectInput}
                    onPress={() => setShowDropdown(true)}
                  >
                    <Text>{selectedValue || "Selecione um medicamento"}</Text>
                    <MaterialCommunityIcons
                      name="chevron-down"
                      size={24}
                      color="black"
                    />
                  </TouchableOpacity>
                }
              >
                {items.map((item) => (
                  <Menu.Item
                    key={item.value}
                    onPress={() => {
                      setSelectedValue(item.value);
                      setShowDropdown(false);
                    }}
                    title={item.label}
                  />
                ))}
              </Menu>
            </View>
            <Button
              mode="contained"
              onPress={handleSearch}
              style={styles.searchButton}
            >
              Pesquisar
            </Button>
            <FlatList
              data={filteredPharmacies}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <PharmacyCard
                  title={item.name}
                  status={`Endereço: ${item.address}`}
                  action={`Medicamentos: ${item.medications.join(", ")}`}
                  onPress={() => handleOpenExerciseDetails(item)}
                />
              )}
              contentContainerStyle={styles.listContent}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  headline: {
    color: theme.colors.text,
    fontSize: 18,
    marginBottom: 8,
  },
  selectContainer: {
    position: "relative",
    marginBottom: 16,
  },
  selectInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    paddingHorizontal: 12,
    paddingVertical: 14,
  },
  selectText: {
    flex: 1,
    color: theme.colors.text,
  },
  selectIcon: {
    marginLeft: 8,
  },
  searchButton: {
    marginBottom: 16,
  },
  listContent: {
    paddingBottom: 350,
  },
  loadingText: {
    textAlign: "center",
    padding: 16,
    color: theme.colors.text,
  },
});
