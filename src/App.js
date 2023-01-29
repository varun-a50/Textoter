
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
 import TextForm from './components/TextForm';
 import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import About from './components/About';



function App() {
  const [mode, setMode] = useState('light');//whether dark mode is enabled or not
  const [alert, setalert] = useState(null)

  const showAlert =(message,type)=>{
    setalert({
      msg: message,
      type: type
    } )
    setTimeout(() => {
      setalert(null)
    }, 1500);

  }
  const togglemode2=()=>{
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Green Light mode enabled","success");
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = 'green';
      showAlert("Green dark mode is enabled","primary")
    }
  }
  const togglemode1=()=>{
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Red Light mode enabled","success");
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = '#9a303a';
      showAlert("Red dark mode is enabled","primary")
    }
  }
  function toggleMode() {
    if (mode === "dark") {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("The light mode is enabled","success")
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = '#3d4365';
      showAlert("The dark mode is enabled","primary")
    }
  }
  return (
    <>
    <Router basename="/TextEditor">
     
    <Navbar title='TextUtils' mode= {mode} toggleMode={toggleMode} togglemode1={togglemode1} togglemode2={togglemode2}/>
    <Alert alert={alert}/>
    
    
    <div className="container my-3">
    
        <Routes>
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/' element={<TextForm showAlert = {showAlert} heading = "Enter the text to analyze" mode = {mode}/>} />

      </Routes>
        
    </div>
    
    </Router>
    
      
      
    </>
  );
}

export default App;
