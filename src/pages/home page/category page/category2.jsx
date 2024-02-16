import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Upcategory from '../../../components/category/Component/Upcategary'
import ViewDetails from '../../../components/category/Component/ViewDetails'
import Searcher from '../../../components/category/Component/Searcher'
const Category2 = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/category" element={<Upcategory />} />
                    <Route path='/ViewDetails' element={<ViewDetails />} />
                    <Route path='/Searcher' element={<Searcher />} />
                    {/* <Route path="/privacy" element={<PrivacyP />} /> */}
                    {/* <Route path="/terms" element={<Terms />} /> */}
                </Routes>
            </Router>
        </div>
    )
}

export default Category2;
