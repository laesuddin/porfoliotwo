import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './containers/home';
import About from './containers/about';
import Contact from './containers/contact';
import Portfolio from './containers/portfolio';
import Resume from './containers/resume';
import Skills from './containers/skills';
import NavBar from './components/navBar';


function App() {
  return (
    <div className="App">
      {/*perticles js*/} 
      {/*navbar components*/}
      <NavBar/>
      {/*main page content*/}
      <Routes>
        {/*main page content*/}
        <Route path='/' index element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/skills' element={<Skills/>}/>
 
      </Routes>
    </div>
  );
}

export default App;
