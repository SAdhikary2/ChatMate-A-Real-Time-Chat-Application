<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#configuration">Configuration</a></li>
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
    <li> Spring Boot backend with scalable architecture</li>
  </ul>

  <h2 id="tech-stack">🛠 Tech Stack</h2>
  <h3>Frontend</h3>
  <ul>
    <li>⚛️ React.js</li>
    <li>🎨 CSS</li>
  </ul>
  <h3>Backend</h3>
  <ul>
    <li>☕ Spring Boot</li>
    <li>🔌 Spring Messaging (WebSocket STOMP)</li>
    <li>📦 Java</li>
  </ul>
  <h3>Other Tools</h3>
  <ul>
    <li>Node.js (for frontend build)</li>
    <li>Maven/Gradle (for backend build)</li>
  </ul>

  <h2 id="project-structure">📂 Project Structure</h2>
  <pre>
ChatMate-A-Real-Time-Chat-Application/
│── backend/       # Spring Boot backend (WebSocket, messaging, REST APIs)
│── frontend/      # React.js frontend (UI components, chat interface)
│── README.md      # Project documentation
  </pre>

  <h2 id="installation">⚙️ Installation</h2>
  <h3>1️⃣ Clone the repository</h3>
  <pre><code>git clone https://github.com/SAdhikary2/ChatMate-A-Real-Time-Chat-Application.git
cd ChatMate-A-Real-Time-Chat-Application</code></pre>

  <h3>2️⃣ Backend Setup (Spring Boot)</h3>
  <pre><code>cd backend
./mvnw spring-boot:run</code></pre>

  <h3>3️⃣ Frontend Setup (React.js)</h3>
  <pre><code>cd frontend
npm install
npm start</code></pre>
  <p>
    The frontend runs by default on <strong>http://localhost:3000</strong> 
    and connects to the backend WebSocket server.
  </p>

  <h2 id="usage">▶️ Usage</h2>
  <ol>
    <li>Start the <strong>backend</strong> server.</li>
    <li>Start the <strong>frontend</strong> application.</li>
    <li>Open the app in your browser and:
      <ul>
        <li>Join the <strong>public chat room</strong></li>
        <li>Send <strong>private messages</strong> to specific users</li>
        <li>See who’s <strong>online/offline</strong></li>
      </ul>
    </li>
  </ol>

  <h2 id="configuration">⚙️ Configuration</h2>
  <ul>
    <li>WebSocket endpoint: <code>/ws</code></li>
    <li>Public topic: <code>/topic/public</code></li>
    <li>Private messaging prefix: <code>/user/{username}/queue/messages</code></li>
  </ul>
  <p>
    Update backend configs in <code>application.properties</code> and 
    frontend API/WebSocket endpoints in 
    <code>frontend/src/config.js</code> if required.
  </p>

  <h2 id="examples">💡 Examples</h2>
  <ul>
    <li><strong>Public Chat</strong>: Multiple users join and see all messages in real time.</li>
    <li><strong>Private Messaging</strong>: Send a direct message to another user using their username.</li>
    <li><strong>Status Tracking</strong>: Instantly see when a user comes online or goes offline.</li>
  </ul>

  <h2 id="troubleshooting">🐞 Troubleshooting</h2>
  <ul>
    <li>If WebSocket doesn’t connect, check backend server logs.</li>
    <li>Ensure <strong>backend runs on port 8080</strong> and frontend connects correctly.</li>
    <li>Run <code>npm install</code> again if frontend dependencies fail.</li>
  </ul>

  <h2 id="contributors">👨‍💻 Contributors</h2>
  <ul>
    <li><a href="https://github.com/SAdhikary2">SAdhikary2</a> – Creator & Developer</li>
  </ul>

  <h2 id="license">📜 License</h2>
  <p>
    This project is licensed under the <strong>MIT License</strong> – 
    free to use, modify, and distribute.
  </p>
</body>
</html>
