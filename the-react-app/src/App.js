import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <h2 className="page-title">Website Ilham</h2>
      <nav className="nav">
        <Link className="link" to="/">Home</Link>

        <Link className="link" to="profile">Profile</Link>

        <Link className="link" to="/blog">Blog</Link>

        <Link className="link" to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:id" element={<BlogDetail />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
