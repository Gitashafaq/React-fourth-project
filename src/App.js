
import { BrowserRouter,NavLink, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Services from './components/Services';
import About from "./components/About";
import Contact from './components/Contact';
import ErrorPage from './components/ErrorPage';
import Nav from './components/Nav';

const App=()=> {
  return (
  <BrowserRouter>
  <Nav/>
  <Routes>

    <Route path="/" element={<Home />}/>
    <Route path="Services" element={<Services/>}/>
    <Route path="About" element={<About/>}/>
    <Route path="Contact" element={<Contact/>}/>
    <Route path="/*" element={<ErrorPage/>}/>
    
  </Routes>
  </BrowserRouter>
  );
}

export default App;
