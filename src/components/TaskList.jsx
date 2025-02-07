import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Checkbox,
  Typography,
  Paper,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const TaskList = ({ title, tasks, toggleTaskStatus, deleteTask }) => {
  return (
    <Paper elevation={3} style={{ padding: "16px", marginTop: "16px" }}>
      <Typography variant="h6">{title}</Typography>
      <List>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <ListItem key={task.id}>
              <Checkbox
                checked={task.completed}
                onChange={() => toggleTaskStatus(task.id)}
              />
              <ListItemText
                primary={`${task.name} (Due: ${task.dueDate || "No due date"})`}
                secondary={task.urgent ? "Urgent" : ""}
              />
              <IconButton onClick={() => deleteTask(task.id)} color="secondary">
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))
        ) : (
          <Typography>No tasks available</Typography>
        )}
      </List>
    </Paper>
  );
};

export default TaskList;
