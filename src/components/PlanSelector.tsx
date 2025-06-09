export function PlanSelector() {
  return (
    <fieldset>
      <legend>Select your plan</legend>
      <p>You have the option of monthly or yearly billing.</p>

      <input type="radio" id="arcade" name="plan" />
      <label htmlFor="arcade">arcade</label>
      <input type="radio" id="advanced" name="plan" />
      <label htmlFor="advanced">advanced</label>
      <input type="radio" id="pro" name="plan" />
      <label htmlFor="pro">pro</label>
      <hr></hr>

      <label htmlFor="monthly">monthly</label>
      <input type="radio" id="monthly" name="plan-period" />
      <label htmlFor="yearly">yearly</label>
      <input type="radio" id="yearly" name="plan-period" />
    </fieldset>
  );
}
