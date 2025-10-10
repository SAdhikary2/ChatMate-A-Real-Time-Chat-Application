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
  FaArrowRight,
  FaShieldAlt,
  FaRocket,
  FaBrain
} from "react-icons/fa";
import { 
  FiMessageSquare, 
  FiUsers, 
  FiEye, 
  FiLock,
  FiZap,
  FiAward
} from "react-icons/fi";
import "../styles/MainPage.css";

const MainPage = () => {
  const isAuthenticated = authService.isAuthenticated();

  return (
    <div className="mainpage-container">
      {/* Advanced background elements */}
      <div className="background-elements">
        <div className="bg-gradient bg-gradient-1"></div>
        <div className="bg-gradient bg-gradient-2"></div>
        <div className="bg-grid"></div>
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>

      <div className="mainpage-content">
        {/* Header Section */}
        <div className="mainpage-header">
          <div className="header-badge">
            <FiAward className="badge-icon" />
            <span>Premium Communication Platform</span>
          </div>
          <h1>
            Elevate Your
            <span className="gradient-text"> Digital Conversations</span>
          </h1>
          <p className="header-subtitle">
            Enterprise-grade chat platform with advanced features, 
            real-time collaboration, and military-grade security
          </p>
        </div>

        {/* Stats Section */}
        <div className="stats-section">
          <div className="stat-item">
            <div className="stat-number">99.9%</div>
            <div className="stat-label">Uptime</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">256-bit</div>
            <div className="stat-label">Encryption</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50ms</div>
            <div className="stat-label">Latency</div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mainpage-features">
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <div className="feature-icon-bg"></div>
              <FiUsers className="feature-icon" />
            </div>
            <h3>Smart Group Chats</h3>
            <p>Advanced room management with intelligent participant tracking and moderation tools</p>
            <div className="feature-tag">Collaborative</div>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <div className="feature-icon-bg"></div>
              <FiEye className="feature-icon" />
            </div>
            <h3>Live Presence</h3>
            <p>Real-time online status, typing indicators, and activity monitoring</p>
            <div className="feature-tag">Real-time</div>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <div className="feature-icon-bg"></div>
              <FiLock className="feature-icon" />
            </div>
            <h3>Secure Private Messaging</h3>
            <p>End-to-end encrypted conversations with forward secrecy protection</p>
            <div className="feature-tag">Secure</div>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <div className="feature-icon-bg"></div>
              <FiZap className="feature-icon" />
            </div>
            <h3>Lightning Fast</h3>
            <p>Optimized WebSocket connections with sub-50ms message delivery</p>
            <div className="feature-tag">Performance</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          {isAuthenticated ? (
            <div className="cta-content">
              <h2>Ready to Connect?</h2>
              <p>Join the conversation and start collaborating instantly</p>
              <Link to="/chatarea" className="cta-button primary">
                <span>Enter Workspace</span>
                <FaArrowRight className="btn-icon" />
              </Link>
            </div>
          ) : (
            <div className="cta-content">
              <h2>Start Your Journey</h2>
              <p>Join thousands of professionals already communicating securely</p>
              <div className="cta-buttons">
                <Link to="/signup" className="cta-button primary">
                  <FaUserPlus className="btn-icon" />
                  <span>Get Started Free</span>
                </Link>
                <Link to="/login" className="cta-button secondary">
                  <FaSignInAlt className="btn-icon" />
                  <span>Sign In</span>
                </Link>
              </div>
              <div className="cta-footer">
                <FaShieldAlt className="security-icon" />
                <span>Enterprise-grade security • No credit card required</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainPage;