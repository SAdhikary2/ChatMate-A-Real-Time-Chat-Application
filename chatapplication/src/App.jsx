import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Navbar from './components/Navbar';
import MainPage from "./pages/MainPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoute from './components/ProtectedRoute';
import Chat from "./pages/ChatArea.jsx";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar/>
                <Routes>
                    <Route path="/" element={<MainPage/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/signup" element={<Signup/>} />
                    <Route path="/chatarea" element={
                        <ProtectedRoute>
                            <Chat/>
                        </ProtectedRoute>
                    }/>
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </div>
        </Router>
    );
}
export default App;