import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import { SlideComponent } from "~/layouts/slide-component";
import { SlideProvider } from "~/utils/context/SlideContext";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [allDataInputs, setAllDataInputs] = useState<AllData>({
    name: "",
    lastname: "",
    email: "",
    country: "",
    city: "",
    address: "",
    priority: false,
    service: "",
  });

  // console.log(allDataInputs);

  /* 
  TODO:

  1) Make a context, for avoid prop drilling. Wrap the div "routes-wrapper-ab". ✅

  2) Searh if can pass function in the context, if is possible, pass the function nextSlide. ✅

  3) Fix Select bug, need initialize in disable value. ✅

  4) Add more style to the inputs.

  5) Add validations on inputs for pass after push button continues.✅

  EXTRA: if have time, make a screen like "You data is submit succefully! 🎉"
  
  
  */

  return (
    <SlideProvider>
      <SlideComponent setAllDataInputs={setAllDataInputs} />
    </SlideProvider>
  );
}
