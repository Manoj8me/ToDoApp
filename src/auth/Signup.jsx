import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPassword", password);
        alert("Signup successful! Please log in.");
        navigate("/login");
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Signup</h2>
            <form onSubmit={handleSignup} style={styles.form}>
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
                    Signup
                </button>
            </form>
            <p style={styles.text}>
                Already have an account?{" "}
                <Link to="/login" style={styles.link}>
                    Login here
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

export default Signup;
