import { HomeHeader } from "@components/HomeHeader";
import React, { useState } from "react";
import {
  FlatList,
  Keyboard,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Button, Card, Headline, Menu, Paragraph } from "react-native-paper";
import theme from "../theme";
import { useNavigation } from "@react-navigation/native";
import { PharmacyCard } from "@components/PharmacyCard";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

export function Home() {
  const [pharmacies, setPharmacies] = useState([
    {
      id: 1,
      name: "Farmacia 1",
      address: "Avenida Sorocaba",
      medications: ["isotretinoina", "paracetamol", "ibuprofeno"],
    },
    {
      id: 2,
      name: "Farmacia 2",
      address: "Rua das Flores",
      medications: ["amoxicilina", "omeprazol", "simeticona"],
    },
    {
      id: 3,
      name: "Farmacia 3",
      address: "Praça Central",
      medications: ["dipirona", "cetirizina", "loratadina"],
    },
    {
      id: 4,
      name: "Farmacia 4",
      address: "Rua Nova",
      medications: ["metformina", "losartana", "atenolol"],
    },
    {
      id: 5,
      name: "Farmacia 5",
      address: "Avenida Paulista",
      medications: ["fluoxetina", "prednisona", "dexametasona"],
    },
    {
      id: 6,
      name: "Farmacia 6",
      address: "Rua XV de Novembro",
      medications: ["bromoprida", "hidroxicloroquina", "azitromicina"],
    },
    {
      id: 7,
      name: "Farmacia 7",
      address: "Avenida Brasil",
      medications: ["ivermectina", "cloroquina", "atorvastatina"],
    },
    {
      id: 8,
      name: "Farmacia 8",
      address: "Rua das Palmeiras",
      medications: ["rosuvastatina", "sinvastatina", "ciprofloxacino"],
    },
    {
      id: 9,
      name: "Farmacia 9",
      address: "Praça da Sé",
      medications: ["norfloxacino", "aas", "sulfametoxazol_trim"],
    },
    {
      id: 10,
      name: "Farmacia 10",
      address: "Avenida Independência",
      medications: ["sertralina", "clonazepam", "diazepam"],
    },
    {
      id: 11,
      name: "Farmacia 11",
      address: "Rua das Acácias",
      medications: ["lorazepam", "hidroclorotiazida", "furosemida"],
    },
    {
      id: 12,
      name: "Farmacia 12",
      address: "Avenida Central",
      medications: ["espironolactona", "metoclopramida", "enalapril"],
    },
    {
      id: 13,
      name: "Farmacia 13",
      address: "Rua do Comércio",
      medications: ["ramipril", "valsartana", "amlodipino"],
    },
    {
      id: 14,
      name: "Farmacia 14",
      address: "Avenida Getúlio Vargas",
      medications: ["nifedipino", "dipirona", "omeprazol"],
    },
    {
      id: 15,
      name: "Farmacia 15",
      address: "Rua 7 de Setembro",
      medications: ["simeticona", "paracetamol", "ibuprofeno"],
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
      <ScrollView>
        <View style={styles.container}>
          <HomeHeader />
          <View style={styles.content}>
            <Headline style={styles.headline}>
              Informe o medicamento desejado
            </Headline>
            <Menu
              visible={showDropdown}
              onDismiss={() => setShowDropdown(false)}
              anchor={
                <Button
                  mode="outlined"
                  onPress={() => setShowDropdown(true)}
                  style={styles.selectButton}
                >
                  {selectedValue || "Selecione um medicamento"}
                </Button>
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
      </ScrollView>
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
  selectButton: {
    marginBottom: 16,
  },
  searchButton: {
    marginBottom: 16,
  },
  card: {
    marginBottom: 8,
  },
  listContent: {
    paddingBottom: 20,
  },
});
