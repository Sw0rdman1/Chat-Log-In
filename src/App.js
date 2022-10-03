import LogInForm from "./components/LogInForm";
import "./App.css";
import HeroSection from "./components/HeroSection";

function App() {
   return (
      <div className="container">
         <HeroSection />
         <LogInForm />
      </div>
   );
}

export default App;
