import "./style.css";

import { InputText } from "~/components/input-text";
import { Button } from "~/components/button";
import { useSlide } from "~/utils/context/SlideContext";
import { InputEmail } from "~/components/input-email";
import { UseFormRegister } from "react-hook-form";

type PersonalInfoProps = {
  enableTab: boolean;
  dataSubmited: AllData;
  isSubmited: boolean;
  setIsSubmited: React.Dispatch<React.SetStateAction<boolean>>;
  enableNextTab: React.Dispatch<React.SetStateAction<boolean>>;
  register: UseFormRegister<AllData>;
};

export const PersonalInfo = ({
  register,
  enableTab,
  enableNextTab,
  dataSubmited,
  isSubmited,
  setIsSubmited,
}: PersonalInfoProps) => {
  const {
    nextSlide,
    isValidName,
    setIsValidName,
    isValidLastName,
    setIsValidLastName,
    isValidEmail,
    setIsValidEmail,
  } = useSlide();

  const handleOnClick = () => {
    setIsSubmited(false);
    enableNextTab(true);
    nextSlide();
  };

  return (
    <div className="personal-info-wrapper">
      <div className="personal-text-wrapper">
        <div className="text-data-submited">
          {isSubmited && (
            <>
              <h1 className="title-data-submited">The data you sent was:</h1>

              <div className="spacing-texts-data">
                <div>
                  <h2 className="label-h2">Name:</h2>
                  <h3 className="label-h3">{dataSubmited.name}</h3>
                </div>

                <div>
                  <h2 className="label-h2">Last Name:</h2>
                  <h3 className="label-h3">{dataSubmited.lastname}</h3>
                </div>

                <div>
                  <h2 className="label-h2">Email:</h2>
                  <h3 className="label-h3">{dataSubmited.email}</h3>
                </div>

                <div>
                  <h2 className="label-h2">Country:</h2>
                  <h3 className="label-h3">{dataSubmited.country}</h3>
                </div>

                <div>
                  <h2 className="label-h2">City:</h2>
                  <h3 className="label-h3">{dataSubmited.city}</h3>
                </div>

                <div className="break-words">
                  <h2 className="label-h2">Address:</h2>
                  <h3 className="label-h3">{dataSubmited.address}</h3>
                </div>

                <div>
                  <h2 className="label-h2">Service:</h2>
                  <h3 className="label-h3">{dataSubmited.service}</h3>
                </div>

                <div>
                  <h2 className="label-h2">Priority:</h2>
                  <h3 className="label-h3">
                    {dataSubmited.priority ? "Yes" : "No"}
                  </h3>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="personal-spacing-button">
          <div className="personal-wrapper-inputs">
            <InputText
              {...register("name")}
              htmlFor="name"
              id="name"
              label="Name"
              labelClassName="label-name-input"
              minLength={2}
              enableTab={enableTab}
              setIsValid={setIsValidName}
            />

            <InputText
              {...register("lastname")}
              htmlFor="lastname"
              id="lastname"
              label="Last Name"
              labelClassName="label-lastname-input"
              minLength={2}
              enableTab={enableTab}
              setIsValid={setIsValidLastName}
            />

            <InputEmail
              {...register("email")}
              htmlFor="email"
              id="email"
              label="Email"
              enableTab={enableTab}
              setIsValid={setIsValidEmail}
            />
          </div>
          <div>
            <Button
              type="button"
              variant="primary"
              content="Continue"
              onClickEvent={handleOnClick}
              isDisabled={!(isValidName && isValidLastName && isValidEmail)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
