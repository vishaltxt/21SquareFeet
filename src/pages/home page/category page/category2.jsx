import React from 'react'
import { BrowserRouter as Router, Routes } from 'react-router-dom'
// import Terms from '../../../components/category/Terms.jsx';
// import PrivacyP from '../../../components/category/PrivacyP.jsx';
// import Catogary from '../../../components/category/Catogary.jsx';

const Category2 = () => {
    return (
        <div>
            <Router>
                <Routes>
                    {/* <Route path="/category" element={<Catogary />} /> */}
                    {/* <Route path="/privacy" element={<PrivacyP />} /> */}
                    {/* <Route path="/terms" element={<Terms />} /> */}
                </Routes>
            </Router>
        </div>
    )
}

export default Category2;
