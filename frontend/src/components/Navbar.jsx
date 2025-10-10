import { Link, useNavigate } from "react-router-dom";
import { authService } from "../services/authService.js";
import { 
  FiMessageCircle, 
  FiLogOut, 
  FiUser,
  FiChevronDown,
  FiSettings,
  FiShield
} from "react-icons/fi";
import { useState, useRef, useEffect } from "react";
import '../styles/Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const isAuthenticated = authService.isAuthenticated();
    const currentUser = authService.getCurrentUser();

    const handleLogout = async () => {
        try {
            await authService.logout();
            navigate('/login');
        } catch (error) {
            console.error('Logout failed', error);
            localStorage.clear();
            navigate('/login');
        }
    }

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Brand Section */}
                <Link to="/" className="navbar-brand">
                    <div className="brand-logo">
                        <FiMessageCircle className="logo-icon" />
                    </div>
                    <div className="brand-text">
                        <span className="brand-name">ChatMate</span>
                        <span className="brand-tagline">Enterprise</span>
                    </div>
                </Link>

                {/* Navigation Menu */}
                <div className="navbar-menu">
                    {isAuthenticated ? (
                        <>
                            <Link to="/chatarea" className="navbar-link nav-primary">
                                
                                Chat Room
                            </Link>
                            
                            <div className="navbar-user" ref={dropdownRef}>
                                <button 
                                    className="user-toggle"
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                >
                                    <div className="user-avatar">
                                        {currentUser?.username?.charAt(0)?.toUpperCase() || 'U'}
                                    </div>
                                    <div className="user-info">
                                        <span className="user-name">{currentUser?.username}</span>
                                        <span className="user-status">Online</span>
                                    </div>
                                    <FiChevronDown className={`dropdown-arrow ${isDropdownOpen ? 'rotate' : ''}`} />
                                </button>

                                {isDropdownOpen && (
                                    <div className="user-dropdown">
                                        <div className="dropdown-header">
                                            <div className="dropdown-avatar">
                                                {currentUser?.username?.charAt(0)?.toUpperCase() || 'U'}
                                            </div>
                                            <div className="dropdown-user-info">
                                                <span className="dropdown-name">{currentUser?.username}</span>
                                                <span className="dropdown-email">{currentUser?.email || 'user@chatmate.com'}</span>
                                            </div>
                                        </div>
                                        
                                        <div className="dropdown-divider"></div>
                                        
                                        <Link to="/profile" className="dropdown-item">
                                            <FiUser className="dropdown-icon" />
                                            Profile Settings
                                        </Link>
                                        
                                        <Link to="/security" className="dropdown-item">
                                            <FiShield className="dropdown-icon" />
                                            Security
                                        </Link>
                                        
                                        <div className="dropdown-divider"></div>
                                        
                                        <button 
                                            className="dropdown-item logout-item"
                                            onClick={handleLogout}
                                        >
                                            <FiLogOut className="dropdown-icon" />
                                            Sign Out
                                        </button>
                                    </div>
                                )}
                            </div>
                        </>
                    ) : (
                        <div className="auth-section">
                            <Link to='/login' className="navbar-link nav-secondary">
                                Sign In
                            </Link>
                            <Link to='/signup' className="navbar-link nav-primary">
                                Get Started
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;