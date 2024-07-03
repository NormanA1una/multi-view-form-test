import "./style.css";

import { useEffect, useState } from "react";
import { CountryInfo } from "../country-info";
import { PersonalInfo } from "../personal-info";
import { ServicesInfo } from "../services-info";
import { useSlide } from "~/utils/context/SlideContext";

export const SlideComponent = ({
  setAllDataInputs,
}: {
  setAllDataInputs: React.Dispatch<React.SetStateAction<AllData>>;
}) => {
  const [personalData, setPersonalData] = useState<PersonalData>({
    name: "",
    lastname: "",
    email: "",
  });

  const [countryData, setCountryData] = useState<CountryData>({
    country: "",
    city: "",
    address: "",
  });

  const [serviceData, setServiceData] = useState<ServicesData>({
    priority: false,
    service: "",
  });

  const { currentIndex } = useSlide();

  useEffect(() => {
    setAllDataInputs({
      name: personalData.name,
      lastname: personalData.lastname,
      email: personalData.email,
      country: countryData.country,
      city: countryData.city,
      address: countryData.address,
      priority: serviceData.priority,
      service: serviceData.service,
    });
  }, [personalData, countryData, serviceData]);

  return (
    <div className="routes-wrapper">
      <div
        className="routes-wrapper-ab"
        style={{ transform: `translateX(-${currentIndex * 100}vw)` }}
      >
        <PersonalInfo
          personalData={personalData}
          setPersonalDataFunction={setPersonalData}
        />
        <CountryInfo
          countryData={countryData}
          setCountryDataFunction={setCountryData}
        />
        <ServicesInfo setServiceDataFunction={setServiceData} />
      </div>
    </div>
  );
};
