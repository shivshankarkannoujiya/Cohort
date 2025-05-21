import { useState, useEffect } from "react";
import { ChaiMenu } from "./components/AllChai";


export const App = () => {

    const [message, setMessage] = useState("loading...");

    useEffect(() => {
        
        fetch(`/api`)
            .then((res) => res.json())
            .then((data) => setMessage(data.message))
            .catch((err) => setMessage(err.message ?? `Failed to load`))
    }, [])

    return (
        <div>
            <h1>Welcome to Chai and React</h1>
            <p>Serving hot chai with react</p>
            <h2>{message}</h2>
            <ChaiMenu/>
        </div>
    )
} 