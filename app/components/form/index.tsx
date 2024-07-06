import { ReactNode } from "react";
import { useRemixFetcher } from "~/hooks/use-remix-fetcher";

type FormProps = {
  onClick?: React.MouseEventHandler<HTMLFormElement> | undefined;
  className?: string;
  queryKey?: string | undefined;
  encType?:
    | "application/x-www-form-urlencoded"
    | "multipart/form-data"
    | "text/plain";
  method?:
    | "get"
    | "post"
    | "put"
    | "patch"
    | "delete"
    | "GET"
    | "POST"
    | "PUT"
    | "PATCH"
    | "DELETE";
  action?: string;
  onSubmit?: React.FormEventHandler<HTMLFormElement> | undefined;
  onError?: ((loaderData: any) => void) | undefined;
  onSuccess?: ((loaderData: any) => void) | undefined;
};

export const Form = ({
  children,
  formProps,
}: {
  children: ReactNode;
  formProps: FormProps;
}) => {
  const {
    onSubmit,
    queryKey,
    onError,
    onSuccess,
    className,
    onClick,
    encType,
    action,
    method,
  } = formProps;

  const fetcher = useRemixFetcher({
    onError: onError,
    onSuccess: onSuccess,
    queryKey: queryKey,
  });
  return (
    <fetcher.Form
      onSubmit={onSubmit}
      className={className}
      onClick={onClick}
      encType={encType}
      method={method}
      action={action}
    >
      {children}
    </fetcher.Form>
  );
};
