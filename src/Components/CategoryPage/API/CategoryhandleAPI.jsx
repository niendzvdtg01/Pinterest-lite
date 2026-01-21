import { useCallback, useEffect, useState } from "react";
import { CategoryAPI } from "./GetCategoryAPI.api";
import { CategoryContext } from "./CategoryContext";

export default function CategoryHandleAPI({ children }) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const handleCategoryAPI = useCallback(async (keyword) => {
        if (!keyword) return;
        try {
            setLoading(true);
            const res = await CategoryAPI(keyword);
            setData(prev => [...prev, ...res.data])
        } catch (err) {
            console.error("Category API error:", err);
            setData([])
        } finally {
            setLoading(false);
        }
    }, [])
    useEffect(() => {
        handleCategoryAPI();
    }, [handleCategoryAPI])
    return (
        <CategoryContext.Provider value={{ data, loading, handleCategoryAPI, }}>
            {children}
        </CategoryContext.Provider>
    )
}