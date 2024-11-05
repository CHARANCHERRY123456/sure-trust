import React , {useState} from "react";
import Input from "./components/TODO/Input"; 
import Button from "./components/TODO/Button";
import Task from "./components/TODO/Task";
export default function App(){ 
  var [list_of_tasks , setList ]= useState([1, 2, 3, 4, 5])
  const [task_name  , setTaskName] = useState("");
  function remove_value(val){
    var new_l = list_of_tasks.filter(item=> item != val);
    console.log(new_l);
    setList(new_l)
  }

  function HandleChange(event){
    // console.log("handleChange");
    const name = event.target.value
    setTaskName(name);
  }
  function create_tasks(task, index) {
    return <Task key={index} remove_value={remove_value} task={task} />
    // return <h2 className="task" key={index}>{task}</h2>;
  }
  function HandleSubmit(event){
    setList([...list_of_tasks  ,task_name])
    // console.log(list_of_tasks);
    setTaskName("")
    event.preventDefault()
  }
  const placeholder = "enter a task here"
  return <>
    <form className="container" action="">
      <h1 className="heading"> Enter a task </h1>
      {/* <input value={task_name} onChange={HandleChange} placeholder="enter a task here"  /> */}
      <Input task_name={task_name} HandleChange= {HandleChange} placeholder = {placeholder}/>
      <Button HandleSubmit={HandleSubmit}/>
      {/* <button onClick={HandleSubmit} type="submit" >+</button> */}
      {list_of_tasks.map(create_tasks)}
    </form>
  </>
}