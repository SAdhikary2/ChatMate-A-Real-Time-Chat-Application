import React from "react";
import { Link } from "react-router-dom";
import { authService } from "../services/authService";
import { 
  FaComments, 
  FaUsers, 
  FaUserLock, 
  FaKeyboard, 
  FaSignInAlt, 
  FaUserPlus,
  FaArrowRight
} from "react-icons/fa";
import "../styles/MainPage.css";

const MainPage = () => {
  const isAuthenticated = authService.isAuthenticated();

  return (
    <div className="mainpage-container">
      {/* Subtle background elements */}
      <div className="background-elements">
        <div className="bg-circle bg-circle-1"></div>
        <div className="bg-circle bg-circle-2"></div>
        <div className="bg-circle bg-circle-3"></div>
      </div>

      <div className="mainpage-content">
        <div className="mainpage-header">
          <div className="mainpage-icon">
            <FaComments className="header-icon" />
          </div>
          <h1>Connect & Collaborate in Real-Time</h1>
          <p>
            Experience seamless communication with our premium chat platform
          </p>
        </div>

        <div className="mainpage-features">
          <div className="feature">
            <div className="feature-icon">
              <FaUsers className="feature-react-icon" />
            </div>
            <h3>Group Chats</h3>
            <p>Create rooms and chat with multiple people simultaneously</p>
          </div>
          <div className="feature">
            <div className="feature-icon">
              <div className="status-indicator">
                <span className="online-dot"></span>
                <FaUserLock className="feature-react-icon" />
              </div>
            </div>
            <h3>Online Status</h3>
            <p>See who's available and their current activity status</p>
          </div>
          <div className="feature">
            <div className="feature-icon">
              <FaKeyboard className="feature-react-icon" />
            </div>
            <h3>Typing Indicators</h3>
            <p>Know when others are typing in real-time</p>
          </div>
          <div className="feature">
            <div className="feature-icon">
              <FaUserLock className="feature-react-icon" />
            </div>
            <h3>Private Messaging</h3>
            <p>Secure one-on-one conversations with end-to-end encryption</p>
          </div>
        </div>

        <div className="mainpage-actions">
          {isAuthenticated ? (
            <Link to="/chatarea" className="primary-btn">
              <span>Enter Chat Area</span>
              <FaArrowRight className="btn-icon" />
            </Link>
          ) : (
            <div className="auth-buttons">
              <Link to="/login" className="secondary-btn">
                <FaSignInAlt className="btn-icon" />
                <span>Login</span>
              </Link>
              <Link to="/signup" className="secondary-btn">
                <FaUserPlus className="btn-icon" />
                <span>Create Account</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainPage;