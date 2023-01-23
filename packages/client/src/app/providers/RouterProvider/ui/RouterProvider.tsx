import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router } from 'react-router-dom';

interface WithRouterProps {
  children: React.ReactNode;
}

export const RouterProvider = ({ children }: WithRouterProps) => {
  return (
    <Router>
      <AnimatePresence mode='wait'>{children}</AnimatePresence>
    </Router>
  );
};
