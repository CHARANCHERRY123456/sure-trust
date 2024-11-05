import React , {useState} from "react";

export default  function  Task(props){
    console.log(props);
    const [style , setStyle] = useState("none");
    function handleClick(){
        setStyle("line-through");
        setTimeout(() => props.remove_value(props.task), 500);
        setTimeout(() => setStyle("none"), 500);
    }
    return <h2 onClick={handleClick}  className="task" style={{
        textDecoration : style
    }}>{props.task}</h2>
}



