import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import { CountryInfo } from "~/layouts/country-info";
import { PersonalInfo } from "~/layouts/personal-info";
import { ServicesInfo } from "~/layouts/services-info";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const [allDataInputs, setAllDataInputs] = useState<AllData>({
    name: "",
    lastname: "",
    email: "",
    country: "",
    city: "",
    address: "",
    priority: false,
    service: "",
  });

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

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  // console.log(allDataInputs);

  /* 
  TODO:

  1) Make a context, for avoid prop drilling. Wrap the div "routes-wrapper-ab".

  2) Searh if can pass function in the context, if is possible, pass the function nextSlide.

  3) Fix Select bug, need initialize in disable value.

  4) Add more style to the inputs.

  extra: if have time, make a screen like "You data is submit succefully! 🎉"
  
  
  */

  return (
    <div className="routes-wrapper">
      <div
        className="routes-wrapper-ab"
        style={{ transform: `translateX(-${currentIndex * 100}vw)` }}
      >
        <PersonalInfo
          setPersonalDataFunction={setPersonalData}
          nextSlideFunction={nextSlide}
        />
        <CountryInfo
          setCountryDataFunction={setCountryData}
          nextSlideFunction={nextSlide}
        />
        <ServicesInfo
          setServiceDataFunction={setServiceData}
          nextSlideFunction={nextSlide}
        />
      </div>
    </div>
  );
}
