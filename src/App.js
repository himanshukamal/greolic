// import "./App.css";
import TopAdvertisement from "./components/TopAdvertisement";
import Footer from "./components/footer";
import Search from "./components/home/Search";
import DentistFeatures from "./components/home/features";

function App() {
  return (
    <div className="overflow-hidden">
      <TopAdvertisement />
      <Search />
      <DentistFeatures />
      <Footer />
    </div>
  );
}

export default App;
