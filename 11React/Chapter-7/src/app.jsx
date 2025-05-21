import { useState, useEffect } from "react";
import { ChaiMenu } from "./components/AllChai";
import { useSpecialChai } from "./hooks/useSpecialChai.js";


export const App = () => {

    const { chai, loading, error } = useSpecialChai();
    console.log(chai)
    const [message, setMessage] = useState("loading...");

    useEffect(() => {
        
        fetch(`/api`)
            .then((res) => res.json())
            .then((data) => setMessage(data.message))
            .catch((err) => setMessage(err.message ?? `Failed to load`))
    }, [])


    if (loading) return <h2>Loading...</h2>
    if (error) return <h2>Error: { error }</h2>

    return (
        <div>
            <h1>Welcome to Chai and React</h1>
            <p>Serving hot chai with react</p>
            <h2>{message}</h2>
            <ChaiMenu />
            <h2>Available Special Chai</h2>
            <div>
                <ul>
                    {chai.map(chai => {
                        return (
                            <li key={chai.id}> { chai.name }</li>
                        )
                    })}
                </ul>
            </div>
            <h3>{ chai.name }</h3>
        </div>
    )
} 