import { PersonalInfo } from "../personal-info";
import { CountryInfo } from "../country-info";
import { ServicesInfo } from "../services-info";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { dataSchema } from "~/utils/lib/shemas";
import { useRemixFetcher } from "~/hooks/use-remix-fetcher";
import { useState } from "react";
import { useSlide } from "~/utils/context/SlideContext";

export const FormLayout = () => {
  const [dataSubmited, setDataSubmited] = useState<AllData>({
    name: "Norman",
    lastname: "Aranda",
    email: "norman@test.com",
    country: "Nicaragua",
    city: "Managua",
    address: "pppppppppppppppppppppppppppp asfdasdas",
    service: "develop",
    priority: false,
  });
  const [isSubmited, setIsSubmited] = useState(false);
  const [firstScreenTab, setFirstScreenTab] = useState(true);
  const [secongScreenTab, setSecondScreenTab] = useState(false);
  const [thirdScreenTab, setThirdScreenTab] = useState(false);

  const { resetAllStates } = useSlide();

  const fetcher = useRemixFetcher({
    onSuccess: (data) => handleSubmitData(data),

    onError: (e) => {
      console.log(e);
    },

    queryKey: "dataFormSubmit",
  });

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<AllData>({
    defaultValues: {
      name: "",
      lastname: "",
      email: "",
      country: "",
      city: "",
      address: "",
      service: "",
      priority: false,
    },
    resolver: yupResolver<AllData | any>(dataSchema),
    mode: "onChange",
  });

  const onSubmit = handleSubmit((_data, e) => {
    const formData = new FormData(e?.target);

    fetcher.submit(formData, {
      method: "POST",
      encType: "multipart/form-data",
    });

    reset();
    resetAllStates();
    setFirstScreenTab(true);
    setSecondScreenTab(false);
    setThirdScreenTab(false);
  });

  const handleSubmitData = (data: any) => {
    setIsSubmited(true);
    setDataSubmited({
      name: data.dataSubmited.name,
      lastname: data.dataSubmited.lastname,
      email: data.dataSubmited.email,
      country: data.dataSubmited.country,
      city: data.dataSubmited.city,
      address: data.dataSubmited.address,
      service: data.dataSubmited.service,
      priority: data.dataSubmited.priority,
    });
  };

  return (
    <fetcher.Form onSubmit={onSubmit} className="routes-wrapper-ab">
      <PersonalInfo
        register={register}
        enableTab={firstScreenTab}
        enableNextTab={setSecondScreenTab}
        dataSubmited={dataSubmited}
        isSubmited={isSubmited}
        setIsSubmited={setIsSubmited}
      />
      <CountryInfo
        register={register}
        enableTab={secongScreenTab}
        enableNextTab={setThirdScreenTab}
      />
      <ServicesInfo register={register} enableTab={thirdScreenTab} />
    </fetcher.Form>
  );
};
