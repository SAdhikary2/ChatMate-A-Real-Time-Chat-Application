import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {authService} from "../services/authService.js";
import '../styles/Signup.css';

const Signup = () => {

    const[username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        setMessage('');
        setIsLoading(true);

        try{
            const result = await authService.signup(username, email, password);
            if(result.success){
                setMessage('Account created successfully! Please login');
                setTimeout(() => {
                    navigate('/login');
                }, 2000);
            }
        }
        catch (error) {
                setMessage(error.message || 'Signup failed, please try again.');
                console.error('Signup failed', error);
        }
        finally {
            setIsLoading(false);
        }
    }



    return (
        <div className="signup-container">
            <div className="signup-box">
                <div className="signup-header">
                    <h1>Signup</h1>
                    <p>Create an account to start chatting</p>
                </div>

                <form onSubmit={handleSignup} className="signup-form">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="username-input"
                        maxLength={20}
                        required
                        disabled={isLoading}
                        />

                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="username-input"
                        maxLength={20}
                        required
                        disabled={isLoading}
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="username-input"
                        maxLength={20}
                        required
                        disabled={isLoading}
                    />
                    <button type="submit"
                            disabled={!username.trim() || !email.trim() || !password.trim() || isLoading}
                            className="join-btn"
                            >
                        {isLoading ? 'Creating Account...' : 'Signup'}
                    </button>

                    {message && (
                        <p className="auth-message"
                           style={{color: message.includes('successfully') ? '#4CaF50' : '#ff6b6b'}}>
                            {message}
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Signup;












