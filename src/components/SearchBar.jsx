import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            onSearch(query);
        }, 500); // Debounced search
        return () => clearTimeout(timeoutId);
    }, [query, onSearch]);

    return (
        <TextField
            label="Search Tasks"
            variant="outlined"
            fullWidth
            value={query}
            onChange={(e) => setQuery(e.target.value)}
        />
    );
};

export default SearchBar;
