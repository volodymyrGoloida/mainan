import About from "./Components/AboutTypes/About";
import Feature from "./Components/Feature/Feature";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import { Posibilities } from "./Components/Posibilities/Posibilities";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Feature />
      <Posibilities />
      <About />
    </>
  );
}

export default App;
