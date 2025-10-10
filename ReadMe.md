<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }
    
    h1 {
      color: #2c3e50;
      border-bottom: 2px solid #3498db;
      padding-bottom: 10px;
    }
    
    h2 {
      color: #3498db;
      margin-top: 30px;
    }
    
    h3 {
      color: #2980b9;
    }
    
    a {
      color: #3498db;
      text-decoration: none;
    }
    
    a:hover {
      text-decoration: underline;
    }
    
    ul {
      padding-left: 20px;
    }
    
    li {
      margin-bottom: 8px;
    }
    
    pre {
      background-color: #f8f9fa;
      padding: 15px;
      border-radius: 5px;
      overflow-x: auto;
    }
    
    code {
      background-color: #f1f1f1;
      padding: 2px 5px;
      border-radius: 3px;
    }
    
    .media-container {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      margin: 30px 0;
    }
    
    .screenshot {
      flex: 1 1 300px;
      border: 1px solid #ddd;
      border-radius: 5px;
      overflow: hidden;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    
    .screenshot img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      display: block;
    }
    
    .screenshot-caption {
      padding: 10px;
      background-color: #f8f9fa;
      font-size: 0.9em;
    }
    
    .video-container {
      margin: 40px 0;
      text-align: center;
    }
    
    .video-container video {
      max-width: 100%;
      border-radius: 5px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    }
    
    .video-caption {
      margin-top: 10px;
      font-style: italic;
      color: #666;
    }
    
    .back-to-top {
      display: inline-block;
      margin-top: 20px;
      font-size: 0.9em;
    }
    
    .drive-link {
      display: inline-block;
      margin-top: 15px;
      padding: 10px 20px;
      background-color: #3498db;
      color: white;
      border-radius: 5px;
      text-decoration: none;
      transition: background-color 0.3s;
    }
    
    .drive-link:hover {
      background-color: #2980b9;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <h1> ChatMate – A Real-Time Chat Application</h1>
  <p>
    <strong>ChatMate</strong> is a real-time chat application built with 
    <strong>Spring Boot</strong>, <strong>WebSocket (STOMP)</strong>, 
    <strong>Spring Messaging</strong>, and <strong>React.js</strong>.  
    It allows users to join a <strong>public chat room</strong>, send 
    <strong>private messages</strong>, and manage their 
    <strong>online/offline status seamlessly</strong>.
  </p>

  <h2>📑 Table of Contents</h2>
  <ul>
    <li><a href="#features">Features</a></li>
    <li><a href="#tech-stack">Tech Stack</a></li>
    <li><a href="#project-structure">Project Structure</a></li>
    <li><a href="#screenshots">Screenshots</a></li>
    <li><a href="#demo">Demo Video</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#examples">Examples</a></li>
    <li><a href="#troubleshooting">Troubleshooting</a></li>
    <li><a href="#contributors">Contributors</a></li>
    <li><a href="#license">License</a></li>
  </ul>

  <h2 id="features">✨ Features</h2>
  <ul>
    <li> Real-time messaging using WebSocket (STOMP protocol)</li>
    <li> Public chat room for group discussions</li>
    <li> Private messaging between users</li>
    <li> Online/Offline status tracking</li>
    <li> User-friendly React.js frontend</li>
    <li> Notification of user join/leave events</li>
    <li> See when others are typing</li>
    <li> Send Emojis </li>
    <li> Spring Boot backend with scalable architecture</li>
  </ul>

  <h2 id="tech-stack">🛠 Tech Stack</h2>
  
  <h3>Backend (Spring Boot)</h3>
  <ul>
    <li>☕ Java 17 – Primary programming language</li>
    <li>🚀 Spring Boot 3.x – Application framework</li>
    <li>🔐 Spring Security – Authentication and authorization</li>
    <li>🗄 Spring Data JPA – Database abstraction layer</li>
    <li>🔌 WebSocket – Real-time bidirectional communication</li>
    <li>🔑 JWT – JSON Web Tokens for stateless authentication</li>
    <li>📦 Maven – Dependency management and build tool</li>
    <li>📡 WebSTOMP & Spring Messaging – Real-time messaging</li>
  </ul>

  <h3>Database</h3>
  <ul>
    <li>🐬 MySQL – Primary relational database for production</li>
    <li>🧪 H2 Database – In-memory database for testing</li>
  </ul>

  <h3>Frontend (Based on project structure)</h3>
  <ul>
    <li>⚛️ React.js – Frontend framework</li>
    <li>📜 JavaScript – Type-safe JavaScript development</li>
    <li>🔌 WebSocket Client – Real-time communication</li>
    <li>🌐 REST API Integration – HTTP client for API calls</li>
  </ul>

  <h3>DevOps & Tools</h3>
  <ul>
    <li>🐳 Docker – Containerization</li>
    <li>🧪 Spring Boot Test – Integration testing</li>
    <li>✂️ Lombok – Reduced boilerplate code</li>
    <li>📂 Git & GitHub – Version control</li>
  </ul>

  <h2 id="project-structure">📂 Project Structure</h2>
  <pre>
ChatMate-A-Real-Time-Chat-Application/
│── backend/       # Spring Boot backend (WebSocket, messaging, REST APIs)
│── frontend/      # React.js frontend (UI components, chat interface)
│── README.md      # Project documentation
  </pre>

  <h2 id="screenshots">📸 Screenshots</h2>
  
  <div class="media-container">
    <div class="screenshot">
      <img src="screenshots/login-page.png" alt="ChatMate Login Page">
      <div class="screenshot-caption">
        <strong>Login Page:</strong> User authentication interface
      </div>
    </div>
    <div class="screenshot">
      <img src="screenshots/public-chat.png" alt="Public Chat Room">
      <div class="screenshot-caption">
        <strong>Public Chat Room:</strong> Group conversation interface
      </div>
    </div>
    <div class="screenshot">
      <img src="screenshots/private-chat.png" alt="Private Messaging">
      <div class="screenshot-caption">
        <strong>Private Messaging:</strong> One-on-one conversation view
      </div>
    </div>
    <div class="screenshot">
      <img src="screenshots/user-list.png" alt="Online Users List">
      <div class="screenshot-caption">
        <strong>User List:</strong> Shows online/offline status of all users
      </div>
    </div>
    <div class="screenshot">
      <img src="screenshots/typing-indicator.png" alt="Typing Indicator">
      <div class="screenshot-caption">
        <strong>Typing Indicator:</strong> Shows when someone is typing
      </div>
    </div>
    <div class="screenshot">
      <img src="screenshots/emoji-picker.png" alt="Emoji Picker">
      <div class="screenshot-caption">
        <strong>Emoji Picker:</strong> Easy emoji selection interface
      </div>
    </div>
    <div class="screenshot">
      <img src="screenshots/MainPage.png" alt="Main Page">
      <div class="screenshot-caption">
        <strong>Main Page View :</strong> Showcase before login or signup page.
      </div>
    </div>
  </div>



  <h2 id="usage">▶️ Usage</h2>
  <ol>
    <li>Start the <strong>backend</strong> server.</li>
    <li>Start the <strong>frontend</strong> application.</li>
    <li>Open the app in your browser and:
      <ul>
        <li>Join the <strong>public chat room</strong></li>
        <li>Send <strong>private messages</strong> to specific users</li>
        <li>See who's <strong>online/offline</strong></li>
      </ul>
    </li>
  </ol>

  <h2 id="examples">💡 Examples</h2>
  <ul>
    <li><strong>Public Chat</strong>: Multiple users join and see all messages in real time.</li>
    <li><strong>Private Messaging</strong>: Send a direct message to another user using their username.</li>
    <li><strong>Status Tracking</strong>: Instantly see when a user comes online or goes offline.</li>
  </ul>

  <h2 id="troubleshooting">🐞 Troubleshooting</h2>
  <ul>
    <li>If WebSocket doesn't connect, check backend server logs.</li>
    <li>Ensure <strong>backend runs on port 8080</strong> and frontend connects correctly.</li>
    <li>Run <code>npm install</code> again if frontend dependencies fail.</li>
  </ul>

  <h2 id="contributors">👨‍💻 Contributors</h2>
  <ul>
    <li><a href="https://github.com/SAdhikary2">SAdhikary2</a> – Creator & Developer</li>
  </ul>

  <h2 id="license">📜 License</h2>
  <p>
    This project is licensed under the <strong>MIT License</strong> 
  </p>
  
  <a href="#" class="back-to-top">↑ Back to top</a>
</body>
</html>