import React, { useState, useEffect } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { Container, Typography, Grid, Box } from "@mui/material";

const TaskManager = () => {
    const [tasks, setTasks] = useState(() => {
        const storedTasks = localStorage.getItem("tasks");
        return storedTasks ? JSON.parse(storedTasks) : [];
    });

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    const deleteTask = (taskId) => {
        setTasks(tasks.filter((task) => task.id !== taskId));
    };

    const toggleTaskStatus = (taskId) => {
        setTasks(
            tasks.map((task) =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        );
    };

    return (
        <Container>
            <Box mt={4}>
                <Typography variant="h4" gutterBottom>
                    Task Manager
                </Typography>
                <TaskForm addTask={addTask} />
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <TaskList
                            title="Pending Tasks"
                            tasks={tasks.filter((task) => !task.completed && !task.urgent)}
                            toggleTaskStatus={toggleTaskStatus}
                            deleteTask={deleteTask}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TaskList
                            title="Urgent Tasks"
                            tasks={tasks.filter((task) => task.urgent)}
                            toggleTaskStatus={toggleTaskStatus}
                            deleteTask={deleteTask}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TaskList
                            title="Completed Tasks"
                            tasks={tasks.filter((task) => task.completed)}
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
