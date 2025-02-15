import { BrowserRouter,Routes,Route } from "react-router-dom";

import "./App.css";
import Chatbot from "./Components/Chatbot";
import Navbar from "./Components/Common/Navbar";
import LandingPage from "./LandingPage";
import VisualInsights  from "./VisualInsights.jsx";
import { AllFeaturesSection } from "./Components/Common/FeatureSection.jsx";
import SummarySection from "./Components/SummarySection.jsx";
function App() {
  return (
    <div className="">
     
      <Chatbot/>
      <BrowserRouter>
      <Navbar/>
          <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <LandingPage/> */}
          <Route path="/visual-insights" element={<VisualInsights />} />
          <Route path='/portfolio-summary' element={<SummarySection/>}/>
           <Route path='/features' element={<AllFeaturesSection/>}/>
          </Routes>
     </BrowserRouter>
    </div>
    
  );
}

export default App;
