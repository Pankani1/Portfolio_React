import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Home() {
    const skills = [
        { name: 'React', icon: '⚛️' },
        { name: 'JavaScript', icon: '🟨' },
        { name: 'PHP', icon: '🐘' },
        { name: 'MySQL', icon: '🗄️' },
        { name: 'Tailwind CSS', icon: '🎨' },
        { name: 'Java', icon: '☕' }
    ];

    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
            {/* Hero Section */}
            <section className="container mx-auto px-6 py-20">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.h1
                            className="text-6xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            Hello, I'm{' '}
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Samuel Pankani
                            </span>
                        </motion.h1>

                        <motion.p
                            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            A passionate developer crafting beautiful digital experiences
                            with modern web technologies and clean, efficient code.
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                        >
                            <Link
                                to="/projects"
                                className="flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                            >
                                View My Work
                                <FiArrowRight size={18} />
                            </Link>

                            <a
                                href="https://docs.google.com/document/d/1HiTGvZR8FySuw30JKsHIRV5DkqLUEz3c?rtpof=true&usp=drive_fs"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-8 py-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700"
                            >
                                <FiDownload size={18} />
                                Download CV
                            </a>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            className="flex gap-6 justify-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                        >
                            {[{
                                icon: FiGithub, href: 'https://github.com/pankani1', label: 'GitHub'
                            }, {
                                icon: FiLinkedin, href: '#', label: 'LinkedIn'
                            }, {
                                icon: FiMail, href: 'mailto:spankani6@gmail.com', label: 'Email'
                            }].map((social, index) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target={social.href.startsWith('http') ? '_blank' : '_self'}
                                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                                    className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-200 shadow-md hover:shadow-lg hover:scale-110 border border-gray-100 dark:border-gray-700"
                                    whileHover={{ y: -2 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.9 + (index * 0.1), duration: 0.5 }}
                                >
                                    <social.icon size={20} />
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="container mx-auto px-6 py-16">
                <motion.div
                    className="max-w-6xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Technologies I Love</h2>
                        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Building with modern tools and frameworks to create exceptional digital experiences.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-lg hover:scale-105 transition-all duration-200"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.2 + (index * 0.1), duration: 0.5 }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="text-3xl mb-3">{skill.icon}</div>
                                <h3 className="font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Featured Projects Preview */}
            <section className="container mx-auto px-6 py-16">
                <motion.div
                    className="max-w-6xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4, duration: 0.6 }}
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
                        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            A selection of recent work showcasing my skills in web development and problem-solving.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {[{
                            title: 'Portfolio Website',
                            description: 'Modern React portfolio with animations and responsive design.',
                            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
                            tags: ['React', 'Tailwind CSS'],
                            link: '/projects'
                        }, {
                            title: 'QR Code Generator',
                            description: 'Dynamic QR code generator with real-time preview and export options.',
                            image: 'https://images.unsplash.com/photo-1586776977607-310e9c725c37?w=400&h=250&fit=crop',
                            tags: ['JavaScript', 'HTML5'],
                            link: '/projects'
                        }, {
                            title: 'Pluto Motors Website',
                            description: 'Comprehensive automotive website with inventory management.',
                            image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=400&h=250&fit=crop',
                            tags: ['PHP', 'MySQL'],
                            link: '/projects'
                        }].map((project, index) => (
                            <motion.div
                                key={project.title}
                                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-lg hover:scale-105 transition-all duration-300 group cursor-pointer"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.6 + (index * 0.1), duration: 0.5 }}
                                whileHover={{ y: -8 }}
                                onClick={() => window.location.href = project.link}
                            >
                                <div className="aspect-video bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-600 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center">
                        <Link
                            to="/projects"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 font-medium rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                        >
                            View All Projects
                            <FiArrowRight size={18} />
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* CTA Section */}
            <section className="container mx-auto px-6 py-20">
                <motion.div
                    className="max-w-4xl mx-auto text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8, duration: 0.6 }}
                >
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
                        <h2 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Let's work together to bring your ideas to life with clean code and beautiful design.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-medium rounded-full hover:bg-blue-50 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                        >
                            Get In Touch
                            <FiArrowRight size={18} />
                        </Link>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}