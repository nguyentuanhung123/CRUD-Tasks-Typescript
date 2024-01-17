import React from "react";
import { Routes, Route } from 'react-router-dom';

import Home from "./pages/Home";
import Tasks from "./pages/Tasks";

const Container: React.FC = () => {
    return (
        <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/tasks/*" element={<Tasks />} />
        </Routes>
    )
}

export default Container;


