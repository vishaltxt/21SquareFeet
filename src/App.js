import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home page/home';
// import Category2 from './pages/home page/category page/category2.jsx';
import Suppliers from './components/homepage/explore/suppliers';
import Blog from './components/blog/Blog.jsx'
import Contact from './components/contact/pages/Contact.jsx'
import Signup from './components/contact/pages/Signup.jsx';
import Login from './components/contact/pages/Login.jsx';
import Supplier from './components/contact/pages/Supplier.jsx'
// import Registration from './components/contact/Registration.jsx'
import Read from './components/blog/Read.jsx';
import Read1 from './components/blog/Read1.jsx';
// import Catogary from './components/category/Catogary.jsx';
// import PrivacyP from './components/category/PrivacyP.jsx';
// import Terms from './components/category/Terms.jsx';
// import Contact from './components/contact/Contact.jsx';
// import Button from './components/category/POPup/Button.jsx'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/suppliers" element={<Suppliers />} />
          {/* <Route path="/category2" element={<Category2 />} /> */}
          {/* <Route path="/category" element={<Catogary />} /> */}
          {/* <Route path="/privacy" element={<PrivacyP />} /> */}
          {/* <Route path="/terms" element={<Terms />} /> */}
          {/* <Route path="/button" element={<Button />} /> */}


          <Route path="/blog" element={<Blog />} />
          <Route path="/read" element={<Read />} />
          <Route path="/read1" element={<Read1 />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/supplier" element={<Supplier />} />
          {/* <Route path="/registration" element={<Registration />} /> */}

        </Routes>
      </Router>
    </div>
  );
}

export default App;
