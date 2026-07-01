import { useAppSelector } from "@/store/store";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute: React.FC = () => {
    const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

    if (isLoggedIn) {
        return <Navigate to="/" replace />;
    } else {
        return <Outlet />;
    }
}

export default PublicRoute;