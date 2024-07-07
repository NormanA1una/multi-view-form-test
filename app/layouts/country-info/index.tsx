import "./style.css";

import { InputText } from "~/components/input-text";
import { useEffect, useState } from "react";
import { Button } from "~/components/button";
import { useSlide } from "~/utils/context/SlideContext";
import { UseFormRegister } from "react-hook-form";

type CountryInfoProps = {
  enableTab: boolean;
  enableNextTab: React.Dispatch<React.SetStateAction<boolean>>;
  register: UseFormRegister<AllData>;
};

export const CountryInfo = ({
  register,
  enableNextTab,
  enableTab,
}: CountryInfoProps) => {
  const {
    nextSlide,
    isValidCountry,
    isValidCity,
    isValidAddress,
    setIsValidCountry,
    setIsValidCity,
    setIsValidAddress,
  } = useSlide();

  const handleOnClick = () => {
    enableNextTab(true);
    nextSlide();
  };

  return (
    <div className="country-info-wrapper">
      <div className="country-wrapper-inputs">
        <InputText
          {...register("country")}
          htmlFor="country"
          id="country"
          label="Country"
          minLength={3}
          enableTab={enableTab}
          setIsValid={setIsValidCountry}
        />
        <InputText
          {...register("city")}
          htmlFor="city"
          id="city"
          label="City"
          minLength={3}
          enableTab={enableTab}
          setIsValid={setIsValidCity}
        />
        <InputText
          {...register("address")}
          htmlFor="address"
          id="address"
          label="Address"
          minLength={30}
          enableTab={enableTab}
          setIsValid={setIsValidAddress}
        />
      </div>
      <div>
        <Button
          type="button"
          variant="primary"
          content="Continue"
          onClickEvent={handleOnClick}
          isDisabled={!(isValidCountry && isValidCity && isValidAddress)}
        />
      </div>
    </div>
  );
};
