import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error("Uncaught error:", error, errorInfo);
    this.setState({ error: error, errorInfo: errorInfo });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div style={{ padding: '2rem', backgroundColor: '#FF4136', color: 'white', minHeight: '100vh', fontFamily: 'monospace' }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Something went wrong.</h1>
          <p>The application crashed. This is the error that was caught:</p>
          <div style={{ backgroundColor: 'rgba(0,0,0,0.2)', padding: '1rem', marginTop: '1rem', borderRadius: '8px' }}>
            <h2 style={{ fontSize: '1.5rem' }}>Error:</h2>
            <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
              {this.state.error && this.state.error.toString()}
            </pre>
            <h2 style={{ fontSize: '1.5rem', marginTop: '1rem' }}>Component Stack:</h2>
            <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
              {this.state.errorInfo && this.state.errorInfo.componentStack}
            </pre>
          </div>
          <button 
            onClick={() => window.location.reload()}
            style={{ marginTop: '2rem', padding: '0.5rem 1rem', cursor: 'pointer', backgroundColor: 'white', color: 'black', border: 'none', borderRadius: '4px', fontSize: '1rem' }}
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
