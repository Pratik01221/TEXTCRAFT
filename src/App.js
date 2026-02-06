import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Footer from './components/Footer';
import "./style/Theme.css";
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
 
import { type } from '@testing-library/user-event/dist/type';


function App() {

  const [mode, setMode] = useState('light'); 
  const [alert,setAlert]=useState(null);

const showAlert = (message, type) => {
  setAlert({
    msg: message,
    type: type
  });
  setTimeout(() => {
  setAlert(null);
  }, 1500);
};

const toggleMode = () => {
  if (mode === 'light') {
    setMode('dark');
    document.body.style.backgroundColor = '#0f172a';
    document.body.style.color = 'white';
    showAlert('Dark Mode has activated', 'success');
    // document.title = 'TextCraft - Dark Mode';
  } else {
    setMode('light');
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    showAlert('White Mode has Activated', 'warning');
    // document.title = 'TextCraft - Light Mode';
  }
};


  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <div style={{ marginTop: "40px" }}>
        <Alert alert={alert} />
      </div>

      <div className="container mt-5 pt-5">
        <TextForm heading="Enter text to analyze" showAlert={showAlert} mode={mode} />
      </div>

      <About />
      <Footer mode={mode} />
    </>
  );
}

export default App;
