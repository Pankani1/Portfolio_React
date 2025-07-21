import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
    FiMail, FiPhone, FiMapPin, FiUser, FiMessageSquare,
    FiSend, FiGithub, FiTwitter, FiFacebook, FiLinkedin,
    FiBriefcase, FiCheckCircle
} from 'react-icons/fi';

const Contact = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setSubmitStatus(''), 5000);
        }, 2000);
    };

    const contactInfo = [
        {
            icon: FiMapPin,
            label: 'Location',
            value: 'Accra, Ghana',
            subvalue: 'Available for remote work'
        },
        {
            icon: FiMail,
            label: 'Email',
            value: 'spankani6@gmail.com',
            link: 'mailto:spankani6@gmail.com'
        },
        {
            icon: FiPhone,
            label: 'Phone',
            value: '+233 54 127 2232',
            link: 'tel:+233541272232'
        },
        {
            icon: FiBriefcase,
            label: 'Current Role',
            value: 'National Service Personnel',
            subvalue: 'Ghana Land Commission'
        }
    ];

    const socialLinks = [
        {
            icon: FiGithub,
            label: 'GitHub',
            url: 'https://github.com/pankani1',
            color: 'hover:text-gray-800 dark:hover:text-gray-200'
        },
        {
            icon: FiTwitter,
            label: 'Twitter',
            url: 'https://twitter.com/pankani_1',
            color: 'hover:text-blue-400'
        },
        {
            icon: FiFacebook,
            label: 'Facebook',
            url: 'https://www.facebook.com/Samuelpankani',
            color: 'hover:text-blue-600'
        },
        {
            icon: FiLinkedin,
            label: 'LinkedIn',
            url: '#',
            color: 'hover:text-blue-600'
        }
    ];

    const services = [
        'Web Development & Design',
        'CCTV Installation & Maintenance',
        'Network Infrastructure Setup',
        'Hardware Automation Solutions',
        'System Security & Monitoring',
        'Database Management'
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
                            Get In <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
                        </motion.h2>
                        <motion.p
                            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            Ready to bring your ideas to life? Whether you need web development, CCTV installation,
                            or network setup, let's discuss your project and create something amazing together.
                        </motion.p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <motion.div
                            className="space-y-8"
                            initial={{ opacity: 0, x: -30 }}
                            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                        >
                            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
                                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Let's Connect</h3>

                                <div className="space-y-6">
                                    {contactInfo.map((item, index) => (
                                        <motion.div
                                            key={item.label}
                                            className="flex items-start gap-4"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                            transition={{ delay: 0.8 + (index * 0.1), duration: 0.5 }}
                                        >
                                            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                                                <item.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{item.label}</h4>
                                                {item.link ? (
                                                    <a href={item.link} className="text-blue-600 dark:text-blue-400 hover:underline">
                                                        {item.value}
                                                    </a>
                                                ) : (
                                                    <p className="text-gray-600 dark:text-gray-300">{item.value}</p>
                                                )}
                                                {item.subvalue && (
                                                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.subvalue}</p>
                                                )}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Services */}
                            <motion.div
                                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700"
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ delay: 1.2, duration: 0.6 }}
                            >
                                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Services I Offer</h4>
                                <div className="space-y-3">
                                    {services.map((service, index) => (
                                        <motion.div
                                            key={service}
                                            className="flex items-center gap-3"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                            transition={{ delay: 1.4 + (index * 0.05), duration: 0.4 }}
                                        >
                                            <FiCheckCircle className="text-green-500" size={16} />
                                            <span className="text-gray-600 dark:text-gray-300">{service}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Social Links */}
                            <motion.div
                                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700"
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ delay: 1.6, duration: 0.6 }}
                            >
                                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Follow Me</h4>
                                <div className="flex gap-4">
                                    {socialLinks.map((social, index) => (
                                        <motion.a
                                            key={social.label}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 transition-all duration-200 ${social.color}`}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                            transition={{ delay: 1.8 + (index * 0.05), duration: 0.4 }}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <social.icon size={20} />
                                        </motion.a>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700"
                            initial={{ opacity: 0, x: 30 }}
                            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                        >
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Send Message</h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            <FiUser size={16} />
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="Enter your full name"
                                            className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 dark:bg-gray-700 dark:text-white focus:bg-white dark:focus:bg-gray-600"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            <FiMail size={16} />
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="your.email@example.com"
                                            className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 dark:bg-gray-700 dark:text-white focus:bg-white dark:focus:bg-gray-600"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        <FiMessageSquare size={16} />
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="What's this about?"
                                        className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 dark:bg-gray-700 dark:text-white focus:bg-white dark:focus:bg-gray-600"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        <FiMessageSquare size={16} />
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows="6"
                                        placeholder="Tell me about your project or inquiry..."
                                        className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 dark:bg-gray-700 dark:text-white focus:bg-white dark:focus:bg-gray-600 resize-none"
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full flex items-center justify-center gap-2 px-6 py-4 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${submitStatus === 'success' ? 'bg-green-600 hover:bg-green-700' : ''
                                        }`}
                                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                            Sending...
                                        </>
                                    ) : submitStatus === 'success' ? (
                                        <>
                                            <FiCheckCircle size={18} />
                                            Message Sent!
                                        </>
                                    ) : (
                                        <>
                                            <FiSend size={18} />
                                            Send Message
                                        </>
                                    )}
                                </motion.button>

                                {submitStatus === 'success' && (
                                    <motion.div
                                        className="p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-xl"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                    >
                                        <p className="text-green-600 dark:text-green-400 font-medium flex items-center gap-2">
                                            <FiCheckCircle size={16} />
                                            Thank you for your message! I'll get back to you soon.
                                        </p>
                                    </motion.div>
                                )}
                            </form>
                        </motion.div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Contact;