import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type TransitionBlockProps = {
  className?: string;
  children: ReactNode;
};

export const TransitionBlock: React.FC<TransitionBlockProps> = ({
  className,
  children,
}: TransitionBlockProps) => {
  return (
    <motion.main
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.main>
  );
};
