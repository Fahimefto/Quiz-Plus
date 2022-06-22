import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import '../styles/App.css';
import Home from "./pages/Home"
import Layout from './Layout';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Quiz from './pages/Quiz';
import Result from './pages/Result';


function App() {
  return (
    <Router>

      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path='/result' element={<Result />} />

        </Routes>
      </Layout>
    </Router >

  );
}

export default App;
