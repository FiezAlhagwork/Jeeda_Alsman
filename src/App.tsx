

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ClientPage from "./pages/ClientPage";
import Footer from "./components/Sections/Footer";





export default function App() {

  return (
    <main className="relative min-h-screen">

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:clientId" element={<ClientPage />} />
        </Routes>
      </Router>






<Footer/>
    </main>
  );
}
