import { ErrorBanner } from '@/shared/ui/ErrorBanner';
import { Loader } from '@/shared/ui/Loader';
import React, { ErrorInfo, ReactNode, Suspense } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

// eslint-disable-next-line import/no-default-export
export default class ErrorBoundary extends React.PureComponent<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ error });
    console.log(error, errorInfo);
  }

  render() {
    const { hasError, error } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <Suspense fallback={<Loader />}>
          <ErrorBanner message={error?.message} hasRedirectButton={true} />
        </Suspense>
      );
    }
    return children;
  }
}
