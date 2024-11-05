import React from "react";

function Input(props){
    // console.log("entered");
   return <input type="text" style={{
    backgroundColor:"pink"
   }}  value={props.task_name} onChange={props.HandleChange} placeholder={props.placeholder} />
}
export default Input;