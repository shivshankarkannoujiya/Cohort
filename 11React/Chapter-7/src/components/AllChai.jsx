import { useEffect, useState } from "react";

export const ChaiMenu = () => {

    const [menu, setMenu] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch("/api/allchai")
            .then(res => res.json())
            .then(data => setMenu(data.data))
            .catch((error) => setError(error.message))
    }, [])

    return (
        <div>
            <h2>Available Chai</h2>
            <ul>
                {menu.map((chai) => (
                    <li key={chai.id}>
                        {chai.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}
