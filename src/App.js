
import './App.css';

import Navbar from './Components/navbar/navbar.js';
import Model3 from './Components/page_one/Model3';
import Modely from './Components/page_two/Modely';
function App() {
  return (
    <div className="App">
        <Navbar/>
        <div className="first">
           <Model3/>
        </div>
        <div className="second">
          <Modely/>
        </div>
       
        
    </div>
  );
}

export default App;
