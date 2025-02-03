import { useState } from "react";

export default function Counter(){
    const [count, setCount] = useState(0); // initialization
    function intit() {
        return Math.random();
    }
    // const [count1, setCount1] = useState(init); // functions are passed like this

    console.log("Component is rendered");
    console.log(`count = ${count}`); // count = 1, then increments at each render[Re-render Stage]
    
    
    function incCount() {
        setCount((prevCount) => {
            return prevCount + 1;
        });
        setCount((prevCount) => {
            return prevCount + 1;
        });
        setCount((prevCount) => {
            return prevCount + 1;
        });

        console.log(`Inside handler count = ${count}`); // count = 0, then increments at each render
    }

    return (
        <>
           <h1>Count = {count}</h1>
           <button onClick={incCount}>Increase Count</button>
        </>
    );
}