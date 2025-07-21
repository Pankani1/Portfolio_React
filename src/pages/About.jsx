import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
    FiCode, FiDatabase, FiServer, FiMonitor,
    FiWifi, FiCpu, FiShield, FiUsers
} from 'react-icons/fi';

const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const skills = [
        { name: 'HTML5', level: 85, category: 'Frontend', icon: FiCode },
        { name: 'CSS3', level: 90, category: 'Frontend', icon: FiCode },
        { name: 'JavaScript', level: 80, category: 'Frontend', icon: FiCode },
        { name: 'React', level: 75, category: 'Frontend', icon: FiCode },
        { name: 'PHP', level: 70, category: 'Backend', icon: FiServer },
        { name: 'MySQL', level: 65, category: 'Database', icon: FiDatabase },
        { name: 'Java', level: 68, category: 'Backend', icon: FiServer },
        { name: 'CCTV Systems', level: 85, category: 'Hardware', icon: FiMonitor },
        { name: 'Network Config', level: 78, category: 'Network', icon: FiWifi },
        { name: 'Hardware Automation', level: 82, category: 'Hardware', icon: FiCpu },
        { name: 'System Security', level: 75, category: 'Security', icon: FiShield }
    ];

    const experiences = [
        {
            period: 'Sept 2024 - Present',
            title: 'National Service Personnel',
            company: 'Ghana Land Commission',
            description: 'Managing IT infrastructure, implementing digital land management solutions, and maintaining network systems.',
            current: true
        },
        {
            period: '2021 - 2024',
            title: 'Computer Science Degree',
            company: 'Accra Technical University',
            description: 'Specialized in software development, system analysis, and network administration.'
        },
        {
            period: 'July 2023 - August 2023',
            title: 'WordPress Development Intern',
            company: 'Sedan Landbank',
            description: 'Developed WooCommerce solutions, configured payment gateways, and optimized website performance.'
        }
    ];

    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen" ref={ref}>
            <section className="container mx-auto py-20 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-6xl mx-auto"
                >
                    {/* Header */}
                    <div className="text-center mb-16">
                        <motion.h2
                            className="text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
                        </motion.h2>

                        <motion.p
                            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            Multi-skilled tech professional currently serving at Ghana Land Commission,
                            leveraging diverse technical expertise to modernize systems and deliver innovative solutions.
                        </motion.p>
                    </div>

                    {/* Introduction */}
                    <div className="grid lg:grid-cols-2 gap-12 mb-16">
                        <motion.div
                            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700"
                            initial={{ opacity: 0, x: -30 }}
                            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                        >
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">My Journey</h3>
                            <div className="space-y-4 text-gray-600 dark:text-gray-300">
                                <p>
                                    Currently serving as National Service Personnel at Ghana Land Commission, where I leverage
                                    my diverse technical skills to modernize land management systems and maintain critical IT infrastructure.
                                </p>
                                <p>
                                    My expertise spans across software development, CCTV systems, network administration, and hardware automation.
                                    With hands-on experience in both software and hardware domains, I bring a unique perspective to solving
                                    complex technical challenges.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700"
                            initial={{ opacity: 0, x: 30 }}
                            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                        >
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">What I Do</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { icon: FiCode, title: 'Web Development', desc: 'Full-stack applications' },
                                    { icon: FiMonitor, title: 'CCTV Systems', desc: 'Security installations' },
                                    { icon: FiWifi, title: 'Network Setup', desc: 'Infrastructure design' },
                                    { icon: FiCpu, title: 'Automation', desc: 'Smart solutions' }
                                ].map((service, index) => (
                                    <motion.div
                                        key={service.title}
                                        className="text-center p-4 rounded-xl bg-gray-50 dark:bg-gray-700 hover:bg-blue-50 dark:hover:bg-gray-600 transition-colors duration-200"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                        transition={{ delay: 1 + (index * 0.1), duration: 0.5 }}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <service.icon className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                                        <h4 className="font-semibold text-gray-900 dark:text-white">{service.title}</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-300">{service.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Skills */}
                    <motion.div
                        className="mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ delay: 1.2, duration: 0.6 }}
                    >
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Technical Skills</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-200"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ delay: 1.4 + (index * 0.05), duration: 0.5 }}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center gap-3">
                                            <skill.icon className="text-blue-600" size={20} />
                                            <span className="font-semibold text-gray-900 dark:text-white">{skill.name}</span>
                                        </div>
                                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{skill.level}%</span>
                                    </div>
                                    <div className="mb-2">
                                        <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
                                            {skill.category}
                                        </span>
                                    </div>
                                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                        <motion.div
                                            className="bg-blue-600 h-2 rounded-full"
                                            initial={{ width: 0 }}
                                            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                                            transition={{ duration: 1, delay: 1.6 + (index * 0.05) }}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Experience Timeline */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ delay: 1.8, duration: 0.6 }}
                    >
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Professional Journey</h3>
                        <div className="space-y-6">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    className={`bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700 ${exp.current ? 'border-blue-200 dark:border-blue-800 bg-blue-50/30 dark:bg-blue-900/10' : ''}`}
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                                    transition={{ delay: 2 + (index * 0.2), duration: 0.6 }}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <span className="text-sm font-medium px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full">
                                                {exp.period}
                                            </span>
                                            {exp.current && (
                                                <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full">
                                                    Current
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{exp.title}</h4>
                                    <h5 className="text-blue-600 dark:text-blue-400 font-medium mb-3">{exp.company}</h5>
                                    <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </section>
        </div>
    );
};

export default About;