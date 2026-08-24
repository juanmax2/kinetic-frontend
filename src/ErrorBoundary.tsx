import { Component, type ErrorInfo, type ReactNode } from "react";

interface ErrorBoundaryState {
    hasError: boolean;
}

interface ErrorBoundaryProps {
    children: ReactNode;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps){
        super(props)
        this.state = { hasError: false }
    }

    public static getDerivedStateFromError(): ErrorBoundaryState {
        return { hasError: true }
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.error("Error: ", error)
        console.info("Error info: ", errorInfo)
    }

    render() {
        if (this.state.hasError){
            return <h1>Oops! Something wrong happened.</h1>
        }

        return this.props.children;
    }
}

export default ErrorBoundary;