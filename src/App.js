import './App.css';
import Home from './components/Home';
import '../src/styles/style.css'
import Sidebar from './components/Sidebar';
import { useState } from 'react';

function App() {
  const [toggle, setToggle] = useState(false)
  return (
    <div style={{ display: 'flex', flexDirection: 'row' ,margin:'1  0px'}}>
      <div >
        <Sidebar toggle={toggle} setToggle={setToggle} />
      </div>
      <div style={{margin:'10px'}}>

      <Home toggle={toggle} setToggle={setToggle} />
      </div>
    </div>
  );
}

export default App;
