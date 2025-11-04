import './App.css';
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Features from './components/Features';
import Footer from './components/Footer';
import GetStarted from './components/GetStarted';
import Hero from './components/Hero';
import Nav from './components/Nav';
import ProcessOverview from './components/ProcessOverview';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import DashboardLayout from './layouts/DashboardLayout';

function App() {
  return (
    <div className='container'>
       <BrowserRouter>
      <Routes> 
          <Route
            path="/"
            element={
              <>
      <Nav />
                <Hero />
                <ProcessOverview />
                <Features />
                <GetStarted />
                <Footer />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<DashboardLayout />} >
          <Route path="/dashboard" element={<Dashboard />} />
          </Route>

          </Routes>
      </BrowserRouter>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
    
  );
}

export default App;
