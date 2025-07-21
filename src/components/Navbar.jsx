import { useTheme } from '../theme';
import { Link, useLocation } from 'react-router-dom';
import {
    FiSun,
    FiMoon,
    FiHome,
    FiUser,
    FiFolder,
    FiMail,
    FiMenu
} from 'react-icons/fi';

export default function Navbar() {
    const { toggleTheme, isDarkMode } = useTheme();
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    const navigationItems = [
        { path: '/', label: 'Home', icon: FiHome },
        { path: '/about', label: 'About', icon: FiUser },
        { path: '/projects', label: 'Projects', icon: FiFolder },
        { path: '/contact', label: 'Contact', icon: FiMail },
    ];

    return (
        <>
            {/* Desktop Navbar - Hidden on mobile */}
            <header className="hidden md:block sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 shadow-sm transition-colors duration-300">
                <nav className="container mx-auto flex justify-between items-center py-6 px-6">
                    <h1 className="text-2xl font-semibold text-gray-900 dark:text-white tracking-tight">Samuel Pankani</h1>
                    <div className="flex items-center gap-8">
                        <div className="flex gap-6">
                            {navigationItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`text-sm font-medium transition-colors duration-200 hover:text-blue-600 ${isActive(item.path) ? 'text-blue-600' : 'text-gray-600 dark:text-gray-300'
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>

                        {/* Enhanced Theme Toggle Button */}
                        <button
                            onClick={toggleTheme}
                            className={`
                                relative w-14 h-7 rounded-full p-1 transition-all duration-300 ease-in-out
                                ${isDarkMode ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'}
                                hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900
                            `}
                            aria-label="Toggle dark mode"
                        >
                            <div
                                className={`
                                    flex items-center justify-center w-5 h-5 bg-white rounded-full shadow-lg
                                    transition-all duration-300 ease-in-out transform
                                    ${isDarkMode ? 'translate-x-7' : 'translate-x-0'}
                                `}
                            >
                                {isDarkMode ? (
                                    <FiMoon size={12} className="text-gray-700" />
                                ) : (
                                    <FiSun size={12} className="text-yellow-500" />
                                )}
                            </div>

                            {/* Background icons */}
                            <FiSun
                                size={14}
                                className={`
                                    absolute left-1.5 top-1.5 transition-opacity duration-300
                                    ${isDarkMode ? 'opacity-0' : 'opacity-100 text-gray-400'}
                                `}
                            />
                            <FiMoon
                                size={14}
                                className={`
                                    absolute right-1.5 top-1.5 transition-opacity duration-300
                                    ${isDarkMode ? 'opacity-100 text-white' : 'opacity-0'}
                                `}
                            />
                        </button>
                    </div>
                </nav>
            </header>

            {/* Mobile Top Header - Only visible on mobile */}
            <header className="md:hidden sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 shadow-sm transition-colors duration-300">
                <nav className="flex justify-between items-center py-4 px-4">
                    <h1 className="text-xl font-semibold text-gray-900 dark:text-white tracking-tight">Samuel Pankani</h1>

                    {/* Mobile Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className={`
                            relative w-12 h-6 rounded-full p-0.5 transition-all duration-300 ease-in-out
                            ${isDarkMode ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'}
                            hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900
                        `}
                        aria-label="Toggle dark mode"
                    >
                        <div
                            className={`
                                flex items-center justify-center w-5 h-5 bg-white rounded-full shadow-lg
                                transition-all duration-300 ease-in-out transform
                                ${isDarkMode ? 'translate-x-6' : 'translate-x-0'}
                            `}
                        >
                            {isDarkMode ? (
                                <FiMoon size={10} className="text-gray-700" />
                            ) : (
                                <FiSun size={10} className="text-yellow-500" />
                            )}
                        </div>
                    </button>
                </nav>
            </header>

            {/* Mobile Bottom Navigation - Only visible on mobile */}
            <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-t border-gray-100 dark:border-gray-800 shadow-lg">
                <div className="flex items-center justify-around py-2">
                    {navigationItems.map((item) => {
                        const Icon = item.icon;
                        const active = isActive(item.path);

                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`
                                    flex flex-col items-center justify-center py-2 px-3 min-w-[60px] transition-all duration-200
                                    ${active
                                        ? 'text-blue-600'
                                        : 'text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300'
                                    }
                                `}
                            >
                                <div className={`
                                    p-1.5 rounded-lg transition-all duration-200
                                    ${active ? 'bg-blue-50 dark:bg-blue-900/20' : ''}
                                `}>
                                    <Icon
                                        size={20}
                                        className={`transition-all duration-200 ${active ? 'scale-110' : ''}`}
                                    />
                                </div>
                                <span className={`
                                    text-xs font-medium mt-1 transition-all duration-200
                                    ${active ? 'text-blue-600' : 'text-gray-400 dark:text-gray-500'}
                                `}>
                                    {item.label}
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </nav>

            {/* Mobile bottom padding to prevent content overlap */}
            <div className="md:hidden h-20"></div>
        </>
    );
}