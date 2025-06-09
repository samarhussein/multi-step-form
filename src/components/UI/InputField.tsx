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
    <div>
      <label htmlFor={id} className="text-blue-900">
        {label}
      </label>
      <input
        id={id}
        {...props}
        {...register(id, {
          required: { value: true, message: `Please provide ${label}` },
        })}
        className="w-full px-4 py-2 border rounded-md border-gray-400"
      />
      <p>{(errors[id] as FieldError)?.message}</p>
    </div>
  );
}
