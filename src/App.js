import './App.css'
import Books from './components/Books/Books';
import NavBar from './components/Navbar/NavBar';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Intro from './components/intro/Intro';
import Work from './components/work/Work';

function App() {
  return (
    <>
    <NavBar/>
    <Intro/>
    <Books/>
    <About/>
    <Work/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
