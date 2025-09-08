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
          required: { value: true, message: `This field is required` },
        })}
        className={`input ${errors[id] ? "danger" : ""}`}
        aria-invalid={errors[id] ? "true" : "false"}
        aria-describedby={errors[id] ? `${id}-error` : undefined}
      />
      {errors && errors[id] && (
        <span className="error-message" id={`${id}-error`} role="alert">
          {(errors[id] as FieldError)?.message}
        </span>
      )}
    </div>
  );
}
