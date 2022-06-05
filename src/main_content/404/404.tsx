import React from "react";
import { useLocation } from "react-router-dom";

export const NotFound: React.FC = () => {
    const location = useLocation();

    return (
        <div className="main_container">
            <h2>Page with path {location.pathname} not found</h2>
        </div>
    );
}