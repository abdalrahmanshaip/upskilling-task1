import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout";
import About from "./components/About";
import Services from "./components/Services";
import Testymonials from "./components/Testymonials";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div className="App">
      <Layout />
      <About />
      <Services />
      <Testymonials />
      <ContactUs />
    </div>
  );
}

export default App;
