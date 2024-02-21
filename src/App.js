import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home page/home';
// import Category2 from './pages/home page/category page/category2.jsx';
import Suppliers from './components/homepage/explore/suppliers';
import Signup from './components/contact/pages/Signup.jsx';
import Login from './components/contact/pages/Login.jsx';
import Supplier from './components/contact/pages/Supplier.jsx'
// import Registration from './components/contact/Registration.jsx'
import Upcategary from './components/category/Component/Upcategary.jsx';
import ViewDetails from './components/category/Component/ViewDetails.jsx';
import Searcher from './components/category/Component/Searcher.jsx';
import PrivacyP from './components/category/Component/PrivacyP.jsx'
import Terms from './components/category/Component/Terms.jsx'
import Blog from './components/blog/pages/Blog.jsx';
import Read from './components/blog/pages/Read.jsx';
import Read1 from './components/blog/pages/Read1.jsx'
import Contact from './components/contact/pages/Contact.jsx'
import AfLogged from './components/category/POPUP copy/AfLogged.jsx';
import Supplylogin from './components/contact/pages/Supplylogin.jsx';
import Button from './components/category/POPUP copy/Button.jsx';

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
          <Route path="/button" element={<Button />} />

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
