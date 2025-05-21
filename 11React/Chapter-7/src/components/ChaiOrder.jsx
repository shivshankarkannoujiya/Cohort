import { useState } from "react";

export const ChaiCounter = () => {

    const [countChai, setCountchai] = useState();

    const serveChai = () => {
        setCountchai(prev => prev + 1);
    }

    return (
        <div>
            <h2>Chai Counter</h2>
            <p>You have served: { countChai } cups of Chai</p>
            <button
                onClick={serveChai}
            >Serve Chai</button>
        </div>
    )
}