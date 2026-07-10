import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Equipment from './pages/Equipment';
import Hse from './pages/Hse';
import Careers from './pages/Careers';
import Documents from './pages/Documents';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projets" element={<Projects />} />
            <Route path="/services" element={<Services />} />
            <Route path="/equipements" element={<Equipment />} />
            <Route path="/hse" element={<Hse />} />
            <Route path="/carrieres" element={<Careers />} />
            <Route path="/documents" element={<Documents />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
