import { createContext, useContext, useState } from "react";
import { Snackbar } from "react-native-paper";

export type SnackbarType = {
  showSnackbar: (message: string) => void;
};

export const SnackbarContext = createContext<SnackbarType>({} as SnackbarType);

type SnackbarProviderProps = {
  children: React.ReactNode;
};

export const SnackbarProvider = ({ children }: SnackbarProviderProps) => {
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  const showSnackbar = (message: string) => {
    setMessage(message);
    setOpen(true);
  };

  const onDismissSnackBar = () => setOpen(false);

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      <Snackbar visible={true} onDismiss={onDismissSnackBar}>
        {message}
      </Snackbar>
      {children}
    </SnackbarContext.Provider>
  );
};

// hook
export const useSnackbar = () => {
  const context = useContext(SnackbarContext);

  return context;
};
