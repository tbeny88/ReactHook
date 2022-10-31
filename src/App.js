import './App.css';
import Counter from './components/Counter';
import {useState} from 'react'

function App() {

  const [showHide, setShowHide] = useState(true)

  const handleShow = () => {
    setShowHide((prevShowHide) => !prevShowHide )
  }

  return (
    <div className='App'>
      <button onClick={handleShow}>{showHide ? "Hide" : "Show"} Counter</button>
      { showHide && <Counter />}
    </div>
  );
}

export default App;
