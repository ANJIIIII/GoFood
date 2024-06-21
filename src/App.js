import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import Maincontent from "./components/Maincontent"
import Belowpage from "./components/Belowpage"
function App() {
  return (
   <div>
    <div>
      <Navbar/>
    </div>
    <div>
      <Maincontent/>
    </div>
    <div>
      <Belowpage/>
    </div>
   </div>
  );
}

export default App;
