import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from "./Component/Home/Home"
import About from "./Component/About/About"
import NotFound from "./Component/NotFound/NotFound"
import PostInfo from './Component/PostInfo/PostInfo';

function App() {
  return (
    <div className="App">

      <Router>
        <Link to="/home"><button> Home </button></Link>
        <Link to="/about"><button> About </button></Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/post/:id" element={<PostInfo/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
