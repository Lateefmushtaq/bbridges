import "./App.css";
import Navbar from "./components/nav";
import LandingPage from "./components/LandingPage";
import MultiActionAreaCard from "./components/cards.jsx";
import ResponsiveStack from "./components/logo.jsx";

function App() {
  return (
    <>
      <Navbar />
      <LandingPage />

      <MultiActionAreaCard />
      <ResponsiveStack />
    </>
  );
}

export default App;
