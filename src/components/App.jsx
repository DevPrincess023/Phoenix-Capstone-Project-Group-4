import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Video from "./component/Video";
import PlanetImage from "./component/PlanetImage";
import DataTable from "./components/DataTable";
import PlanetaryContactForm from "./components/PlanetaryContactForm";
import SuccessModal from "./components/SuccessModal";
import Footer from "./component/Footer";

function App() {
   return (
    <>
       <Hero/>
       <Navbar/>
       <Video/>
       <PlanetaryImage/>
       <DataTable/>
       <PlanetaryContactForm/>
       <SuccessModal/>
       <Footer/>
    </>
 );
}

export default App;
