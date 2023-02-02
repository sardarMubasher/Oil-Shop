import Navbar from "./Components/Navbar/Navbar";
import './App.css';
import Hero from "./Components/Hero/Hero";
import Products from "./Components/products/Products";
import About from "./Components/About/About";
import Test from "./Components/Test/Test";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      
   <Navbar/>
   <Hero/>
   <Products/>
   <About/>
   <Test/>
   <Footer/>

    </div>
  );
}

export default App;
