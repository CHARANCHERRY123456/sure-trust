// src/App.jsx
import React from 'react';
// import '/dist/styles.css';

function Card(props){
    return <div>
        <h1>{props.name}</h1>
        <p> {props.content} </p>
    </div>
}
function App() {
  return (
    <div>
    <Card 
        name = "Charan"
        img=""
        content = "Charan Content"
    />
    <Card 
        name = "Cherry"
        content = "Cherry Content"
    />
    </div>
  );
}

export default App;

