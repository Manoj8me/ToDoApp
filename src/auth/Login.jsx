import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
    const { login } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const storedEmail = localStorage.getItem("userEmail");
        const storedPassword = localStorage.getItem("userPassword");

        if (email === storedEmail && password === storedPassword) {
            login();
            alert("Login successful!");
            navigate("/tasks");
        } else {
            alert("Invalid email or password!");
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Login</h2>
            <form onSubmit={handleLogin} style={styles.form}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={styles.input}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={styles.input}
                />
                <button type="submit" style={styles.button}>
                    Login
                </button>
            </form>
            <p style={styles.text}>
                Don't have an account?{" "}
                <Link to="/signup" style={styles.link}>
                    Sign up here
                </Link>
            </p>
        </div>
    );
};

const styles = {
    container: {
        textAlign: "center",
        marginTop: "50px",
        padding: "20px",
        border: "1px solid #ddd",
        maxWidth: "400px",
        margin: "auto",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
    },
    title: {
        fontSize: "28px",
        color: "#333",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    input: {
        width: "90%",
        padding: "10px",
        margin: "10px 0",
        borderRadius: "4px",
        border: "1px solid #ccc",
    },
    button: {
        padding: "10px 20px",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
    },
    text: {
        marginTop: "10px",
    },
    link: {
        color: "#007bff",
        textDecoration: "none",
    },
};

export default Login;