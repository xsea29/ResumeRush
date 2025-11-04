import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Features from './components/Features';
import Footer from './components/Footer';
import GetStarted from './components/GetStarted';
import Hero from './components/Hero';
import Nav from './components/Nav';
import ProcessOverview from './components/ProcessOverview';
import Login from './pages/Login';

function App() {
  return (
    <div className='container'>
       <BrowserRouter>
      <Nav />
      <Routes> 
          <Route
            path="/"
            element={
              <>
                <Hero />
                <ProcessOverview />
                <Features />
                <GetStarted />
                <Footer />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
