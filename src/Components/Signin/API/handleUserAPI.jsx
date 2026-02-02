import { useCallback, useState } from "react"
import { CreateUser } from "./CreateUserAPI.api";
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const handleCreateUser = useCallback(async (userdata) => {
        setLoading(true);
        try {
            const res = await CreateUser(userdata);
            setData(res.data);
        } catch (err) {
            console.error("Loi: ", err);
        } finally {
            setLoading(false);
        }
    }, [])
    return (
        <UserContext.Provider value={{ data, handleCreateUser, loading }}>
            {children}
        </UserContext.Provider>
    )
}