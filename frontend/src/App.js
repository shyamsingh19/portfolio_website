import Navbar from "./component/NavBar/Navbar";
import Intro from './component/Intro/intro'
import About from "./component/About/about";
import Project from "./component/Projects/project";
import Contact from "./component/contact/contact";
import Footer from "./component/Footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}


export default App;
