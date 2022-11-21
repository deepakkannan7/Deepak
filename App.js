// // import logo from './logo.svg';
// import './App.css';
// import Choose1 from './Choose1';
// import Kr1 from './Kr1';
// import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
// function App() {
//   return (
//     <BrowserRouter>
//     <div className="App">
//       <Routes>
//         <Route path='/' element={<Choose1/>}></Route>
//         <Route path='/Choose1' element={<Choose1/>}></Route>
//         <Route path='/Kr1' element={<Kr1/>}></Route>
//         </Routes>
//     </div>
//     </BrowserRouter>
//   );
// }

// export default App;


// import '.App.css';
// import React,{useState,useRef,useEffect} from'react';
// function Fun1()
// {
//   const[id,setId]=useState("101")
//   const[address,setAddress]=useState("Coimbatore")
//   var add=()=>{ return setAddress("Chennai")}
//   return(
//     <>
//     <h1>{id}</h1>
//     <h1>{address}</h1>
//     <button onClick={add}>Click</button>
//     </>
//   )

// }
// export default App




// OBJECT LITERALS

// import '.App.js';
// import React,{useState,useRef,useEffect} from'react';
// function Name()
// {
//   const[College,setCollege]=useState({name:"SKCET",year:1993})
//   var add=()=>{setCollege(prevState=>{
//     return {...prevState,year:"2023"}});
//   }
//   return(
//     <>
//     <center>
//     <h1>{College.name}</h1>
//     <h1>
//       {College.year}
//     </h1>
//     <button onClick={add}>Click</button></center>
//     </>
//   )
// }

// export default Name;

import "./App.css";
import Edit from "./Edit.js";
function App()
{
  return(
    <div className="App">
      <Edit />
    </div>
  );
}
export default App;