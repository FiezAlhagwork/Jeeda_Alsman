

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";


export default function App() {

  return (
    <main className="relative min-h-screen">

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>






      <footer className="py-24 px-8 border-t border-white/5 ">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div>
            <h2 className="text-6xl font-black mb-8">JEDDA</h2>
            <p className="text-white/50 max-w-xs">
              Crafting digital experiences that blend high-fashion aesthetics with technical precision.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-24">
            <div className="flex flex-col gap-4">
              <span className="text-xs uppercase tracking-widest text-white/30">Social</span>
              <a href="#" className="hover:text-white/70 transition-colors">Instagram</a>
              <a href="#" className="hover:text-white/70 transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white/70 transition-colors">Twitter</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-xs uppercase tracking-widest text-white/30">Contact</span>
              <a href="mailto:hello@reem.com" className="hover:text-white/70 transition-colors">hello@reem.com</a>
              <a href="#" className="hover:text-white/70 transition-colors">Book a Call</a>
            </div>
          </div>
        </div>
        <div className="mt-24 pt-8 border-t border-white/5 flex justify-between text-xs text-white/20 uppercase tracking-widest">
          <span>© 2026 Jedda Portfolio</span>
          <span>Built with AI Studio</span>
        </div>
      </footer>
    </main>
  );
}
