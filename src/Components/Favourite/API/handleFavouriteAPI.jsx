import { useEffect, useState, useCallback } from "react";
import { FavouriteContext } from "./FavouriteContext";
import { fetchFavouritesAPI } from "./favourite.api";

export function FavouriteProvider({ children }) {
    const [favourites, setFavourites] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchFavourites = useCallback(async () => {
        try {
            setLoading(true);
            const res = await fetchFavouritesAPI();
            setFavourites(res.data);
        } catch (err) {
            console.error("Fetch favourite failed:", err);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchFavourites();
    }, [fetchFavourites]);

    return (
        <FavouriteContext.Provider
            value={{ favourites, loading, fetchFavourites }}
        >
            {children}
        </FavouriteContext.Provider>
    );
}

