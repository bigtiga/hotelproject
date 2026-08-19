import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Rooms from "./pages/Rooms";
import Amenities from "./pages/Amenities";
import Bookings from "./pages/Bookings";
import ContactUs from "./pages/ContactUs";
import Aboutus from "./pages/Aboutus";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <ThemeProvider>
      <div style={{ 
        minHeight: '100vh', 
        background: 'var(--bg-primary)', 
        transition: 'background 0.3s ease' 
      }}>
        <Navbar />
        <main style={{ paddingTop: '70px' }}>
          
          <Routes>
            
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            
            <Route path="/" element={<HomePage />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/amenities" element={<Amenities />} />
            <Route path="/booking" element={<Bookings />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/footer" element={<Footer />} />

          </Routes>

        </main>
      </div>
    </ThemeProvider>
  );
};
export default App; 
 
