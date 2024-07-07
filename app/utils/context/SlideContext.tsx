import { ReactNode, createContext, useContext, useState } from "react";

const SlideContext = createContext<SlideContextType | undefined>(undefined);

export const SlideProvider = ({ children }: { children: ReactNode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isValidName, setIsValidName] = useState(false);
  const [isValidLastName, setIsValidLastName] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidCountry, setIsValidCountry] = useState(false);
  const [isValidCity, setIsValidCity] = useState(false);
  const [isValidAddress, setIsValidAddress] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      return (prevIndex + 1) % 3;
    });
  };

  const resetAllStates = () => {
    setIsValidName(false);
    setIsValidLastName(false);
    setIsValidEmail(false);
    setIsValidCountry(false);
    setIsValidCity(false);
    setIsValidAddress(false);
  };

  return (
    <SlideContext.Provider
      value={{
        currentIndex,
        nextSlide,
        resetAllStates,
        isValidEmail,
        isValidLastName,
        isValidName,
        setIsValidEmail,
        setIsValidLastName,
        setIsValidName,
        isValidAddress,
        isValidCity,
        isValidCountry,
        setIsValidAddress,
        setIsValidCity,
        setIsValidCountry,
      }}
    >
      {children}
    </SlideContext.Provider>
  );
};

export const useSlide = () => {
  const context = useContext(SlideContext);

  if (!context) {
    throw new Error("useSlide must be used within a SlideProvider");
  }
  return context;
};
