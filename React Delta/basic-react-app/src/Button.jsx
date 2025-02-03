function doSomething(event){
    console.log("Hello, world!");
    console.log(event);
}

function dblClickfun(event){
    console.log("Double Clicked!");
    console.log(event);
}

export default function Button(){
    return (
        <>
            <button onClick={doSomething}>Click me!</button>
            <br></br>
            <br></br>
        </>
    );
}