import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./Layouts/RootLayout";
import Hero from "./pages/Hero";
import About from "./pages/About/About";
import People from "./components/People";
import Services from './components/Services'
import Contact from "./pages/Contact/Contact";
import  Blogs from "./pages/Blogs/Blogs"; 


function App() {
  return (
    <BrowserRouter>
      <RootLayout>
        <Routes>
          {/* No wrapping Route here */}
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<People />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </RootLayout>
    </BrowserRouter>
  );
}

export default App;
