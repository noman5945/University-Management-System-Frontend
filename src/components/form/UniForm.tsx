import { ReactNode } from "react";
import { FormProvider, SubmitHandler, useFormContext } from "react-hook-form";

type UniFormProps = {
  OnSubmit: SubmitHandler<any>;
  children: ReactNode;
};
export const UniForm = ({ OnSubmit, children }: UniFormProps) => {
  const methods = useFormContext();
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(OnSubmit)}>{children}</form>
    </FormProvider>
  );
};
