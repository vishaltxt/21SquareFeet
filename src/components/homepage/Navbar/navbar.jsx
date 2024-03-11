import React from 'react'
import './navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import squarefeet from './navbar images/21SQFT B 1.png'
import profile from './navbar images/Frame 6.png'
import { useSelector, useDispatch } from 'react-redux';
import { fetchSearchResults } from '../../../redux/actions/searchAction'
const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const dispatch = useDispatch();
    const [showResults, setShowResults] = useState(false);
    // const { data } = useSelector(state => state.searchReducer);
    const searchResults = useSelector(state => state.searchReducer.data);
    // console.log(searchResults)
    const [showMenu, setShowMenu] = useState(false);
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);
    const menuRef = useRef(null);
    const resultBoxRef = useRef(null);
    // const [name,setName]=useState('')
    useEffect(() => {
        if (searchQuery) {
            setShowResults(true);
            dispatch(fetchSearchResults(searchQuery));
        } else {
            setShowResults(false);
        }
    }, [searchQuery, dispatch]);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShowMenu(false);
                setIsBurgerOpen(false); // Close the burger menu when clicked outside
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (resultBoxRef.current && !resultBoxRef.current.contains(event.target)) {
                setShowResults(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    // const [barclose, setBarClose] = useState('')
    // const [filteredKeywords, setFilteredKeywords] = useState([]);
    // const closeSideBar = () => {
    // setBarClose('false')
    // }
    const toggleMenu = () => {
        setShowMenu(!showMenu);
        setIsBurgerOpen(!isBurgerOpen);  // Toggle menu visibility
    };
    const closeMenu = () => {
        setShowMenu(false);
        setIsBurgerOpen(false); // Close the burger menu
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            setShowResults(false);
        }
    };
    // const filteredResults = searchResults.data.filter(item =>
    // item.name.toLowerCase().includes(searchQuery.toLowerCase())
    // );

    const filteredResults = searchResults && searchResults.data ? searchResults.data.filter(item =>
        `${item.name} ${item.service} ${item.address} ${item.city} ${item.state}`.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.service.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (`${item.city}, ${item.state}`.toLowerCase().includes(searchQuery.toLowerCase()))
    ) : [];

    const navigate = useNavigate();
    const handleRedirect = (id) => {
        // Redirect logic here
        navigate('/searcher', { state: { id } });
        setShowResults(false);
    };
    return (
        <div>
            <div className={`navbar h-nav-resp ${showMenu ? 'show-menu' : ''}`} ref={menuRef}>
                <div className='div-1'>
                    <Link className='navbar-link-color' to='/'><img className='squarefeet' src={squarefeet} alt=""></img></Link>
                </div>
                <div className="search-box">
                    <div className="row">
                        <input className='search-nav-search' type="text" id="input-box" value={searchQuery} onChange={handleSearchChange} onKeyPress={handleKeyPress} placeholder="Search Keywords" autocomplete="off" />
                        <button><i className="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                    {showResults && (
                        <div className="result-box" ref={resultBoxRef}>
                            <ul>
                                {filteredResults && filteredResults.map(result => (
                                    <li key={result._id} onClick={() => handleRedirect(result)}>
                                        <div>{result.name} {result.service}</div>
                                        {/* <div>{result.service}</div> */}
                                        <div>{result.address}</div>
                                        <div>{result.city},{result.state}</div>
                                        {/* <div>{result.state}</div> */}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
                <div className='div-2'>
                    <div className='sidebar-slide'>
                        <ul className={`navbar-ul v-class-resp ${showMenu ? 'show-menu' : ''}`}>
                            <li><Link className='navbar-link-color' to="/" onClick={closeMenu}>Home</Link></li>
                            <li><Link className='navbar-link-color' to="/category" onClick={closeMenu}>Categories</Link></li>
                            <li><Link className='navbar-link-color' to="/blog" onClick={closeMenu}>Blog</Link></li>
                            <li><Link className='navbar-link-color' to="/contact" onClick={closeMenu}>Contact Us</Link></li>
                        </ul>
                    </div>
                    {/* <input className='navbar-search' type='text' placeholder='search here'></input> */}
                    <button className='nav-btn'><Link className='navbar-link-color-register' to="/login">Register</Link></button>
                    <Link className='footer-link-color' to="/profilesupplier"><img className='navbar-profile' src={profile} alt=''></img></Link>
                </div>
                <div className={`burger ${isBurgerOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>

        </div>
    )
}
export default Navbar;
