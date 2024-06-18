// src/contexts/AuthContext.tsx
import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";

export interface User {
  id: string;
  name: string;
  email: string;
}

export type AuthContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
  isLoading: boolean;
  signIn: (email: string, password: string) => void;
  signOut: () => void;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const signOut = () => {
    setUser(null);
  };

  const signIn = (email: string, password: string) => {
    setIsLoading(true);
    if (email === "leo@email.com") {
      setUser({
        id: "1",
        name: "Leonardo",
        email: "leo@email.com",
      });
    }
    setIsLoading(false);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, isLoading, signOut, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

// hook
export const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};
