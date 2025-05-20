import React from "https://esm.sh/react@19.1.0";
import ReactDOM from "https://esm.sh/react-dom@19.1.0/client";


const Chai = (props) => {
    console.log(props)
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("p", {}, props.cost)
    ])
}

// {
//     name: "Masala Chai",
//     cost: 1000
// }

// {
//     <div>
//         <h1>{ props.name }</h1>
//         <p>{ props.cost }</p>
//     </div>
// }


const App = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {}, "Chai Variations"),
            React.createElement(Chai, {
                name: "Masala Chai",
                cost: 10000
            }),
            React.createElement(Chai, {
                name: "Ginger Chai",
                cost: 10000
            }),
            React.createElement(Chai, {
                name: "Ice Tea",
                cost: 10000
            }),
        ]
    )
}

// {
//     <div id="root">
//         <div>
//             <h1>Chai Variations</h1>
//             <div>
//                 <h1>Masala Chai</h1>
//                 <p>10000</p>
//             </div>
//             <div>
//                 <h1>Ginger Chai</h1>
//                 <p>10000</p>
//             </div>
//             <div>
//                 <h1>Ice Tea</h1>
//                 <p>10000</p>
//             </div>
//         </div>
//     </div>
// }

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));