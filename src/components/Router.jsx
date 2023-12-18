import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Main";
import HistoryTable from "./HistoryTable";

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/history" element={<HistoryTable />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;