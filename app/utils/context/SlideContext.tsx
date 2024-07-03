import { ReactNode, createContext, useContext, useState } from "react";

const SlideContext = createContext<SlideContextType | undefined>(undefined);

export const SlideProvider = ({ children }: { children: ReactNode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [resetInputText, setResetInputText] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      return (prevIndex + 1) % 3;
    });
  };

  return (
    <SlideContext.Provider value={{ currentIndex, nextSlide }}>
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
