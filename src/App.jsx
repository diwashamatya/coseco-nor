import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./Layouts/RootLayout";
import Hero from "./pages/Hero";
import About from "./pages/About/About";
import People from "./components/People";
import Services from './components/Services'
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* The RootLayout wraps all these routes */}
        <Route path="/" element={<RootLayout />}>
          {/* index means this renders at " / " */}
          <Route index element={<Hero />} />

          <Route path="about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="team" element={<People />} />
          <Route path="contact" element={<Contact />} />


          <Route path="contact" element={<div>Contact Page Content</div>} />

          {/* Optional: Add a 404 Catch-all */}
          <Route path="*" element={<div>Page Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
