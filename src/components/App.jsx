import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Video from "./components/Video";
import PlanetImage from "./components/PlanetImage";
import DataTable from "./components/DataTable";
import PlanetaryContactForm from "./components/PlanetaryContactForm";
import SuccessModal from "./components/SuccessModal";
import Footer from "./components/Footer";

function App() {
   return (
    <>
       <Navbar/>
       <Hero/>
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
