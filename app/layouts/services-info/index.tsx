import { useEffect, useState } from "react";
import "./style.css";
import { InputCheckbox } from "~/components/input-checkbox";
import { InputSelect } from "~/components/input-select";
import { Button } from "~/components/button";

const ServicesActives = [
  { value: "noselected", content: "Select a Service" },
  { value: "desing", content: "Desing UX/UI" },
  { value: "develop", content: "Develop" },
  { value: "seo", content: "Marketing & SEO" },
];

export const ServicesInfo = ({
  setServiceDataFunction,
  nextSlideFunction,
}: {
  setServiceDataFunction: React.Dispatch<React.SetStateAction<ServicesData>>;
  nextSlideFunction: () => void;
}) => {
  const [isPriority, setIsPriority] = useState(false);
  const [selectedService, setSelectedService] = useState("noselected");

  useEffect(() => {
    setServiceDataFunction({ priority: isPriority, service: selectedService });
  }, [isPriority, selectedService]);

  return (
    <div className="services-info-wrapper">
      <div className="services-wrapper-inputs">
        <InputSelect
          htmlFor="service"
          id="service"
          label="Service"
          options={ServicesActives}
          setInputState={setSelectedService}
        />

        <InputCheckbox
          htmlFor="prioritary"
          id="prioritary"
          label="Prioritary"
          setInputState={setIsPriority}
        />
      </div>
      <div>
        <Button
          variant="primary"
          content="Submit"
          onClickEvent={nextSlideFunction}
        />
      </div>
    </div>
  );
};
