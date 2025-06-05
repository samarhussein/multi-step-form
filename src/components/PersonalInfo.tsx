import { useFormContext } from "react-hook-form";

export function PersonalInfo() {
  const { register } = useFormContext();

  return (
    <fieldset>
      <legend>Personal Info</legend>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        placeholder="Joe Smith"
        {...register("name", { required: true })}
      />
      <label htmlFor="email">Email adress</label>
      <input
        type="email"
        id="email"
        placeholder="joe.smith@example.com"
        {...register("email", { required: true })}
      />
      <label htmlFor="phone">Phone number</label>
      <input
        type="tel"
        id="phone"
        placeholder="+1234567890"
        {...register("phone", { required: true })}
      />
    </fieldset>
  );
}
