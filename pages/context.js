import { createContext, useContext } from 'react';

const AppContext = createContext();

export function Context({ children }) {
  let applicationState = {/* whatever you want */}

  return (
    <AppContext.Provider value={applicationState}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}