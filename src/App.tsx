import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CNav from './components/CNav'
import Main from './components/Main';
import CFooter from './components/CFooter';
import { Container } from 'react-bootstrap';
import Hero from './components/Hero';


function App() {

  return (
    <>
<BrowserRouter>
<Container fluid className="d-flex flex-column min-vh-100 p-0">
      <CNav />
      
      <div id="main" className="flex-fill">
      <Routes>
        <Route path="/" element={<><Hero/><Main /></>} />
      </Routes></div>
      <CFooter/></Container>
    </BrowserRouter>
    </>
  )
}

export default App
