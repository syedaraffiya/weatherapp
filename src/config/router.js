import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Weather from "../component/weather";


export default function AppRouter() {
    return (
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Weather />} />
            
          </Routes>
        </div>
      </Router>
    );
  }