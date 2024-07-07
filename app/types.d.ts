type AllData = PersonalData & CountryData & ServicesData;

type PersonalData = {
  name: string;
  lastname: string;
  email: string;
};

type CountryData = {
  country: string;
  city: string;
  address: string;
};

type ServicesData = {
  priority: boolean;
  service: string;
};

type SlideContextType = {
  currentIndex: number;
  nextSlide: () => void;
  resetAllStates: () => void;
  isValidName: boolean;
  setIsValidName: React.Dispatch<React.SetStateAction<boolean>>;
  isValidLastName: boolean;
  setIsValidLastName: React.Dispatch<React.SetStateAction<boolean>>;
  isValidEmail: boolean;
  setIsValidEmail: React.Dispatch<React.SetStateAction<boolean>>;
  isValidCountry: boolean;
  setIsValidCountry: React.Dispatch<React.SetStateAction<boolean>>;
  isValidCity: boolean;
  setIsValidCity: React.Dispatch<React.SetStateAction<boolean>>;
  isValidAddress: boolean;
  setIsValidAddress: React.Dispatch<React.SetStateAction<boolean>>;
};
