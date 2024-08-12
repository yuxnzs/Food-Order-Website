import { createContext, useContext } from "react";
import APIService from "./APIService";

// Create a context that holds an instance of APIService or null by default
const APIContext = createContext<APIService | null>(null);

// Custom hook to access the API service; ensures it's used within an APIProvider
export const useAPI = () => {
  const context = useContext(APIContext);

  // Throws an error if the context is not wrapped by APIProvider
  if (!context) {
    throw new Error("useAPI must be used within an APIProvider");
  }

  return context;
};

// Component that provides the APIContext to the children
export const APIProvider = ({ children }: { children: React.ReactNode }) => {
  const apiService = new APIService();

  // Provide the APIContext to the children
  return (
    <APIContext.Provider value={apiService}>{children}</APIContext.Provider>
  );
};
