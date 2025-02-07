import React, { useState } from "react";
import { TextField, Button, Checkbox, FormControlLabel } from "@mui/material";

const TaskForm = ({ addTask }) => {
    const [taskName, setTaskName] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [urgent, setUrgent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!taskName) return;

        addTask({
            id: Date.now(),
            name: taskName,
            dueDate: dueDate,
            urgent: urgent,
            completed: false,
        });

        setTaskName("");
        setDueDate("");
        setUrgent(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Task Name"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                fullWidth
                required
            />
            <TextField
                label="Due Date"
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                fullWidth
                InputLabelProps={{ shrink: true }}
                required
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={urgent}
                        onChange={(e) => setUrgent(e.target.checked)}
                    />
                }
                label="Mark as Urgent"
            />
            <Button variant="contained" type="submit" color="primary">
                Add Task
            </Button>
        </form>
    );
};

export default TaskForm;
