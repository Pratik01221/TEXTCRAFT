import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import "./style/Theme.css";
import { useState } from 'react';
import Alert from './components/Alert';
import Footer from './components/Footer';
import About from './components/About';

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#0f172a';
      document.body.style.color = 'white';
      showAlert('Dark Mode has activated', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert('Light Mode has activated', 'warning');
    }
  };

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />

      <div style={{ paddingTop: "70px" }}>
        <Alert alert={alert} />
      </div>

      <div className="container mt-4">
        <TextForm
          showAlert={showAlert}
          heading="Enter the text to analyze below"
          mode={mode}
        />
      </div>
      <About />

      <Footer mode={mode} />
    </>
  );
}

export default App;
