import { useEffect, useState } from "react";

export default function Joker(){
    const URL = "https://official-joke-api.appspot.com/random_joke";
    // {"type":"general","setup":"What did the dog say to the two trees?","punchline":"Bark bark.","id":170}

    let [joke,setJoke] = useState({});

    async function retrieveJoke() {
        let response = await fetch(URL);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        setJoke({setup : jsonResponse.setup,punchline : jsonResponse.punchline})
    }

    useEffect( () => {
        async function retrieveFirstJoke() {
            let response = await fetch(URL);
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            setJoke({setup : jsonResponse.setup,punchline : jsonResponse.punchline})
        }
        retrieveFirstJoke();
    },[])

    return (
        <div>
            <h1>Joker</h1>
            <h2>SetUp:{" " +joke.setup}</h2>
            <h2>Punchline:{" " +joke.punchline}</h2>
            <button onClick={retrieveJoke}>Get New Joke</button>
        </div>
    )
}