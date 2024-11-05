import React from "react";

export function Note(){
    console.log("entered in note");
    return  <div className="note">
            <h1>This is a heading</h1>
            <p>This is the content actually this should be more lenght than the heading</p>
        </div>
}