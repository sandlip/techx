import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import NavBar from './components/Navbar';
import LandingPage from './page/LandingPage';
import UpcomingEvent from './page/UpcomingEvent';



function App() {
  return (
    <div className="text-xl bg-gray-100">
      <NavBar />

      <BrowserRouter>
        <Routes>
          
          <Route
            path="/upcoming"
            element={<LandingPage />}
          />
          
          <Route
            path="/"
            element={<UpcomingEvent />}
          />

        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}


export default App;
