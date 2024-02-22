import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home page/home';
// import Category2 from './pages/home page/category page/category2.jsx';
import Suppliers from './components/homepage/explore/suppliers';
import Signup from './pages/contactpage/signup/Signup.jsx';
import Login from './pages/contactpage/login/Login.jsx';
import Supplier from './pages/contactpage/supplier/Supplier.jsx'
// import Registration from './components/contact/Registration.jsx'
import Upcategary from './components/categorypage/upcategory/Upcategary.jsx';
import ViewDetails from './pages/categorypage/viewdetails/ViewDetails.jsx';
import Searcher from './pages/categorypage/searcher/Searcher.jsx';
import PrivacyP from './components/categorypage/privacy/PrivacyP.jsx'
import Terms from './components/categorypage/terms/Terms.jsx'
import Blog from './pages/blogpage/blog/Blog.jsx';
import Read from './pages/blogpage/read/Read.jsx';
import Read1 from './components/blogpage/read1/Read1.jsx'
import Contact from './components/contactpage/contact/Contact.jsx'
import AfLogged from './pages/categorypage/POPUP copy/AfLogged.jsx';
import Supplylogin from './pages/contactpage/supplierlogin/Supplylogin.jsx';
import ProfileSupplier from './pages/categorypage/userSupplier/profileSupplier.jsx';
// import Button from './components/category/POPUP copy/Button.jsx';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/suppliers" element={<Suppliers />} />
          {/* <Route path="/category2" element={<Category2 />} /> */}
          <Route path="/category" element={<Upcategary />} />
          <Route path="/viewdetails" element={<ViewDetails />} />
          <Route path="/searcher" element={<Searcher />} />
          <Route path="/privacyp" element={<PrivacyP />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/aflogged" element={<AfLogged />} />
          {/* <Route path="/button" element={<Button />} /> */}
          <Route path="/profilesupplier" element={<ProfileSupplier />} />

          <Route path="/blog" element={<Blog />} />
          <Route path="/read" element={<Read />} />
          <Route path="/read1" element={<Read1 />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/supplier" element={<Supplier />} />
          <Route path="/supplylogin" element={<Supplylogin />} />
          {/* <Route path="/registration" element={<Registration />} /> */}

        </Routes>
      </Router>
    </div>
  );
}

export default App;
