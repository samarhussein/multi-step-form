import { InputField } from "./UI/InputField";

export function PersonalInfo() {
  return (
    <fieldset className="flex flex-col gap-3">
      <legend className="text-2xl text-blue-900">Personal Info</legend>
      <p className="text-gray-600 mt-3 mb-8">
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
