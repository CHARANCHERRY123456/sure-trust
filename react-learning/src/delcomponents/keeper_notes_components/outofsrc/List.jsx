import React from "react";

export function List(){
    console.log("in the list component");
    return <>
        <ol>
            <li>one</li>
            <li>Two</li>
            <li>Three</li>
        </ol>
    </>
}
export function Double(num){
    return num * 2;
}