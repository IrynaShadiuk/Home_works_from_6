import { useLocation } from "react-router-dom";

export const useRoute = (path: string): boolean => {
    const location = useLocation();
    return path === location.pathname;
}