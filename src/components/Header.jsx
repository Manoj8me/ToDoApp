import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { ThemeContext } from '../context/ThemeContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const { darkMode, toggleTheme } = useContext(ThemeContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        navigate('/login');
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    To-Do App
                </Typography>
                <IconButton color="inherit" onClick={toggleTheme}>
                    {darkMode ? <Brightness7 /> : <Brightness4 />}
                </IconButton>
                <Button color="inherit" onClick={handleLogout}>
                    Logout
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
