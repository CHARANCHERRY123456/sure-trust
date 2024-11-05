import React from "react";

function Button(props){
    // console.log("entered in Buttons");
    return <button onClick={props.HandleSubmit}>+</button>
}
export default Button;