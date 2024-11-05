import React from "react";
const GreetingStyles = {
    color : "blue"
}
var x = 8;
if(x<10) GreetingStyles.color = "yellow"
else GreetingStyles.color = "red"
export function Greeting(){
    return <>
        <h1 style={GreetingStyles}>{x}</h1>
    </>
}