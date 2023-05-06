import Topbar from "./Components/topbar/Topbar";
import Intro from "./Components/intro/Intro";
import Contact from "./Components/contact/Contact";
import Portfolio from "./Components/portfolio/Portfolio";
import Testimonial from "./Components/testimonial/Testimonial";
import Works from "./Components/works/Works";
import "./app.scss";


function App() {
  return (
    <div className="app">
     <Topbar/>
   
  <div className="sections">

  <Intro/>
  <Portfolio/>
  <Testimonial/>
  <Works/>
  <Contact/>
   

    </div>
    </div>
  );
}

export default App;
