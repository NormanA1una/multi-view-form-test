import { InputText } from "~/components/input-text";
import "./style.css";
import { useEffect, useState } from "react";

export const PersonalInfo = ({
  setPersonalDataFunction,
}: {
  setPersonalDataFunction: React.Dispatch<React.SetStateAction<PersonalData>>;
}) => {
  const [personalName, setName] = useState("");
  const [personalLastname, setLastname] = useState("");
  const [personalEmail, setEmail] = useState("");

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
          setInputState={setName}
        />
        <InputText
          htmlFor="lastname"
          id="lastname"
          label="Last Name"
          setInputState={setLastname}
        />
        <InputText
          htmlFor="email"
          id="email"
          label="Email"
          setInputState={setEmail}
        />
      </div>
    </div>
  );
};
