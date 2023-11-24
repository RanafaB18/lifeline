import { useContext } from "react";
import { LoadingContext } from "../context/LoadingContext";


export const useLoading = () => {
    const contextData = useContext(LoadingContext)

    if (!contextData) {
        throw new Error("Data cannot be used outside LoadingContext")
    }
    return contextData

}
