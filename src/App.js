import logo from './logo.svg';
import './App.css';
import Head from './comp/head.js';
import Slider from './comp/slid.js';
import About from './comp/about.js';
import Type from './comp/type.js';
import Footer from './comp/footer.js';

function App() {
  return (
    <div className="App">
      <Head />
      <Slider />
      <About />
      <Type />
      <Footer />
    </div>
  );
}

export default App;
