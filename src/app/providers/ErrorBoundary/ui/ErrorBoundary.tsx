import React, { ErrorInfo, Suspense } from 'react';
import { ErrorPage } from 'widgets/ErrorPage';

interface IErrorBoundaryProps {
    children: React.ReactNode;
}

interface IErrorBoundaryState {
    hasError: boolean;
}

export class ErrorBoundary extends React.Component<IErrorBoundaryProps, IErrorBoundaryState> {
    constructor(props: IErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // You can also log the error to an error reporting service
        console.log(error, errorInfo);
    }

    render() {
        const { children } = this.props;
        const { hasError } = this.state;

        if (hasError) {
            // You can render any custom fallback UI
            return <Suspense fallback=""><ErrorPage /></Suspense>;
        }

        return children;
    }
}
