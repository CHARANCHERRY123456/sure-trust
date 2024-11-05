import React , {useState} from "react";

function App() {
  var [firstName, setFirstName] = useState("");
  var [secondName, setSecondName] = useState("");

  var [isSubmitted , setIsSubmitted] = useState(false)
  function handleChange(event) {
    console.log(event.target.value);
    setFirstName(event.target.value);
  }
  function handleChangeSecond(event) {
    console.log(event.target.value);
    setSecondName(event.target.value);
  }
  function handleSubmit(e){
    // console.log(e);
    setFirstName(e.target.value)
    //  setIsSubmitted(true); 
     e.preventDefault();
  }
  return (
      <form className="container" onSubmit={handleSubmit} action="">
          <h1 style={{
            color:"black"
          }}>Hello {(isSubmitted) && firstName + secondName}</h1>
          <input
            value={firstName}
            onChange={handleChange}
            type="text"
            placeholder="What's your First name?"
          />
          <input
            value={secondName}
            onChange={handleChangeSecond}
            type="text"
            placeholder="What's your Second name?"
          />
          <button>Get Time</button>
      </form>
  );
}
export default App;
