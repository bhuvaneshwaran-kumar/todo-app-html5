import { useAppSelector } from "@/store/store";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute: React.FC = () => {
    const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    } else {
        return <Outlet />;
    }
}

export default PrivateRoute;