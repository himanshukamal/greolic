import TopAdvertisement from "./components/TopAdvertisement";
import Footer from "./components/footer";
import Search from "./components/home/Search";
import DentistFeatures from "./components/home/features";
import Homepage from "./Pages/homepage";
import LandingPage from "./Pages/landingpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Invoice from "./Pages/invoice";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/invoice" element={<Invoice />} />
      </Routes>
    </Router>
  );
}

export default App;
