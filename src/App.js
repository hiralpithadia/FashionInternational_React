import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home';

const App = () => {
    console.log("This is the process.env", process.env.PUBLIC_URL)
  return (
    <Routes>
    <Route exact path="/" element= {<Home></Home>}>
    </Route>
    </Routes>
  );
}

export default App;
