import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({ user }) {
    if (user === undefined) return null;
    return user ? <Outlet /> : <Navigate to="/home" replace />
}