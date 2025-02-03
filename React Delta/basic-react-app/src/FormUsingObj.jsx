import { useState } from "react";

export default function FormUsingObj(){
    let [formData, setFormData] = useState({
        fullname : "",
        username : "",
        password : ""
    })

    let handleAllInputs = (event) => {
        setFormData((currData) => {
            return {...currData, [event.target.name] : event.target.value}
        })
    } // depends on old obj value therefore callback is used

    let handleSubmit = (event) => {
        event.preventDefault();
        setFormData({
           fullname : "",
           username : "",
           password : "",
        })
    }

    return(
        <div>
            <label htmlFor="fullname">Fullname:</label>
            <input placeholder="enter fullname" value={formData.fullname} type="text" id="fullname" name="fullname"  onChange={handleAllInputs} ></input>
            <br></br><br></br>

            <label htmlFor="username">Username:</label>
            <input placeholder="enter username" type="text" id="username" name="username" value={formData.username} onChange={handleAllInputs} ></input>
            <br></br><br></br>

            <label htmlFor="password">Password:</label>
            <input placeholder="enter password" type="password" id="password" name="password" value={formData.password} onChange={handleAllInputs} ></input>
            <br></br><br></br>
            
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

// Let's break down this part in detail:

// ```js
// return {...currData, [event.target.name]: event.target.value}

// ### **1. `{...currData}` - Spreading the Current State**
// - `currData` represents the existing state, which looks like this initially:
//   ```js
//   {
//       fullname: "",
//       username: "",
//       password: ""
//   }
//   ```
// - `{...currData}` uses the **spread operator (`...`)** to create a **shallow copy** of the existing `formData` state. 
// - This ensures that we **don't lose** the previous values when updating a single field.

// ### **2. `[event.target.name]: event.target.value` - Dynamic Property Update**
// - `event.target.name` gives the **name** of the input field that triggered the change.
// - `event.target.value` gives the **new value** entered by the user.
// - The syntax `[event.target.name]: event.target.value` is **computed property names** in JavaScript.
//   - It dynamically sets the property based on the `name` attribute of the input field.
//   - This is useful because it allows handling multiple input fields **with a single function**.

// ### **Example Scenarios**
// #### **Case 1: User types "John Doe" in the Fullname field**
// - `event.target.name = "fullname"`
// - `event.target.value = "John Doe"`
// - The returned object becomes:
//   ```js
//   {
//       ...currData,   // Keeps previous values
//       fullname: "John Doe"  // Updates only 'fullname'
//   }
//   ```
//   - If the previous `currData` was:
//     ```js
//     { fullname: "", username: "", password: "" }
//     ```
//   - The **new state** will be:
//     ```js
//     { fullname: "John Doe", username: "", password: "" }
//     ```
