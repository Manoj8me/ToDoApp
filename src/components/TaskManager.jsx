import React, { useState, useEffect } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { Container, Typography, Grid, Box, TextField, Button } from "@mui/material";

const TaskManager = () => {
    const [tasks, setTasks] = useState(() => {
        const storedTasks = localStorage.getItem("tasks");
        return storedTasks ? JSON.parse(storedTasks) : [];
    });

    const [darkMode, setDarkMode] = useState(() => {
        const storedTheme = localStorage.getItem("darkMode");
        return storedTheme === "true";
    });

    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        localStorage.setItem("darkMode", darkMode);
    }, [darkMode]);

    const addTask = (task) => setTasks([...tasks, task]);

    const deleteTask = (taskId) => setTasks(tasks.filter((task) => task.id !== taskId));

    const toggleTaskStatus = (taskId) => {
        setTasks(
            tasks.map((task) =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const filteredTasks = tasks.filter((task) =>
        task.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Container
            style={{
                backgroundColor: darkMode ? "#121212" : "#ffffff",
                color: darkMode ? "#ffffff" : "#000000",
                minHeight: "100vh",
                paddingTop: "20px",
            }}
        >
            <Box mt={4}>
                <Typography variant="h4" gutterBottom>
                    Task Manager
                </Typography>

                {/* Dark Mode Toggle Button */}
                <Button
                    variant="contained"
                    onClick={() => setDarkMode(!darkMode)}
                    style={{
                        backgroundColor: darkMode ? "#555" : "#1976d2",
                        color: darkMode ? "#ffffff" : "#ffffff",
                        marginBottom: "16px",
                    }}
                >
                    {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                </Button>

                <TaskForm addTask={addTask} darkMode={darkMode} />

                {/* Search Bar */}
                <TextField
                    label="Search Tasks"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search by task name"
                    InputProps={{
                        style: {
                            backgroundColor: darkMode ? "#333" : "#ffffff",
                            color: darkMode ? "#ffffff" : "#000000",
                        },
                    }}
                    InputLabelProps={{
                        style: {
                            color: darkMode ? "#ffffff" : "#000000",
                        },
                    }}
                />

                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <TaskList
                            title="Pending Tasks"
                            tasks={filteredTasks.filter(
                                (task) => !task.completed && !task.urgent
                            )}
                            toggleTaskStatus={toggleTaskStatus}
                            deleteTask={deleteTask}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TaskList
                            title="Urgent Tasks"
                            tasks={filteredTasks.filter((task) => task.urgent)}
                            toggleTaskStatus={toggleTaskStatus}
                            deleteTask={deleteTask}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TaskList
                            title="Completed Tasks"
                            tasks={filteredTasks.filter((task) => task.completed)}
                            toggleTaskStatus={toggleTaskStatus}
                            deleteTask={deleteTask}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default TaskManager;
