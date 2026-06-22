import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Video from "./components/Video";
import PlanetDashboard from "./components/PlanetDashboard";
import DataTable from "./components/DataTable";
import PlanetaryContactForm from "./components/PlanetaryContactForm";
import SuccessModal from "./components/SuccessModal";
import Footer from "./components/Footer";

function App() {
   return (
    <>
       <Hero/>
       <Navbar/>
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
