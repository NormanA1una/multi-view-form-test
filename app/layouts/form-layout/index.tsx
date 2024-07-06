import { Form } from "~/components/form";
import { PersonalInfo } from "../personal-info";
import { CountryInfo } from "../country-info";
import { ServicesInfo } from "../services-info";
import { useEffect, useState } from "react";

export const FormLayout = ({
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

  /* TODO, make onSubmit this */

  return (
    <Form
      formProps={{
        className: "routes-wrapper-ab",
        onSubmit: (e) => e.currentTarget.reset(),
        encType: "multipart/form-data",
        method: "post",
        action: "/",
      }}
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
    </Form>
  );
};
