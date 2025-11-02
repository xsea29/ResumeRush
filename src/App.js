import './App.css';
import Features from './components/Features';
import Footer from './components/Footer';
import GetStarted from './components/GetStarted';
import Hero from './components/Hero';
import Nav from './components/Nav';
import ProcessOverview from './components/ProcessOverview';

function App() {
  return (
    <div className='container'>
      <Nav />
      <Hero />
      <ProcessOverview />
      <Features />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
