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
    <div className="input-field">
      <label className="label" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        {...props}
        {...register(id, {
          required: { value: true, message: `Please provide ${label}` },
        })}
        className="input"
      />
      {errors && errors[id] && <p>{(errors[id] as FieldError)?.message}</p>}
    </div>
  );
}
