import React from "react";
const Policyform = ()=>{
    return(<div style={{ display: 'flex' }}>
    <div style={{ flex: 1, padding: '1rem' }}>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h2>Add Policy</h2>
        <div>
          <label htmlFor="policyNumber">Policy Number:</label>
          <input type="text" id="policyNumber" name="policyNumber" />
        </div>
        <div>
          <label htmlFor="policyName">Policy Name:</label>
          <input type="text" id="policyName" name="policyName" />
        </div>

        <div>
          <label htmlFor="policyType">Policy Type:</label>
          <select id="policyType" name="policyType">
            <option value="health">Health</option>
            <option value="life">Life</option>
            <option value="vehicle">Vehicle</option>
          </select>
        </div>
        <div>
          <label htmlFor="policyDescription">Policy Description:</label>
          <input type="text" id="policyDescription" name="policyDescription" />
        </div>
       
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
    <div style={{ flex: 1 }}>
      {/* Empty div for the right window */}
    </div>
  </div>)
}
export default Policyform;