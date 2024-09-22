import './App.css';
import Ref from './components/Ref';
import { useState } from'react';

function App() {

  const [show, setShow] = useState(true);
  return (
    <>
    <h1>Hello World</h1>
    {show && <Ref/>}
    <button onClick={()=>setShow(!show)}>Toggle Ref Component</button>
    </>
  );
}

export default App;
