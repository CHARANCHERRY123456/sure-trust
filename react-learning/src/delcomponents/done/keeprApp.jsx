// src/App.jsx
import React from 'react';
// import '/dist/styles.css';
import {Header} from '../components/keeper_app/Header'
import {Note} from '../components/keeper_app/Note'
import {Footer} from '../components/keeper_app/Footer'

function App() {
  return (
    <div>
    <Header />
    <Note />
    <Footer />
    </div>
  );
}

export default App;

