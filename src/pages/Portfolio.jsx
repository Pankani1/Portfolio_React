import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
    FiGithub, FiExternalLink, FiFilter, FiCode,
    FiServer, FiUsers, FiShoppingCart, FiDatabase,
    FiCalendar, FiFileText, FiTruck, FiHome, FiSettings,
    FiMonitor, FiBarChart, FiMapPin, FiCpu, FiLayers
} from 'react-icons/fi';

const Portfolio = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isClient, setIsClient] = useState(false);

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.05, // Lower threshold for mobile
        rootMargin: '50px 0px', // Trigger earlier
    });

    const [activeFilter, setActiveFilter] = useState('all');

    // Handle client-side rendering and mobile detection
    useEffect(() => {
        setIsClient(true);
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Show content if: not yet hydrated, is mobile, or intersection observer triggered
    const shouldShow = !isClient || isMobile || inView;

    const projects = [
        // Personal Projects
        {
            id: 1,
            title: 'Personal Portfolio Website',
            description: 'Modern, responsive portfolio with advanced animations and glassmorphism design. Built with React and featuring smooth transitions.',
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop', // Replace with actual project screenshot
            technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'JavaScript'],
            category: 'web',
            featured: true,
            github: 'https://github.com/Pankani1/My-portfolio',
            live: 'https://pankani-portfolio.netlify.app',
            status: 'Completed',
            icon: FiCode,
            type: 'personal'
        },
        {
            id: 2,
            title: 'QR Code Generator',
            description: 'Dynamic QR code generator with customizable options, real-time preview, and download functionality for various use cases.',
            image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop', // Replace with actual project screenshot
            technologies: ['JavaScript', 'HTML5', 'CSS3', 'Canvas API'],
            category: 'web',
            github: 'https://github.com/Pankani1/QR-Code-Generator',
            live: 'https://pankani-qr-generator.vercel.app',
            status: 'Completed',
            icon: FiCode,
            type: 'personal'
        },
        {
            id: 3,
            title: 'Pluto Motors Website',
            description: 'Comprehensive automotive website with dynamic content management, inventory system, and modern responsive design.',
            image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop', // Replace with actual project screenshot
            technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
            category: 'fullstack',
            github: 'https://github.com/Pankani1/pluto-motors',
            live: 'https://pluto-motors-demo.netlify.app',
            status: 'Completed',
            icon: FiTruck,
            featured: true,
            type: 'personal'
        },
        {
            id: 4,
            title: 'Real Estate Management',
            description: 'Complete real estate management system with property listings, client management, and transaction tracking.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop', // Replace with actual project screenshot
            technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
            category: 'fullstack',
            github: 'https://github.com/Pankani1/real-estate',
            live: 'https://real-estate-manager.vercel.app',
            status: 'Completed',
            icon: FiHome,
            type: 'personal'
        },
        {
            id: 5,
            title: 'E-commerce Shop Platform',
            description: 'Full-featured e-commerce platform with payment integration, inventory management, and customer portal.',
            image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop', // Replace with actual project screenshot
            technologies: ['PHP', 'MySQL', 'JavaScript', 'PayPal API'],
            category: 'fullstack',
            github: 'https://github.com/Pankani1/shop',
            live: 'https://pankani-ecommerce.netlify.app',
            status: 'Completed',
            icon: FiShoppingCart,
            type: 'personal'
        },
        {
            id: 6,
            title: 'Contact Management System',
            description: 'Professional contact management system with advanced search, categorization, and communication tracking.',
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop', // Replace with actual project screenshot
            technologies: ['PHP', 'MySQL', 'JavaScript', 'AJAX'],
            category: 'fullstack',
            github: 'https://github.com/Pankani1/contact-management',
            live: 'https://contact-manager-pro.vercel.app',
            status: 'Completed',
            icon: FiUsers,
            type: 'personal'
        },
        {
            id: 7,
            title: 'Webin24 Platform',
            description: 'Modern web development platform with advanced features for creating responsive websites and web applications.',
            image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop', // Replace with actual project screenshot
            technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
            category: 'fullstack',
            github: 'https://github.com/Pankani1/webin24',
            live: 'https://webin24-platform.netlify.app',
            status: 'In Progress',
            icon: FiCode,
            type: 'personal'
        },
        {
            id: 8,
            title: 'LC Stores Management',
            description: 'Store management system with inventory tracking, sales analytics, and multi-location support.',
            image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=400&h=300&fit=crop', // Replace with actual project screenshot
            technologies: ['PHP', 'MySQL', 'JavaScript', 'Chart.js'],
            category: 'fullstack',
            github: 'https://github.com/Pankani1/LC_Stores',
            live: 'https://lc-stores-manager.vercel.app',
            status: 'Completed',
            icon: FiShoppingCart,
            type: 'personal'
        },
        {
            id: 9,
            title: 'Fuel Station Management',
            description: 'Comprehensive fuel station management system with inventory tracking, sales monitoring, and reporting features.',
            image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop', // Replace with actual project screenshot
            technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
            category: 'fullstack',
            github: 'https://github.com/Pankani1/fuel-station',
            live: 'https://fuel-station-manager.netlify.app',
            status: 'Completed',
            icon: FiDatabase,
            type: 'personal'
        },
        {
            id: 10,
            title: 'LC Helpdesk System',
            description: 'Customer support and helpdesk system with ticket management, knowledge base, and reporting features.',
            image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop', // Replace with actual project screenshot
            technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
            category: 'fullstack',
            github: 'https://github.com/Pankani1/Lc_Helpdesk',
            live: 'https://lc-helpdesk.vercel.app',
            status: 'Completed',
            icon: FiFileText,
            type: 'personal'
        },
        {
            id: 11,
            title: 'Farm Management System',
            description: 'Agricultural management platform with crop tracking, inventory management, and analytics dashboard.',
            image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=300&fit=crop', // Replace with actual project screenshot
            technologies: ['PHP', 'MySQL', 'JavaScript', 'CSS3'],
            category: 'fullstack',
            github: 'https://github.com/Pankani1/farm',
            live: 'https://farm-management-system.netlify.app',
            status: 'Completed',
            icon: FiHome,
            type: 'personal'
        },
        {
            id: 12,
            title: 'Git Learning Platform',
            description: 'Interactive platform for learning Git version control with hands-on exercises, tutorials, and best practices.',
            image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=400&h=300&fit=crop', // Replace with actual project screenshot
            technologies: ['HTML5', 'CSS3', 'JavaScript', 'Git'],
            category: 'web',
            github: 'https://github.com/Pankani1/git-lesson',
            live: 'https://git-learning-platform.vercel.app',
            status: 'Completed',
            icon: FiCode,
            type: 'personal'
        },
        {
            id: 13,
            title: 'My Portfolio (Legacy)',
            description: 'Previous version of my portfolio website showcasing earlier projects and skills.',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop', // Replace with actual project screenshot
            technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
            category: 'web',
            github: 'https://github.com/Pankani1/my_portfolio',
            live: 'https://legacy-portfolio.netlify.app',
            status: 'Completed',
            icon: FiCode,
            type: 'personal'
        },

        // Collaborative Projects with Alfredappiagyei
        {
            id: 14,
            title: 'TerraFragrance Platform',
            description: 'Luxury fragrance e-commerce platform with advanced product catalog, shopping experience, and inventory management.',
            image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=300&fit=crop', // Replace with actual project screenshot
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
            category: 'fullstack',
            featured: true,
            github: 'https://github.com/Pankani1/terrafragrance-platform',
            live: 'https://terrafragrance.vercel.app',
            status: 'In Progress',
            icon: FiShoppingCart,
            type: 'collaborative',
            collaborator: 'Alfredappiagyei'
        },
        {
            id: 15,
            title: 'LC Stores Manager Pro',
            description: 'Advanced store management system with multi-location support, real-time inventory tracking, and analytics dashboard.',
            image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?w=400&h=300&fit=crop', // Replace with actual project screenshot
            technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
            category: 'fullstack',
            github: 'https://github.com/Pankani1/lc-stores-pro',
            live: 'https://lc-stores-pro.netlify.app',
            status: 'In Progress',
            icon: FiDatabase,
            type: 'collaborative',
            collaborator: 'Alfredappiagyei'
        },
        {
            id: 16,
            title: 'Schedule Manager Pro',
            description: 'Professional scheduling and appointment management system with calendar integration, notifications, and team collaboration.',
            image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop', // Replace with actual project screenshot
            technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
            category: 'fullstack',
            github: 'https://github.com/Pankani1/schedule-manager-pro',
            live: 'https://schedule-manager-pro.vercel.app',
            status: 'Completed',
            icon: FiCalendar,
            type: 'collaborative',
            collaborator: 'Alfredappiagyei'
        },
        {
            id: 17,
            title: 'IT Admin Dashboard',
            description: 'Comprehensive IT administration dashboard with system monitoring, user management, security analytics, and reporting tools.',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop', // Replace with actual project screenshot
            technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
            category: 'fullstack',
            featured: true,
            github: 'https://github.com/Pankani1/it-admin-dashboard',
            live: 'https://it-admin-dashboard.netlify.app',
            status: 'In Progress',
            icon: FiSettings,
            type: 'collaborative',
            collaborator: 'Alfredappiagyei'
        },
        {
            id: 18,
            title: 'LandCheck System',
            description: 'Land verification and management system for Ghana Land Commission with document management and verification workflows.',
            image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop', // Replace with actual project screenshot
            technologies: ['PHP', 'MySQL', 'JavaScript', 'GIS API'],
            category: 'fullstack',
            github: 'https://github.com/Pankani1/landcheck-system',
            live: 'https://landcheck-system.vercel.app',
            status: 'Completed',
            icon: FiMapPin,
            type: 'collaborative',
            collaborator: 'Alfredappiagyei'
        },
        {
            id: 19,
            title: 'LandCheck Dashboard',
            description: 'Interactive dashboard for land verification system with GIS integration, real-time data visualization, and reporting.',
            image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop', // Replace with actual project screenshot
            technologies: ['React', 'Node.js', 'PostgreSQL', 'Mapbox'],
            category: 'fullstack',
            featured: true,
            github: 'https://github.com/Pankani1/landcheck-dashboard',
            live: 'https://landcheck-dashboard.netlify.app',
            status: 'In Progress',
            icon: FiMonitor,
            type: 'collaborative',
            collaborator: 'Alfredappiagyei'
        },
        {
            id: 20,
            title: 'DC Daily Management',
            description: 'Daily operations management system for data centers with monitoring, maintenance scheduling, and performance analytics.',
            image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop', // Replace with actual project screenshot
            technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
            category: 'fullstack',
            github: 'https://github.com/Pankani1/dc-daily-management',
            live: 'https://dc-daily-management.vercel.app',
            status: 'In Progress',
            icon: FiServer,
            type: 'collaborative',
            collaborator: 'Alfredappiagyei'
        },
        {
            id: 21,
            title: 'LC Helpdesk Pro',
            description: 'Advanced helpdesk system with AI-powered ticket routing, knowledge base, customer satisfaction tracking, and analytics.',
            image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=400&h=300&fit=crop', // Replace with actual project screenshot
            technologies: ['React', 'Node.js', 'PostgreSQL', 'AI/ML'],
            category: 'fullstack',
            github: 'https://github.com/Pankani1/lc-helpdesk-pro',
            live: 'https://lc-helpdesk-pro.netlify.app',
            status: 'In Progress',
            icon: FiFileText,
            type: 'collaborative',
            collaborator: 'Alfredappiagyei'
        },
        {
            id: 22,
            title: 'Derick Schedule Manager',
            description: 'Personal and team scheduling application with calendar synchronization, task management, and team collaboration features.',
            image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop', // Replace with actual project screenshot
            technologies: ['React', 'Node.js', 'MongoDB', 'Calendar API'],
            category: 'fullstack',
            github: 'https://github.com/Pankani1/derick-schedule-manager',
            live: 'https://derick-schedule-manager.vercel.app',
            status: 'Completed',
            icon: FiCalendar,
            type: 'collaborative',
            collaborator: 'Alfredappiagyei'
        },

        // External Collaborations
        {
            id: 23,
            title: 'Webin24 Limited Platform',
            description: 'Enterprise-level web development platform with advanced features, multi-tenant architecture, and team collaboration.',
            image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&h=300&fit=crop', // Replace with actual project screenshot
            technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
            category: 'fullstack',
            github: 'https://github.com/webin24limitedrepo/enterprise-platform',
            live: 'https://webin24-limited.netlify.app',
            status: 'In Progress',
            icon: FiLayers,
            type: 'collaborative',
            collaborator: 'Webin24limitedrepo'
        },
        {
            id: 24,
            title: 'Sedan Landbank Platform',
            description: 'Real estate and land banking platform with investment tracking, property management, client portal, and financial reporting.',
            image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400&h=300&fit=crop', // Replace with actual project screenshot
            technologies: ['WordPress', 'PHP', 'MySQL', 'WooCommerce'],
            category: 'web',
            github: 'https://github.com/spytech-creator/sedan-landbank',
            live: 'https://sedan-landbank.vercel.app',
            status: 'Completed',
            icon: FiHome,
            type: 'collaborative',
            collaborator: 'Spytech Creator'
        }
    ];

    const filters = [
        { id: 'all', label: 'All Projects', icon: FiCode },
        { id: 'web', label: 'Web Apps', icon: FiServer },
        { id: 'fullstack', label: 'Full Stack', icon: FiDatabase },
        { id: 'collaborative', label: 'Collaborations', icon: FiUsers }
    ];

    const filteredProjects = activeFilter === 'all'
        ? projects
        : activeFilter === 'collaborative'
            ? projects.filter(project => project.type === 'collaborative')
            : projects.filter(project => project.category === activeFilter);

    const featuredProjects = projects.filter(project => project.featured);

    // Animation helpers
    const getInitialProps = (defaultInitial = {}) => {
        return isMobile ? { opacity: 1, y: 0, scale: 1 } : defaultInitial;
    };

    const getAnimateProps = (defaultAnimate = {}) => {
        return shouldShow ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.8 };
    };

    const getTransitionProps = (defaultTransition = {}) => {
        return isMobile ? { duration: 0 } : defaultTransition;
    };

    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen" ref={ref}>
            <section className="container mx-auto py-20 px-6">
                <motion.div
                    initial={getInitialProps({ opacity: 0, y: 30 })}
                    animate={getAnimateProps({ opacity: 1, y: 0 })}
                    transition={getTransitionProps({ duration: 0.6 })}
                    className="max-w-7xl mx-auto"
                >
                    {/* Header */}
                    <div className="text-center mb-16">
                        <motion.h2
                            className="text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight"
                            initial={getInitialProps({ opacity: 0, y: 20 })}
                            animate={getAnimateProps({ opacity: 1, y: 0 })}
                            transition={getTransitionProps({ delay: 0.2, duration: 0.6 })}
                        >
                            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
                        </motion.h2>
                        <motion.p
                            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                            initial={getInitialProps({ opacity: 0, y: 20 })}
                            animate={getAnimateProps({ opacity: 1, y: 0 })}
                            transition={getTransitionProps({ delay: 0.4, duration: 0.6 })}
                        >
                            A comprehensive showcase of my {projects.length} projects spanning web development, full-stack applications,
                            and collaborative works across different technologies and domains.
                        </motion.p>
                    </div>

                    {/* Featured Projects */}
                    {featuredProjects.length > 0 && (
                        <motion.div
                            className="mb-16"
                            initial={getInitialProps({ opacity: 0, y: 20 })}
                            animate={getAnimateProps({ opacity: 1, y: 0 })}
                            transition={getTransitionProps({ delay: 0.6, duration: 0.6 })}
                        >
                            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Featured Projects</h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {featuredProjects.map((project, index) => (
                                    <motion.div
                                        key={project.id}
                                        className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 group"
                                        initial={getInitialProps({ opacity: 0, scale: 0.9 })}
                                        animate={getAnimateProps({ opacity: 1, scale: 1 })}
                                        transition={getTransitionProps({ delay: 0.8 + (index * 0.2), duration: 0.6 })}
                                        whileHover={isMobile ? {} : { y: -10 }}
                                    >
                                        <div className="relative overflow-hidden">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                            />
                                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                                {/* Corrected GitHub link */}
                                                <a
                                                    href={project.github}
                                                    className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    title="View Source Code"
                                                >
                                                    <FiGithub size={20} className="text-gray-800" />
                                                </a>
                                                {/* Corrected Live Demo link */}
                                                <a
                                                    href={project.live}
                                                    className="p-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    title="Live Demo"
                                                >
                                                    <FiExternalLink size={20} className="text-white" />
                                                </a>
                                            </div>
                                            <div className="absolute top-4 right-4 px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                                                ⭐ Featured
                                            </div>
                                            {
                                                project.type === 'collaborative' && (
                                                    <div className="absolute top-4 left-4 px-2 py-1 bg-purple-600 text-white text-xs font-medium rounded-full">
                                                        <FiUsers size={12} className="inline mr-1" />
                                                        Collab
                                                    </div>
                                                )
                                            }
                                        </div>
                                        <div className="p-6">
                                            <div className="flex items-start justify-between mb-3">
                                                <div className="flex items-center gap-2">
                                                    <project.icon className="text-blue-600" size={20} />
                                                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h4>
                                                </div>
                                                <span className={`text-xs px-2 py-1 rounded-full ${project.status === 'Completed'
                                                    ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                                                    : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400'
                                                    }`}>
                                                    {project.status}
                                                </span>
                                            </div>
                                            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                                            {project.type === 'collaborative' && (
                                                <div className="flex items-center gap-1 mb-3">
                                                    <FiUsers size={14} className="text-purple-600" />
                                                    <span className="text-xs text-purple-600 dark:text-purple-400">
                                                        with {project.collaborator}
                                                    </span>
                                                </div>
                                            )}
                                            <div className="flex flex-wrap gap-2">
                                                {project.technologies.slice(0, 4).map((tech, techIndex) => (
                                                    <span
                                                        key={techIndex}
                                                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium rounded-full"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                                {project.technologies.length > 4 && (
                                                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm rounded-full">
                                                        +{project.technologies.length - 4}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* Filter */}
                    <motion.div
                        className="flex justify-center mb-12"
                        initial={getInitialProps({ opacity: 0, y: 20 })}
                        animate={getAnimateProps({ opacity: 1, y: 0 })}
                        transition={getTransitionProps({ delay: 1, duration: 0.6 })}
                    >
                        <div className="bg-white dark:bg-gray-800 rounded-full p-2 sm:p-2 shadow-lg border border-gray-100 dark:border-gray-700 flex items-center gap-1 sm:gap-2 flex-wrap max-w-full overflow-x-auto">
                            <FiFilter className="text-gray-400 ml-2 flex-shrink-0" size={18} />
                            {filters.map((filter) => (
                                <button
                                    key={filter.id}
                                    onClick={() => setActiveFilter(filter.id)}
                                    className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 whitespace-nowrap ${activeFilter === filter.id
                                        ? 'bg-blue-600 text-white shadow-md'
                                        : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-700'
                                        }`}
                                >
                                    <filter.icon size={14} />
                                    <span className="hidden xs:inline sm:inline">{filter.label}</span>
                                    {/* You defined 'xs' here, ensure it's in your tailwind.config.js if you want it to work */}
                                    <span className="xs:hidden sm:hidden">{filter.label.split(' ')[0]}</span>
                                </button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Projects Grid */}
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
                        initial={getInitialProps({ opacity: 0 })}
                        animate={getAnimateProps({ opacity: 1 })}
                        exit={{ opacity: 0, scale: 0.8 }} // Ensure exit animation
                        transition={getTransitionProps({ delay: 1.2, duration: 0.6 })}
                    >
                        <AnimatePresence>
                            {filteredProjects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group"
                                    layout
                                    initial={getInitialProps({ opacity: 0, scale: 0.8 })}
                                    animate={getAnimateProps({ opacity: 1, scale: 1 })}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={getTransitionProps({ delay: index * 0.02, duration: 0.4 })}
                                    whileHover={isMobile ? {} : { y: -5 }}
                                >
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                                            {/* Corrected GitHub link */}
                                            <a
                                                href={project.github}
                                                className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                title="View Source Code"
                                            >
                                                <FiGithub size={18} className="text-gray-800" />
                                            </a>
                                            {/* Corrected Live Demo link */}
                                            <a
                                                href={project.live}
                                                className="p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                title="Live Demo"
                                            >
                                                <FiExternalLink size={18} className="text-white" />
                                            </a>
                                        </div>
                                        {
                                            project.type === 'collaborative' && (
                                                <div className="absolute top-3 left-3 px-2 py-1 bg-purple-600/90 text-white text-xs font-medium rounded-full">
                                                    <FiUsers size={10} className="inline mr-1" />
                                                    Collab
                                                </div>
                                            )
                                        }
                                    </div>

                                    <div className="p-6">
                                        <div className="flex items-start justify-between mb-3">
                                            <div className="flex items-center gap-2">
                                                <project.icon className="text-blue-600 flex-shrink-0" size={18} />
                                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white leading-tight">{project.title}</h3>
                                            </div>
                                            <span className={`text-xs px-2 py-1 rounded-full flex-shrink-0 ${project.status === 'Completed'
                                                ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                                                : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400'
                                                }`}>
                                                {project.status}
                                            </span>
                                        </div>

                                        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed line-clamp-2">{project.description}</p>

                                        {project.type === 'collaborative' && (
                                            <div className="flex items-center gap-1 mb-3">
                                                <FiUsers size={12} className="text-purple-600" />
                                                <span className="text-xs text-purple-600 dark:text-purple-400">
                                                    with {project.collaborator}
                                                </span>
                                            </div>
                                        )}

                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.slice(0, 3).map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-lg"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                            {project.technologies.length > 3 && (
                                                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-lg">
                                                    +{project.technologies.length - 3}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {/* Statistics */}
                    <motion.div
                        className="mt-8 sm:mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-6"
                        initial={getInitialProps({ opacity: 0, y: 20 })}
                        animate={getAnimateProps({ opacity: 1, y: 0 })}
                        transition={getTransitionProps({ delay: 1.6, duration: 0.6 })}
                    >
                        {
                            [
                                { icon: FiCode, label: 'Total Projects', value: projects.length, color: 'text-blue-600' },
                                { icon: FiServer, label: 'Web Apps', value: projects.filter(p => p.category === 'web').length, color: 'text-green-600' },
                                { icon: FiDatabase, label: 'Full Stack', value: projects.filter(p => p.category === 'fullstack').length, color: 'text-purple-600' },
                                { icon: FiUsers, label: 'Collaborations', value: projects.filter(p => p.type === 'collaborative').length, color: 'text-orange-600' },
                                { icon: FiCode, label: 'Completed', value: projects.filter(p => p.status === 'Completed').length, color: 'text-red-600' }
                            ].map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-200"
                                    initial={getInitialProps({ opacity: 0, scale: 0.8 })}
                                    animate={getAnimateProps({ opacity: 1, scale: 1 })}
                                    transition={getTransitionProps({ delay: 1.8 + (index * 0.1), duration: 0.5 })}
                                    whileHover={isMobile ? {} : { scale: 1.05 }}
                                >
                                    <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
                                </motion.div>
                            ))
                        }
                    </motion.div>

                    {/* Bottom CTA */}
                    <motion.div
                        className="mt-16 text-center"
                        initial={getInitialProps({ opacity: 0, y: 20 })}
                        animate={getAnimateProps({ opacity: 1, y: 0 })}
                        transition={getTransitionProps({ delay: 2, duration: 0.6 })}
                    >
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-4 sm:p-8 text-white">
                            <h3 className="text-xl sm:text-2xl font-bold mb-2">Interested in My Work?</h3>
                            <p className="text-sm sm:text-base text-blue-100 mb-4 sm:mb-6">
                                Explore {projects.length} projects including {projects.filter(p => p.type === 'collaborative').length} collaborations.
                                Check out the source code on GitHub or get in touch to discuss your next project.
                            </p>
                            <div className="flex flex-col gap-3 sm:gap-4 justify-center">
                                {/* Corrected GitHub Profile link */}
                                <a
                                    href="https://github.com/pankani1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-medium rounded-full hover:bg-blue-50 transition-all duration-200"
                                >
                                    <FiGithub size={18} />
                                    View GitHub Profile
                                </a>
                                {/* Corrected Get In Touch link */}
                                <a
                                    href="/contact" // Assuming a contact page exists, otherwise update this link
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-blue-600 transition-all duration-200"
                                >
                                    <FiUsers size={18} />
                                    Get In Touch
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </section>
        </div>
    );
};

export default Portfolio;