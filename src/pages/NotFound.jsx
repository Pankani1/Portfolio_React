import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center">
            <motion.div
                className="text-center px-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <motion.div
                    className="text-8xl font-bold text-gray-900 dark:text-white mb-4"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    404
                </motion.div>

                <motion.h1
                    className="text-2xl font-semibold text-gray-900 dark:text-white mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    Page Not Found
                </motion.h1>

                <motion.p
                    className="text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >
                    Sorry, the page you're looking for doesn't exist.
                    It might have been moved or deleted.
                </motion.p>

                <motion.div
                    className="space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                >
                    <Link
                        to="/"
                        className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors duration-200"
                    >
                        Go Home
                    </Link>
                    <Link
                        to="/projects"
                        className="inline-flex items-center px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                    >
                        View Projects
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    );
}