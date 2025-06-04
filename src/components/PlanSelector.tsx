export function PlanSelector() {
  return (
    <fieldset>
      <legend>Select your plan</legend>
      <p>You have the option of monthly or yearly billing.</p>

      <input type="checkbox" id="arcade" />
      <label htmlFor="arcade">arcade</label>
      <input type="checkbox" id="advanced" />
      <label htmlFor="advanced">advanced</label>
      <input type="checkbox" id="pro" />
      <label htmlFor="pro">pro</label>

      <label htmlFor="monthly">monthly</label>
      <input type="radio" id="monthly" name="plan" />
      <label htmlFor="yearly">yearly</label>
      <input type="radio" id="yearly" name="plan" />
    </fieldset>
  );
}
