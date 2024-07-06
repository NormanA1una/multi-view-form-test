import "./style.css";

import { useSlide } from "~/utils/context/SlideContext";
import { FormLayout } from "../form-layout";

export const SlideComponent = ({
  setAllDataInputs,
}: {
  setAllDataInputs: React.Dispatch<React.SetStateAction<AllData>>;
}) => {
  const { currentIndex } = useSlide();

  return (
    <div className="routes-wrapper">
      <div
        className="routes-wrapper-ab"
        style={{ transform: `translateX(-${currentIndex * 100}vw)` }}
      >
        <FormLayout setAllDataInputs={setAllDataInputs} />
      </div>
    </div>
  );
};
