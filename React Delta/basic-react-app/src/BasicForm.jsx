import { useState } from "react";

function BasicForm() {
  const [text, setText] = useState("");

  return (
    <div>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
      />
    </div>
  );
}

export default BasicForm;
