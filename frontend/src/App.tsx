import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/country/pl" />} />
          <Route path="/country/:country" element={<Home />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
