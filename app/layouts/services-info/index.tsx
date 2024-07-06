import "./style.css";

import { useEffect, useState } from "react";
import { InputCheckbox } from "~/components/input-checkbox";
import { InputSelect } from "~/components/input-select";
import { Button } from "~/components/button";
import { useSlide } from "~/utils/context/SlideContext";

const ServicesActives = [
  { value: "noselected", content: "Select a Service" },
  { value: "desing", content: "Desing UX/UI" },
  { value: "develop", content: "Develop" },
  { value: "seo", content: "Marketing & SEO" },
];

export const ServicesInfo = ({
  setServiceDataFunction,
}: {
  setServiceDataFunction: React.Dispatch<React.SetStateAction<ServicesData>>;
}) => {
  const [isPriority, setIsPriority] = useState(false);
  const [selectedService, setSelectedService] = useState("noselected");

  const { nextSlide } = useSlide();

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
          value={selectedService}
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
          type="submit"
          variant="primary"
          content="Submit"
          onClickEvent={nextSlide}
        />
      </div>
    </div>
  );
};
