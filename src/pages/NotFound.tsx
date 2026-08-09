import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center px-4 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="mb-2 text-9xl font-black text-zinc-200 dark:text-zinc-800">404</h1>
        <h2 className="mb-6 text-3xl font-bold">Page Not Found</h2>
        <p className="mb-8 text-zinc-600 dark:text-zinc-400">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <Link
          to="/"
          className="rounded-full bg-blue-600 px-8 py-3 font-medium text-white transition-colors hover:bg-blue-700"
        >
          Go Back Home
        </Link>
      </motion.div>
    </div>
  );
}
