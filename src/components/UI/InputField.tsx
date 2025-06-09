import type { ComponentPropsWithoutRef } from "react";
import { useFormContext, type FieldError } from "react-hook-form";

type InputFieldProps = {
  id: string;
  label: string;
} & ComponentPropsWithoutRef<"input">;

export function InputField({ id, label, ...props }: InputFieldProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        {...props}
        {...register(id, {
          required: { value: true, message: `Please provide ${label}` },
        })}
      />
      <p>{(errors[id] as FieldError)?.message}</p>
    </>
  );
}
