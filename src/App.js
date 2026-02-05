import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Footer from './components/Footer';
import "./style/Theme.css";


function App() {
  return (
    <> 
      <Navbar/>  
      <div className="container">
        <TextForm heading="Enter text to analyze "/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
 