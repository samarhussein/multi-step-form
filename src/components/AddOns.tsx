export function AddOns() {
  return (
    <fieldset>
      <legend>Pick add-ons</legend>
      <p>Add-ons help enhance your gaming experience.</p>

      <input type="checkbox" id="online-service" />
      <label htmlFor="online-service"> Online service</label>
      <input type="checkbox" id="storage" />
      <label htmlFor="storage">Larger storage</label>
      <input type="checkbox" id="customizable-profile" />
      <label htmlFor="customizable-profile"> Customizable Profile</label>
    </fieldset>
  );
}
