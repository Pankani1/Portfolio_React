import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const allProjects = [
    { 
        id: 1, 
        title: 'Personal Portfolio Website', 
        description: 'Modern, responsive portfolio built with React and Framer Motion, featuring smooth animations and a clean Apple-inspired design.',
        longDescription: 'A comprehensive portfolio showcasing my development skills with advanced animations, responsive design, and modern web technologies.',
        technologies: ['React', 'Tailwind CSS', 'Framer Motion'], 
        link: '#', 
        github: '#',
        category: 'Web',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop'
    },
    { 
        id: 2, 
        title: 'QR Code Generator', 
        description: 'Dynamic QR code generator with real-time preview and multiple export options.',
        longDescription: 'A powerful tool for generating QR codes with customization options, batch processing, and various output formats.',
        technologies: ['JavaScript', 'HTML5', 'CSS3'], 
        link: '#', 
        github: '#',
        category: 'Tools',
        image: 'https://images.unsplash.com/photo-1586776977607-310e9c725c37?w=500&h=300&fit=crop'
    },
    { 
        id: 3, 
        title: 'Pluto Motors Website', 
        description: 'Comprehensive automotive website with content management system and inventory tracking.',
        longDescription: 'Full-featured automotive website with admin panel, inventory management, and customer portal built with PHP and MySQL.',
        technologies: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'], 
        link: '#', 
        github: '#',
        category: 'Web',
        image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=500&h=300&fit=crop'
    }
];

const categories = ['All', 'Web', 'Tools'];

export default function Portfolio() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [selectedProject, setSelectedProject] = useState(null);

    const filteredProjects = activeCategory === 'All'
        ? allProjects
        : allProjects.filter(p => p.category === activeCategory);

    return (
        <div className="bg-gray-50 min-h-screen">
            <section className="container mx-auto py-20 px-6">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-6xl mx-auto"
                >
                    {/* Header */}
                    <div className="text-center mb-16">
                        <motion.h1 
                            className="text-5xl font-bold text-gray-900 mb-6 tracking-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            My Projects
                        </motion.h1>
                        <motion.p 
                            className="text-xl text-gray-600 max-w-2xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            A collection of projects showcasing my skills in web development, 
                            automation, and problem-solving.
                        </motion.p>
                    </div>

                    {/* Filter Tabs */}
                    <motion.div 
                        className="flex justify-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                    >
                        <div className="bg-white rounded-full p-2 shadow-sm border border-gray-100">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-6 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                                        activeCategory === cat 
                                            ? 'bg-blue-600 text-white shadow-sm' 
                                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Projects Grid */}
                    <motion.div 
                        className="grid lg:grid-cols-3 md:grid-cols-2 gap-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                    >
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group cursor-pointer"
                                whileHover={{ y: -8 }}
                                onClick={() => setSelectedProject(project)}
                            >
                                {/* Project Image */}
                                <div className="aspect-video bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden">
                                    <img 
                                        src={project.image} 
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                
                                {/* Project Content */}
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">
                                            {project.category}
                                        </span>
                                    </div>
                                    
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                        {project.title}
                                    </h3>
                                    
                                    <p className="text-gray-600 mb-4 line-clamp-2">
                                        {project.description}
                                    </p>
                                    
                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                                            <span 
                                                key={techIndex} 
                                                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-lg"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.technologies.length > 3 && (
                                            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-lg">
                                                +{project.technologies.length - 3}
                                            </span>
                                        )}
                                    </div>
                                    
                                    {/* Action Buttons */}
                                    <div className="flex gap-3">
                                        <a 
                                            href={project.link}
                                            onClick={(e) => e.stopPropagation()}
                                            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                                        >
                                            <FiExternalLink size={14} />
                                            Live Demo
                                        </a>
                                        <a 
                                            href={project.github}
                                            onClick={(e) => e.stopPropagation()}
                                            className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors"
                                        >
                                            <FiGithub size={14} />
                                            Code
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </section>
        </div>
    );
}