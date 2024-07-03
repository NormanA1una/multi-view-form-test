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

  // console.log(allDataInputs);

  return (
    <div className="flex w-fit">
      <PersonalInfo setPersonalDataFunction={setPersonalData} />
      <CountryInfo setCountryDataFunction={setCountryData} />
      <ServicesInfo setServiceDataFunction={setServiceData} />
    </div>
  );
}
