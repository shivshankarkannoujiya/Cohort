const App = () => { 

    return React.createElement(
        "div",
        {},
        React.createElement(
            "h1",
            {className: "test"},
            "Chai Chill and react - React - 18"
        )
    )
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App))