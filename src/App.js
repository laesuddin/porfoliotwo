import './App.css';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      {/*perticles*/}
      {/*navbar components*/}
      {/*main page content*/}
      <Routes>
        {/*main page content*/}
        <Route path='/' index element = {<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
