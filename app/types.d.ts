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

type AllData = PersonalData & CountryData & ServicesData;
