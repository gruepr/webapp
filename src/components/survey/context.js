import { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const useData = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const [activeButtons, setActiveButtons] = useState(Array(6).fill(false));
  const [courseInfoData, setCourseInfoData] = useState(/* initial data for Courseinfo */);

  const setButtonActive = (buttonIndex, value) => {
    setActiveButtons((prevActiveButtons) => {
      const updatedButtons = [...prevActiveButtons];
      updatedButtons[buttonIndex] = value;
      return updatedButtons;
    });
  };

  return (
    <DataContext.Provider value={{ activeButtons, setButtonActive, courseInfoData, setCourseInfoData }}>
      {children}
    </DataContext.Provider>
  );
};