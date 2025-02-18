import './App.css';
import Tabs from "./Components/Tabs/Tabs.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Tabs />} />
            <Route path="/dashboard" element={<Tabs />} />
            <Route path="/banking" element={<Tabs />} />
            <Route path="/telefonie" element={<Tabs />} />
            <Route path="/accounting" element={<Tabs />} />
            <Route path="/verkauf" element={<Tabs />} />
            <Route path="/statistik" element={<Tabs />} />
            <Route path="/post-office" element={<Tabs />} />
            <Route path="/administration" element={<Tabs />} />
            <Route path="/help" element={<Tabs />} />
            <Route path="/warenbestand" element={<Tabs />} />
            <Route path="/auswahllisten" element={<Tabs />} />
            <Route path="/einkauf" element={<Tabs />} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;
