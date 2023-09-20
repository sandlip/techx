import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import LandingPage from './page/LandingPage';
import RegisterPage from "./page/RegisterPage";
import TechExpose from "./page/TechExpose";
import TechX from "./page/TechX";
import Upcoming from "./page/Upcoming";



const MySwal = withReactContent(Swal)




function App() {








  return (
    <div className="text-lg">
      <BrowserRouter>
        <Routes>
          
          <Route
            path="/"
            element={<LandingPage />}
          />
          
          <Route
            path="/techX"
            element={<TechX />}
          />
          
          <Route 
            path="/techExpose" 
            element={<TechExpose />}
          />

          <Route 
            path="/upcoming" 
            element={<Upcoming />}
          />

          <Route
            path="/:registrationType"
            element={<RegisterPage
              MySwal={MySwal}
            />}
          />

        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
