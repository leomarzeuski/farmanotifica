import React, { useState } from "react";
import { View, SectionList, StyleSheet, Platform } from "react-native";
import {
  Text,
  Card,
  Button,
  Title,
  Modal,
  Portal,
  Paragraph,
  Provider as PaperProvider,
} from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";
import { HistoryCard } from "@components/HistoryCard";
import { ScreenHeader } from "@components/ScreenHeader";
import theme from "src/theme";
import DateTimePickerModal from "react-native-modal-datetime-picker";

export const History = () => {
  const [medications, setMedications] = useState([
    {
      title: "27.08.24",
      data: [
        {
          id: 1,
          title: "Envie seu laudo",
          status: "Enviar",
          action: "Enviar >",
        },
        {
          id: 2,
          title: "Reserve sua Entrega",
          status: "Agendar",
          action: "Agendar >",
        },
        {
          id: 3,
          title: "Laudo não aprovado!",
          status: "Reenviar",
          action: "< Reenviar",
        },
        { id: 4, title: "Em análise...", status: "Em análise", action: " " },
      ],
    },
    {
      title: "26.08.24",
      data: [
        {
          id: 5,
          title: "Envie seu laudo",
          status: "Enviar",
          action: "Enviar >",
        },
      ],
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState("");
  const [selectedDate, setSelectedDate] = useState<any>(null);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [appointments, setAppointments] = useState<any[]>([]);
  const [showAppointments, setShowAppointments] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker1 = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: any) => {
    setShowConfirmationModal(true);
    setSelectedDate(date);
    hideDatePicker();
  };

  const handleCardPress = (item: any) => {
    setSelectedItem(item);
    if (item.status === "Enviar" || item.status === "Reenviar") {
      setSelectedFileName("nome do arquivo");
      setShowModal(true);
    } else if (item.status === "Agendar") {
      Platform.OS === "ios"
        ? setDatePickerVisibility(true)
        : setShowDatePicker(true);
    }
  };

  const onDismiss = () => {
    setShowDatePicker(false);
  };

  const onConfirm = (event: any, date?: Date) => {
    setShowDatePicker(false);
    if (date) {
      setSelectedDate(date);
      setShowConfirmationModal(true);
    }
  };

  const handleLoadDocument = () => {
    const updatedMedications = medications.map((section) => {
      const updatedData = section.data.map((item) => {
        if (item.id === selectedItem.id) {
          return {
            ...item,
            title: "Em análise",
            status: "Em análise",
            action: "",
          };
        }
        return item;
      });
      return { ...section, data: updatedData };
    });
    setMedications(updatedMedications);
    setShowModal(false);
  };

  const handleAcceptTerms = () => {
    const updatedMedications = medications.map((section) => {
      const updatedData = section.data.filter(
        (item) => item.id !== selectedItem.id
      );
      return { ...section, data: updatedData };
    });

    const newAppointment = {
      ...selectedItem,
      title: `Agendado para ${new Date(selectedDate).toLocaleDateString()}`,
      status: "Expira em 3 dias...",
      date: selectedDate,
      action: "Agendado",
    };

    setAppointments([...appointments, newAppointment]);
    setMedications(updatedMedications);
    setShowConfirmationModal(false);
  };

  return (
    <PaperProvider theme={theme}>
      <ScreenHeader title="Histórico de Medicamentos" />
      <View style={styles.container}>
        {showAppointments ? (
          <>
            <SectionList
              sections={[{ title: "Agendamentos", data: appointments }]}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <HistoryCard
                  title={item.title}
                  status={item.status}
                  action={item.action}
                />
              )}
              renderSectionHeader={({ section }) => (
                <Title style={styles.sectionHeader}>{section.title}</Title>
              )}
            />
            <Button
              mode="contained"
              onPress={() => setShowAppointments(false)}
              style={styles.button}
            >
              Voltar
            </Button>
          </>
        ) : (
          <>
            <SectionList
              sections={medications}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <HistoryCard
                  title={item.title}
                  status={item.status}
                  action={item.action}
                  onPress={() => handleCardPress(item)}
                />
              )}
              renderSectionHeader={({ section }) => (
                <Title style={styles.sectionHeader}>{section.title}</Title>
              )}
              contentContainerStyle={
                medications.length === 0 && {
                  flex: 1,
                  justifyContent: "center",
                }
              }
              ListEmptyComponent={() => (
                <Paragraph style={styles.emptyText}>
                  Não há registros de medicamentos ainda. {"\n"}
                  Vamos adicionar alguns?
                </Paragraph>
              )}
            />
            {appointments.length > 0 && (
              <Button
                mode="contained"
                onPress={() => setShowAppointments(true)}
                style={styles.button}
              >
                Visualizar Agendamentos
              </Button>
            )}
          </>
        )}

        <Portal>
          <Modal visible={showModal} onDismiss={() => setShowModal(false)}>
            <Card style={styles.modalCard}>
              <Card.Title title="Atenção!" />
              <Card.Content>
                <Paragraph>Carregue seu laudo médico:</Paragraph>
                <Paragraph>Arquivo - {selectedFileName}</Paragraph>
              </Card.Content>
              <Card.Actions style={styles.modalActions}>
                <Button mode="contained" onPress={handleLoadDocument}>
                  Carregar Laudo
                </Button>
                <Button mode="outlined" onPress={() => setShowModal(false)}>
                  Voltar
                </Button>
              </Card.Actions>
            </Card>
          </Modal>

          {showDatePicker &&
            (Platform.OS === "ios" ? (
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />
            ) : (
              <DateTimePicker
                value={selectedDate || new Date()}
                mode="date"
                display={"default"}
                onChange={onConfirm}
              />
            ))}

          <Modal
            visible={showConfirmationModal}
            onDismiss={() => setShowConfirmationModal(false)}
          >
            <Card style={styles.modalCard}>
              <Card.Title title="Atenção!" />
              <Card.Content>
                <Paragraph>
                  Após agendar a data de retirada do produto, você possui um
                  prazo de três dias úteis para realizá-la.
                </Paragraph>
                <Paragraph>
                  Caso não retire o produto dentro deste período, perderá o
                  direito ao mesmo!
                </Paragraph>
              </Card.Content>
              <Card.Actions style={styles.modalActions}>
                <Button mode="contained" onPress={handleAcceptTerms}>
                  Aceito os termos
                </Button>
                <Button
                  mode="outlined"
                  onPress={() => setShowConfirmationModal(false)}
                >
                  Voltar
                </Button>
              </Card.Actions>
            </Card>
          </Modal>
        </Portal>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: theme.colors.background,
  },
  sectionHeader: {
    color: theme.colors.background,
    fontSize: 16,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  button: {
    margin: 16,
  },
  emptyText: {
    color: theme.colors.text,
    textAlign: "center",
    margin: 16,
  },
  modalCard: {
    margin: 16,
    padding: 16,
  },
  modalActions: {
    justifyContent: "space-between",
  },
});
