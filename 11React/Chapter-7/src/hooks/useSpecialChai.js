import { useEffect, useState } from "react";

export const useSpecialChai = () => {

    const [chai, setChai] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {

        fetch("api/special-chai")
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`Failed to fetch special chai`)
                }
                return res.json()
            })
            .then((data) => {
                console.log("DATA: ", data);
                setChai(data);
                setLoading(false)
            })
            .catch((err) => {
                setError(err?.message ?? "Something went wrong");
                setLoading(false)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return { chai, loading, error };
}

/**
 * @description
 * Ek function hai jo 3 values return krta hai in an object
 * Jaha use krenge Destrucure kr lenge
 */