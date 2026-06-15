import Hero from "./components/Navbar";
import Navbar from "./components/Hero";
import Video from "./components/Video";
import PlanetDashboard from "./components/PlanetDashboard";
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
       <PlanetDashboard/>
       <DataTable/>
       <PlanetaryContactForm/>
       <SuccessModal/>
       <Footer/>
    </>
 );
}

export default App;
