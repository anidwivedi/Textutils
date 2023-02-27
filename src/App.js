import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
// import About from './components/About';
import Textutils from './components/Textutils';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";





function App() {
  
  const[mode,setMode]=useState("light")

  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor="#1a0138"
      document.body.style.color="white"
      showAlert("Dark Mode has been Enabled","Success")
      
    }
    else{
      setMode("light")
      document.body.style.backgroundColor="white"
      document.body.style.color="black"
      showAlert("Light Mode has been Enabled","Success")
    }

  }
   
  const[alert,setAlert]=useState(null)
  const showAlert=(message,type)=>{
     
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);


  }
    

  return (
    <>
    {/* <Router> */}
    <Navbar mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}  />
    <div className='container' >
    {/* <Routes> */}
        {/* <Route path="/about" element={<About/>} /> */}
        {/* <Route path="/" element={}  /> */}
        <Textutils heading="Enter Your Text Here"  mode={mode} showAlert={showAlert}/>
    {/* </Routes> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
