import { InputText } from "~/components/input-text";
import "./style.css";
import { useEffect, useState } from "react";
import { Button } from "~/components/button";

export const CountryInfo = ({
  setCountryDataFunction,
  nextSlideFunction,
}: {
  setCountryDataFunction: React.Dispatch<React.SetStateAction<CountryData>>;
  nextSlideFunction: () => void;
}) => {
  const [personalCountry, setCountry] = useState("");
  const [personalCity, setCity] = useState("");
  const [personalAddress, setAddress] = useState("");

  useEffect(() => {
    setCountryDataFunction({
      country: personalCountry,
      city: personalCity,
      address: personalAddress,
    });
  }, [personalCountry, personalCity, personalAddress]);

  return (
    <div className="country-info-wrapper">
      <div className="country-wrapper-inputs">
        <InputText
          htmlFor="country"
          id="country"
          label="Country"
          setInputState={setCountry}
        />
        <InputText
          htmlFor="city"
          id="city"
          label="City"
          setInputState={setCity}
        />
        <InputText
          htmlFor="address"
          id="address"
          label="Address"
          setInputState={setAddress}
        />
      </div>
      <div>
        <Button
          variant="primary"
          content="Continue"
          onClickEvent={nextSlideFunction}
        />
      </div>
    </div>
  );
};
