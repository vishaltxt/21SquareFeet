import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home page/home';
import Suppliers from './components/homepage/explore/suppliers';
import Category from './components/category/Catogary';
import Blog from './components/blog/Blog.jsx'
// import Contact from './components/contact/Contact.jsx'
// import Signup from './components/contact/Signup.jsx';
// import Login from './components/contact/Login.jsx';
// import Supplier from './components/contact/Supplier.jsx'
// import Registration from './components/contact/Registration.jsx'
import PrivacyP from './components/category/PrivacyP.jsx';
import Terms from './components/category/Terms.jsx';
import Read from './components/blog/Read.jsx';
import Read1 from './components/blog/Read1.jsx';
// import Contact from './components/contact/Contact.jsx';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/blog" element={<Blog />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/suppliers" element={<Suppliers />} />
          {/* <Route path="/signup" element={<Signup />} /> */}
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/supplier" element={<Supplier />} /> */}
          {/* <Route path="/registration" element={<Registration />} /> */}
          <Route path="/category" element={<Category />} />
          <Route path="/privacy" element={<PrivacyP />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/read" element={<Read />} />
          <Route path="/read1" element={<Read1 />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
