export function PersonalInfo() {
  return (
    <fieldset>
      <legend>Personal Info</legend>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" placeholder="Joe Smith" />
      <label htmlFor="email">Email adress</label>
      <input type="email" id="email" placeholder="joe.smith@example.com" />
      <label htmlFor="phone">Phone number</label>
      <input type="tel" id="phone" placeholder="+1234567890" />
    </fieldset>
  );
}
