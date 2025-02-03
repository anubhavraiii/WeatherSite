import { useState } from "react";

function ControlledForm() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Controlled Input:", name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <button type="submit" >Submit</button>
    </form>
  );
}

export default ControlledForm;
