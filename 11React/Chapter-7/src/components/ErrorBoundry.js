import { Component } from "react";

export class ErrorBoundary extends Component {

    constructor(props) {
        super(props)
        this.state = {hasError: false, message: ""}
    }

    static getDerivedStateFromError(error) {
        // Update state so next render show fallback UI
        return {hasError: true, message: error.message}
    }

    componentDidCatch(error, info) {
        console.error("Error caught by EB: ", error, info);
    }

    render() {
        if (this.state.hasError) {
            <div>
                <h2>Something is wrong here</h2>
                {this.state.message}
            </div>
        }
        return this.props.children;
    }
    
}
