import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Welcome to the To-Do App!</h1>
            <p style={styles.subtitle}>
                Organize your tasks and stay productive. Manage your to-do list efficiently.
            </p>
            <div style={styles.buttonContainer}>
                <Link to="/login" style={styles.button}>
                    Login
                </Link>
                <Link to="/signup" style={styles.button}>
                    Signup
                </Link>
            </div>
        </div>
    );
};

const styles = {
    container: {
        textAlign: "center",
        marginTop: "50px",
        padding: "20px",
        border: "1px solid #ddd",
        maxWidth: "600px",
        margin: "auto",
        borderRadius: "8px",
        backgroundColor: "#f0f8ff",
    },
    title: {
        fontSize: "32px",
        fontWeight: "bold",
        color: "#333",
    },
    subtitle: {
        fontSize: "18px",
        color: "#666",
        marginBottom: "20px",
    },
    buttonContainer: {
        display: "flex",
        justifyContent: "center",
        gap: "20px",
    },
    button: {
        padding: "10px 20px",
        backgroundColor: "#007bff",
        color: "white",
        textDecoration: "none",
        borderRadius: "4px",
        fontWeight: "bold",
        transition: "background-color 0.3s ease",
    },
    buttonHover: {
        backgroundColor: "#0056b3",
    },
};

export default Home;
