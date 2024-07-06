import "./style.css";

import { InputText } from "~/components/input-text";
import { useEffect, useState } from "react";
import { Button } from "~/components/button";
import { useSlide } from "~/utils/context/SlideContext";

export const CountryInfo = ({
  countryData,
  setCountryDataFunction,
}: {
  countryData: CountryData;
  setCountryDataFunction: React.Dispatch<React.SetStateAction<CountryData>>;
}) => {
  const [personalCountry, setCountry] = useState("");
  const [isValidCountry, setIsValidCountry] = useState(false);

  const [personalCity, setCity] = useState("");
  const [isValidCity, setIsValidCity] = useState(false);

  const [personalAddress, setAddress] = useState("");
  const [isValidAddress, setIsValidAddress] = useState(false);

  const { nextSlide } = useSlide();

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
          minLength={3}
          setIsValid={setIsValidCountry}
          setInputState={setCountry}
        />
        <InputText
          htmlFor="city"
          id="city"
          label="City"
          minLength={3}
          setIsValid={setIsValidCity}
          setInputState={setCity}
        />
        <InputText
          htmlFor="address"
          id="address"
          label="Address"
          minLength={30}
          setIsValid={setIsValidAddress}
          setInputState={setAddress}
        />
      </div>
      <div>
        <Button
          type="button"
          variant="primary"
          content="Continue"
          onClickEvent={nextSlide}
          isDisabled={!(isValidCountry && isValidCity && isValidAddress)}
        />
      </div>
    </div>
  );
};
