
import './App.css';

import Navbar from './Components/navbar/navbar.js';
import Model3 from './Components/page_one/Model3';
// import Models from './Components/page_two/Model';
import modelthree from  "./assets/modelthree.jpeg"
import modely from  "./assets/modely.jpeg"
import models from  "./assets/models.jpeg"
import modelx from  "./assets/modelx.jpeg"
import panels from  "./assets/panels.jpeg"
import roofs from  "./assets/roofs.jpeg"
import Footer from './Components/footer/Footer';



// import modelthree from  "./assets/modelthree.jpeg"

function App() {
  return (
    <div className="App">
        <Navbar/>
        <div className="first">
           <Model3 background={modelthree} title="Model 3" 
           b1="CUSTOM OEDER" b2="EXISTING INVENTORY"
           /> 
       </div>
        <div className="first">
           <Model3 background={modely} title="Model Y"
            b1="CUSTOM OEDER" b2="EXISTING INVENTORY"
           />
        </div>
        <div className="first">
           <Model3 background={models} title="Model S" 
            b1="CUSTOM OEDER" b2="EXISTING INVENTORY"/>
        </div>
        <div className="first">
           <Model3 background={modelx} title="Model X" 
            b1="CUSTOM OEDER" b2="EXISTING INVENTORY"/>
        </div>
        <div className="first">
           <Model3 background={panels} title="Solar Panels" subtitle="Lowest Cost Solar Panels in America"
            b1="ORDER NOW" b2="LEARN MORE"/>
        </div>
        <div className="first">
           <Model3 background={roofs} title="Solar Roof"  subtitle="Produce Clean Energy From Your Roof"
           b1="ORDER NOW" b2="LEARN MORE"/>
        </div> 
        <div className="second">
          <Footer/>
        </div>
       
        
    </div>
  );
}

export default App;
