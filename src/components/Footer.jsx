import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import { useTheme } from '../theme';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const { isDarkMode } = useTheme(); // Use the theme context

    const socialLinks = [
        { icon: FiGithub, href: 'https://github.com/pankani1', label: 'GitHub' },
        { icon: FiLinkedin, href: '#', label: 'LinkedIn' }, // LinkedIn link is a placeholder, update as needed
        { icon: FiMail, href: 'mailto:your.email@example.com', label: 'Email' } // Email is a placeholder, update as needed
    ];

    const quickLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Projects', href: '/projects' },
        { name: 'Contact', href: '/contact' }
    ];

    return (
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
            <div className="container mx-auto px-6 py-12">
                <div className="grid md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Portfolio</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md">
                            Passionate developer creating beautiful digital experiences with
                            modern web technologies and clean, efficient code.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200"
                                        aria-label={social.label}
                                        target={social.href.startsWith('http') ? '_blank' : '_self'}
                                        rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    >
                                        <Icon size={18} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Contact</h4>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                            <li>Accra</li>
                            <li>Ghana</li>
                            <li>
                                <a
                                    href="mailto:your.email@example.com" // Email is a placeholder, update as needed
                                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                                >
                                    spankani6@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-100 dark:border-gray-800 pt-8 mt-12">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            © {currentYear} Portfolio. All rights reserved.
                        </p>
                        <p className="flex items-center gap-1 text-gray-600 dark:text-gray-400 text-sm">
                            Made with <FiHeart className="text-red-500 dark:text-red-400" size={14} /> in Ghana
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}