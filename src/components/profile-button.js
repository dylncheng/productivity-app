import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const ProfButton = () => {
    const { isAuthenticated } = useAuth0();
    const navigate = useNavigate();
    const routeChange = () => {
        let path = '/profile';
        navigate(path);
    }

    return (
        isAuthenticated && (
            <button type="button" class="btn btn-outline-secondary" onClick={routeChange}>
                Profile
            </button>
        )
    )
}

export default ProfButton;