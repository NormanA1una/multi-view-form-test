import "./style.css";

import { InputText } from "~/components/input-text";
import { useEffect, useState } from "react";
import { Button } from "~/components/button";
import { useSlide } from "~/utils/context/SlideContext";
import { InputEmail } from "~/components/input-email";

export const PersonalInfo = ({
  personalData,
  setPersonalDataFunction,
}: {
  personalData: PersonalData;
  setPersonalDataFunction: React.Dispatch<React.SetStateAction<PersonalData>>;
}) => {
  const [personalName, setName] = useState("");
  const [isValidName, setIsValidName] = useState(false);

  const [personalLastname, setLastname] = useState("");
  const [isValidLastName, setIsValidLastName] = useState(false);

  const [personalEmail, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);

  const { nextSlide } = useSlide();

  useEffect(() => {
    setPersonalDataFunction({
      name: personalName,
      lastname: personalLastname,
      email: personalEmail,
    });
  }, [personalName, personalLastname, personalEmail]);

  return (
    <div className="personal-info-wrapper">
      <div className="personal-wrapper-inputs">
        <InputText
          htmlFor="name"
          id="name"
          label="Name"
          labelClassName="label-name-input"
          minLength={2}
          setIsValid={setIsValidName}
          setInputState={setName}
        />

        <InputText
          htmlFor="lastname"
          id="lastname"
          label="Last Name"
          labelClassName="label-lastname-input"
          minLength={2}
          setIsValid={setIsValidLastName}
          setInputState={setLastname}
        />

        <InputEmail
          htmlFor="email"
          id="email"
          label="Email"
          setIsValid={setIsValidEmail}
          setInputState={setEmail}
        />
      </div>
      <div>
        <Button
          type="button"
          variant="primary"
          content="Continue"
          onClickEvent={nextSlide}
          isDisabled={!(isValidName && isValidLastName && isValidEmail)}
        />
      </div>
    </div>
  );
};
