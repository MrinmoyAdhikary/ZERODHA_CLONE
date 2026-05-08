import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:8080/auth";
const DASHBOARD_URL = "http://localhost:5173";

function SignupBox() {
    const [number, setNumber] = useState("");
    const [formMode, setFormMode] = useState(null);
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleInput = (e) => {
        const value = e.target.value.replace(/\D/g, "").slice(0, 10);
        setNumber(value);
    };

    const saveLoggedInUser = (user) => {
        localStorage.setItem("stockerUser", JSON.stringify(user));
        setMessage(`Welcome, ${user.name}`);
        setFormMode(null);
        const params = new URLSearchParams({
            userId: user.id,
            name: user.name,
            number: user.number,
        });
        window.location.href = `${DASHBOARD_URL}?${params.toString()}`;
    };

    const checkNumber = async () => {
        if (number.length !== 10) {
            setMessage("Enter a valid 10-digit number");
            return;
        }

        setIsLoading(true);
        setMessage("");

        try {
            const response = await axios.post(`${API_URL}/check-number`, { number });
            const data = response.data;

            setFormMode(data.exists ? "login" : "signup");
            setPassword("");
        } catch (error) {
            setMessage(error.response?.data?.message || "Backend is not reachable");
        } finally {
            setIsLoading(false);
        }
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage("");

        try {
            const response = await axios.post(`${API_URL}/signup`, { name, number, password });
            const data = response.data;

            saveLoggedInUser(data.user);
        } catch (error) {
            setMessage(error.response?.data?.message || "Backend is not reachable");
        } finally {
            setIsLoading(false);
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage("");

        try {
            const response = await axios.post(`${API_URL}/login`, { number, password });
            const data = response.data;

            saveLoggedInUser(data.user);
        } catch (error) {
            setMessage(error.response?.data?.message || "Backend is not reachable");
        } finally {
            setIsLoading(false);
        }
    };

    return ( 
        <div className="container mt-5 p-3 ms-2">
            <h2>Sign up now</h2>
            <p className="text-muted fs-4">Or Track Existing Application</p>
            
            <div className="input-group mb-3">
                <input 
                    type="tel" 
                    className="form-control no-spinner" 
                    placeholder="Enter  10-digit number" 
                    aria-label="number" 
                    value={number}
                    onInput={handleInput}
                    style={{  letterSpacing: '1rem' }}
                />
                <div className="input-group-append">
                    <button className="btn btn-primary" type="button" onClick={checkNumber} disabled={isLoading}>
                        {isLoading ? "Please wait" : "Sign Up"}
                    </button>
                </div>
            </div>
            {message && <p className="text-muted">{message}</p>}

            {formMode && (
                <div className="auth-overlay">
                    <div className="auth-modal">
                        <button className="auth-close" type="button" onClick={() => setFormMode(null)}>
                            x
                        </button>
                        <h3>{formMode === "login" ? "Login" : "Create account"}</h3>
                        <p className="text-muted">Mobile number: {number}</p>

                        <form onSubmit={formMode === "login" ? handleLogin : handleSignup}>
                            {formMode === "signup" && (
                                <div className="mb-3">
                                    <label className="form-label">Name</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>
                            )}

                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input
                                    className="form-control"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>

                            <button className="btn btn-primary w-100" type="submit" disabled={isLoading}>
                                {isLoading ? "Please wait" : formMode === "login" ? "Login" : "Sign up"}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SignupBox;
