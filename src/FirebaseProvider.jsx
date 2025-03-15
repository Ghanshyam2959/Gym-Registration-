import React, {createContext, useContext} from 'react';
import app from './enviroment';
const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

const FirebaseProvider = ({ children}) => {
  return (
    <FirebaseContext.Provider value={app}>
        {children}
        </FirebaseContext.Provider>
  )
}

export default FirebaseProvider
