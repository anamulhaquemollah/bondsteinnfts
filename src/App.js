
import './App.css';
import Discover from './components/discover/Discover';
import Features from './components/featured/Features';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Nftinfo from './components/Nftinfo';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Nftinfo/>
      <Features/>
      <Discover/>
      <Footer/>
    </div>
  );
}

export default App;
