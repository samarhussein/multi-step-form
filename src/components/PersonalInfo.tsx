import { InputField } from "./UI/InputField";

export function PersonalInfo() {
  return (
    <fieldset>
      <legend>Personal Info</legend>
      <p className="description">
        Please provide your name, email adress, and phone number.
      </p>
      <InputField
        id="name"
        type="text"
        label="Name"
        placeholder="Joe Smith"
        required
      />
      <InputField
        id="email"
        type="email"
        label="Email adress"
        placeholder="joe.smith@example.com"
        required
      />
      <InputField
        id="phone"
        type="tel"
        label="Phone number"
        placeholder="+1234567890"
        required
      />
    </fieldset>
  );
}
