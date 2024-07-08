import "./style.css";

import { useEffect, useState } from "react";
import { InputCheckbox } from "~/components/input-checkbox";
import { InputSelect } from "~/components/input-select";
import { Button } from "~/components/button";
import { useSlide } from "~/utils/context/SlideContext";
import { UseFormRegister } from "react-hook-form";

const ServicesActives = [
  { value: "noselected", content: "Select a Service" },
  { value: "desing", content: "Desing UX/UI" },
  { value: "develop", content: "Develop" },
  { value: "seo", content: "Marketing & SEO" },
];

type ServicesInfoProps = {
  enableTab: boolean;
  register: UseFormRegister<AllData>;
};

export const ServicesInfo = ({ register, enableTab }: ServicesInfoProps) => {
  const [selectedService, setSelectedService] = useState("noselected");

  const { nextSlide, enableSubmit } = useSlide();

  return (
    <div className="services-info-wrapper">
      <div className="services-wrapper-inputs">
        <InputSelect
          {...register("service")}
          htmlFor="service"
          enableTab={enableTab}
          id="service"
          label="Service"
          options={ServicesActives}
          value={selectedService}
          setInputState={setSelectedService}
        />

        <InputCheckbox
          {...register("priority")}
          enableTab={enableTab}
          htmlFor="prioritary"
          id="prioritary"
          label="Prioritary"
        />
      </div>
      <div>
        <Button
          tabIndex={-1}
          type="submit"
          variant="primary"
          content="Submit"
          isDisabled={!enableSubmit}
          onClickEvent={nextSlide}
        />
      </div>
    </div>
  );
};
