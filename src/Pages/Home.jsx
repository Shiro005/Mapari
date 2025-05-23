import { motion } from 'framer-motion';
import { useState } from 'react';
import {
    Phone, Mail, MapPin, Instagram, Facebook, Linkedin, Twitter,
    Zap, Shield, Droplets, CreditCard, GraduationCap, Building,
    Target, Users, Award, ChevronRight, Star, Clock, CheckCircle,
    TrendingUp, Globe, Smartphone, Briefcase, Heart, Sparkles,
    Send, Wallet, Lock, ShieldCheck, Server, Database, Cpu, ShieldHalf
} from 'lucide-react';
import Header from './Header';

const Home = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });
    const [walletConnected, setWalletConnected] = useState(false);
    const [walletAddress, setWalletAddress] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);

    // Mock Web3 connection
    const connectWallet = () => {
        // In a real app, this would connect to MetaMask or other wallet
        setWalletConnected(true);
        setWalletAddress('0x7f...3a4b');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send to a backend or smart contract
        console.log('Form submitted:', formData);
        setFormSubmitted(true);
        setFormData({
            name: '',
            email: '',
            phone: '',
            service: '',
            message: ''
        });
        setTimeout(() => setFormSubmitted(false), 5000);
    };

    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: "easeOut" }
    };

    const fadeInScale = {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.8, ease: "easeOut" }
    };

    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const services = [
        { 
            icon: Zap, 
            title: 'Electricity Bill Payment', 
            subtitle: 'Instant digital payments',
            color: 'from-yellow-400 to-orange-500',
            description: 'Secure and instant electricity bill payments with digital receipts'
        },
        { 
            icon: Building, 
            title: 'Property Tax Services', 
            subtitle: 'Online tax management',
            color: 'from-green-400 to-emerald-600',
            description: 'Complete property tax solutions with documentation support'
        },
        { 
            icon: Droplets, 
            title: 'Water Bill Payments', 
            subtitle: 'Hassle-free processing',
            color: 'from-blue-400 to-cyan-600',
            description: 'Quick water bill payments with instant confirmation'
        },
        { 
            icon: CreditCard, 
            title: 'PAN Card Services', 
            subtitle: 'End-to-end solutions',
            color: 'from-purple-400 to-pink-500',
            description: 'PAN card application, correction, and tracking services'
        },
        { 
            icon: Users, 
            title: 'Government Services', 
            subtitle: 'Document processing',
            color: 'from-indigo-400 to-blue-600',
            description: 'All government-related documentation and certification'
        },
        { 
            icon: GraduationCap, 
            title: 'Educational Services', 
            subtitle: 'Academic support',
            color: 'from-orange-400 to-red-500',
            description: 'Educational documentation and verification services'
        }
    ];

    const achievements = [
        { icon: Award, number: '5000+', label: 'Satisfied Clients', color: 'text-yellow-500' },
        { icon: Clock, number: '10+', label: 'Years Experience', color: 'text-blue-500' },
        { icon: CheckCircle, number: '99.9%', label: 'Success Rate', color: 'text-green-500' },
        { icon: TrendingUp, number: '24/7', label: 'Digital Support', color: 'text-purple-500' }
    ];

    const journey = [
        { year: '2014', title: 'B4U Computer Services', desc: 'Founded as a basic computer service provider' },
        { year: '2016', title: 'Education Division Launch', desc: 'Expanded into computer education and training' },
        { year: '2018', title: 'Regional Centers Opened', desc: 'Established service centers in multiple locations' },
        { year: '2020', title: 'Higher Education Venture', desc: 'Launched commerce and science college programs' },
        { year: '2022', title: 'Multi-Service Platform', desc: 'Diversified into comprehensive service solutions' },
        { year: '2024', title: 'Digital Transformation', desc: 'Fully integrated online service platform launched' }
    ];

    const testimonials = [
        { name: 'Raj Patel', service: 'Electricity Bill', rating: 5, text: 'Incredibly fast and reliable service! My bill was paid within minutes.' },
        { name: 'Sunita Sharma', service: 'PAN Card', rating: 5, text: 'Completed my PAN application in one day. Exceptional efficiency!' },
        { name: 'Amit Deshmukh', service: 'Government Docs', rating: 5, text: 'Made complex documentation simple and secure. Highly recommended!' }
    ];

    const features = [
        { icon: ShieldCheck, title: 'Bank-Level Security', desc: '256-bit SSL encryption for all transactions' },
        { icon: Server, title: 'Cloud Infrastructure', desc: 'Enterprise-grade cloud hosting for 99.99% uptime' },
        { icon: Database, title: 'Data Protection', desc: 'GDPR-compliant data handling procedures' },
        { icon: Cpu, title: 'Smart Automation', desc: 'AI-powered processing for faster service' }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-x-hidden">
            <Header />
            {/* Hero Section */}
            <motion.section
                className="pt-10 relative min-h-screen flex items-center justify-center overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-blue-900 to-slate-900">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/15"></div>
                    
                    {/* Animated grid background */}
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNwYXR0ZXJuKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==')]"></div>
                    </div>
                </div>

                <div className="relative container mx-auto px-4 py-16 text-center text-white">
                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        animate="animate"
                        className="max-w-6xl mx-auto"
                    >
                        <motion.div 
                            variants={fadeInScale}
                            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-blue-300/30 rounded-full px-6 py-2 mb-8"
                        >
                            <Shield className="w-5 h-5 text-blue-300" />
                            <span className="text-blue-200 font-semibold">Verified Digital Business</span>
                            <CheckCircle className="w-5 h-5 text-blue-300" />
                        </motion.div>

                        <motion.div variants={fadeInUp}>
                            <h1 className="text-5xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent leading-tight">
                                Aapla Sevek Online Services 
                            </h1>
                            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-blue-100">
                                Your Trusted Online Partner
                            </h2>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="mb-8">
                            <p className="text-2xl lg:text-3xl font-semibold text-white mb-2">
                                Vinod Murlidhar Mapari
                            </p>
                            <p className="text-lg lg:text-xl text-blue-200">
                                Founder & CEO - Certified Digital Solutions Provider
                            </p>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="mb-12">
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
                                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                                    Digital Services at Your Fingertips ⚡
                                </h3>
                                <p className="text-lg lg:text-xl text-blue-100 mb-4">
                                    Fast, Reliable & Secure Online Solutions for Modern Needs
                                </p>
                                <div className="flex flex-wrap justify-center gap-4 mt-6">
                                    <span className="bg-green-500/20 text-green-200 px-4 py-2 rounded-full text-sm font-semibold">
                                        ✓ 10+ Years Trusted Experience
                                    </span>
                                    <span className="bg-blue-500/20 text-blue-200 px-4 py-2 rounded-full text-sm font-semibold">
                                        ✓ Blockchain-Verified Transactions
                                    </span>
                                    <span className="bg-purple-500/20 text-purple-200 px-4 py-2 rounded-full text-sm font-semibold">
                                        ✓ 24/7 Digital Support
                                    </span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button 
                                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
                                onClick={connectWallet}
                            >
                                {walletConnected ? (
                                    <>
                                        <Wallet className="w-5 h-5 mr-2" />
                                        Connected: {walletAddress.substring(0, 6)}...{walletAddress.substring(walletAddress.length - 4)}
                                    </>
                                ) : (
                                    <>
                                        <Wallet className="w-5 h-5 mr-2" />
                                        Connect Wallet for Web3 Services
                                    </>
                                )}
                            </button>
                            <a href="#services" className="bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transform hover:scale-105 transition-all duration-300">
                                Explore Our Services
                            </a>
                        </motion.div>
                    </motion.div>
                </div>

                <motion.div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
                    </div>
                </motion.div>
            </motion.section>

            {/* Contact Bar - Sticky */}
            <motion.section
                className="py-4 bg-gradient-to-r from-slate-800 to-slate-900 text-white shadow-2xl sticky top-0 z-50"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
            >
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex flex-wrap items-center justify-center gap-6">
                            <a href="tel:+919881121121" className="flex items-center gap-3 group">
                                <div className="p-2 bg-blue-500 rounded-full group-hover:bg-blue-600 transition-colors">
                                    <Phone className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-300">Support Hotline</p>
                                    <p className="font-bold text-blue-300">+91 9881121121</p>
                                </div>
                            </a>
                            
                            <a href="mailto:info@mapariservices.com" className="flex items-center gap-3 group">
                                <div className="p-2 bg-green-500 rounded-full group-hover:bg-green-600 transition-colors">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-300">Email Us</p>
                                    <p className="font-bold text-green-300">info@mapariservices.com</p>
                                </div>
                            </a>
                            
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-purple-500 rounded-full">
                                    <MapPin className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-300">HQ Location</p>
                                    <p className="font-bold text-purple-300">Akola, Maharashtra</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-4">
                            <span className="hidden md:block text-sm text-gray-300">Connect:</span>
                            <div className="flex gap-3">
                                {[
                                    { icon: Instagram, color: 'bg-gradient-to-br from-pink-500 to-red-500' },
                                    { icon: Facebook, color: 'bg-gradient-to-br from-blue-600 to-blue-800' },
                                    { icon: Linkedin, color: 'bg-gradient-to-br from-blue-500 to-blue-700' },
                                    { icon: Twitter, color: 'bg-gradient-to-br from-sky-400 to-sky-600' }
                                ].map(({icon: Icon, color}, index) => (
                                    <a 
                                        key={index} 
                                        href="#" 
                                        className={`p-2 ${color} rounded-full hover:scale-110 transition-transform duration-300`}
                                        aria-label={`Follow us on ${Icon.name}`}
                                    >
                                        <Icon className="w-4 h-4 text-white" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Services Section */}
            <motion.section
                id="services"
                className="py-20 bg-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true, margin: "-100px" }}
            >
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center mb-16"
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-6 py-2 rounded-full mb-6">
                            <Sparkles className="w-5 h-5" />
                            <span className="font-semibold">Premium Digital Solutions</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                            Comprehensive Service Portfolio
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            End-to-end digital services designed for individuals and businesses
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInScale}
                                whileHover={{ y: -10 }}
                                className="group"
                            >
                                <div className="h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-blue-100 overflow-hidden relative">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                                    
                                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:rotate-6`}>
                                        <service.icon className="w-8 h-8 text-white" />
                                    </div>
                                    
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                                        {service.title}
                                    </h3>
                                    <p className="text-blue-600 font-semibold mb-3 text-sm">
                                        {service.subtitle}
                                    </p>
                                    <p className="text-gray-600 leading-relaxed mb-6">
                                        {service.description}
                                    </p>
                                    
                                    <div className="flex justify-between items-center mt-auto">
                                        <span className="text-xs font-semibold text-gray-400 group-hover:text-blue-500 transition-colors">
                                            Learn more
                                        </span>
                                        <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-blue-500 group-hover:translate-x-2 transition-all duration-300" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>

            {/* Security Features */}
            <motion.section
                className="py-20 bg-gradient-to-br from-slate-50 to-blue-50"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center mb-16"
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-6 py-2 rounded-full mb-6">
                            <Lock className="w-5 h-5" />
                            <span className="font-semibold">Enterprise Security</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                            Your Security Is Our Priority
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            We implement military-grade security measures to protect your data
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                            >
                                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                                    <feature.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {feature.desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>

            {/* Achievements Section */}
            <motion.section
                className="py-16 bg-gradient-to-r from-slate-800 via-slate-900 to-black text-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <div className="container mx-auto px-4">
                    <motion.div
                        className="grid grid-cols-2 lg:grid-cols-4 gap-8"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {achievements.map((achievement, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInScale}
                                className="text-center group"
                            >
                                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300`}>
                                    <achievement.icon className={`w-8 h-8 ${achievement.color}`} />
                                </div>
                                <h3 className="text-3xl lg:text-4xl font-bold mb-2 text-white">
                                    {achievement.number}
                                </h3>
                                <p className="text-gray-300 font-semibold">
                                    {achievement.label}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>

            {/* Web3 Service Form */}
            <motion.section
                className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="p-10 lg:p-12">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.8 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 w-max mb-6">
                                        <ShieldHalf className="w-5 h-5" />
                                        <span className="font-semibold text-sm">Web3 Enabled</span>
                                    </div>
                                    <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                                        Request Digital Service
                                    </h2>
                                    <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                                        Complete this form to initiate your service request. For Web3 users, connect your wallet for enhanced security and tracking.
                                    </p>
                                    
                                    {formSubmitted && (
                                        <motion.div 
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="bg-green-500/20 border border-green-400/30 rounded-xl p-4 mb-6"
                                        >
                                            <div className="flex items-center gap-2">
                                                <CheckCircle className="w-5 h-5 text-green-300" />
                                                <span className="font-medium">Request submitted successfully!</span>
                                            </div>
                                        </motion.div>
                                    )}

                                    <form onSubmit={handleSubmit}>
                                        <div className="space-y-4">
                                            <div>
                                                <label htmlFor="name" className="block text-sm font-medium text-blue-100 mb-1">Full Name</label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium text-blue-100 mb-1">Email</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                                                    placeholder="your@email.com"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="phone" className="block text-sm font-medium text-blue-100 mb-1">Phone</label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                                                    placeholder="+91 9876543210"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="service" className="block text-sm font-medium text-blue-100 mb-1">Service Needed</label>
                                                <select
                                                    id="service"
                                                    name="service"
                                                    value={formData.service}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                                                >
                                                    <option value="">Select a service</option>
                                                    <option value="Electricity Bill">Electricity Bill Payment</option>
                                                    <option value="Property Tax">Property Tax Services</option>
                                                    <option value="Water Bill">Water Bill Payment</option>
                                                    <option value="PAN Card">PAN Card Services</option>
                                                    <option value="Government Docs">Government Documentation</option>
                                                    <option value="Education">Educational Services</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label htmlFor="message" className="block text-sm font-medium text-blue-100 mb-1">Additional Details</label>
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    rows="3"
                                                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                                                    placeholder="Any specific requirements..."
                                                ></textarea>
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            className="mt-6 w-full bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white px-6 py-4 rounded-lg font-bold shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center justify-center gap-2"
                                        >
                                            <Send className="w-5 h-5" />
                                            Submit Request
                                        </button>
                                    </form>
                                </motion.div>
                            </div>
                            <div className="bg-gradient-to-br from-blue-500/20 to-indigo-600/30 p-10 lg:p-12 flex flex-col">
                                <div className="bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNwYXR0ZXJuKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==')] absolute inset-0 opacity-50"></div>
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold mb-6">Why Connect Your Wallet?</h3>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <div className="bg-blue-400/20 p-1 rounded-full mt-1">
                                                <CheckCircle className="w-4 h-4 text-blue-300" />
                                            </div>
                                            <span className="flex-1">Secure blockchain-based transaction tracking</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="bg-blue-400/20 p-1 rounded-full mt-1">
                                                <CheckCircle className="w-4 h-4 text-blue-300" />
                                            </div>
                                            <span className="flex-1">Tamper-proof service request records</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="bg-blue-400/20 p-1 rounded-full mt-1">
                                                <CheckCircle className="w-4 h-4 text-blue-300" />
                                            </div>
                                            <span className="flex-1">Faster verification process</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="bg-blue-400/20 p-1 rounded-full mt-1">
                                                <CheckCircle className="w-4 h-4 text-blue-300" />
                                            </div>
                                            <span className="flex-1">Eligibility for token rewards</span>
                                        </li>
                                    </ul>

                                    <div className="mt-8 p-6 bg-white/10 rounded-xl border border-white/20">
                                        <div className="flex items-center gap-3 mb-4">
                                            <Wallet className="w-6 h-6 text-blue-300" />
                                            <h4 className="font-bold">Wallet Status</h4>
                                        </div>
                                        {walletConnected ? (
                                            <div className="space-y-2">
                                                <p className="text-sm text-blue-100">Connected to:</p>
                                                <p className="font-mono text-blue-50 bg-white/10 px-3 py-2 rounded-lg text-sm break-all">
                                                    {walletAddress}
                                                </p>
                                                <p className="text-xs text-green-300 mt-2 flex items-center gap-1">
                                                    <CheckCircle className="w-3 h-3" />
                                                    Ready for Web3 services
                                                </p>
                                            </div>
                                        ) : (
                                            <div className="space-y-3">
                                                <p className="text-sm text-blue-100">No wallet connected</p>
                                                <button 
                                                    onClick={connectWallet}
                                                    className="w-full bg-gradient-to-r from-blue-400 to-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover:from-blue-500 hover:to-blue-600 transition-all"
                                                >
                                                    <Wallet className="w-4 h-4" />
                                                    Connect Wallet
                                                </button>
                                                <p className="text-xs text-blue-200">
                                                    We support MetaMask, Coinbase Wallet, and more
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Company Journey */}
            <motion.section
                className="py-20 bg-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center mb-16"
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                            Our Evolution Story
                        </h2>
                        <p className="text-xl text-gray-600">
                            From humble beginnings to digital transformation leaders
                        </p>
                    </motion.div>

                    <motion.div
                        className="max-w-6xl mx-auto"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        <div className="relative">
                            {/* Timeline line */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-indigo-600"></div>
                            
                            {journey.map((step, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    className={`mb-12 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center group`}
                                >
                                    <div className={`flex-1 ${index % 2 === 0 ? 'pr-8 lg:pr-16' : 'pl-8 lg:pl-16'}`}>
                                        <div className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 group-hover:shadow-xl transition-all duration-500 relative ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                                            <div className={`absolute top-6 ${index % 2 === 0 ? 'right-0 translate-x-full' : 'left-0 -translate-x-full'} w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg`}></div>
                                            <div className="text-2xl font-bold text-blue-600 mb-2">{step.year}</div>
                                            <h3 className="text-xl font-bold text-gray-800 mb-3">{step.title}</h3>
                                            <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                                        </div>
                                    </div>
                                    
                                    {/* Central circle */}
                                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-lg group-hover:bg-blue-600 transition-colors"></div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Testimonials */}
            <motion.section
                className="py-20 bg-gradient-to-br from-slate-50 to-blue-50"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <div className="container mx-auto px-4">
                    <motion.div
                        className="text-center mb-16"
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                            What Our Clients Say
                        </h2>
                        <p className="text-xl text-gray-600">
                            Real feedback from satisfied customers
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInScale}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                            >
                                <div className="flex items-center mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                    ))}
                                </div>
                                <p className="text-gray-600 mb-6 leading-relaxed italic">
                                    "{testimonial.text}"
                                </p>
                                <div className="border-t pt-4">
                                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                                    <p className="text-sm text-blue-600 font-medium">{testimonial.service}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>

            {/* CTA Section */}
            <motion.section
                className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10"></div>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNwYXR0ZXJuKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==')] opacity-30"></div>
                
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        className="text-center max-w-4xl mx-auto"
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl lg:text-6xl font-bold mb-6">
                            Ready to Get Started?
                        </h2>
                        <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
                            Join thousands of satisfied customers who trust us with their digital service needs
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                            <a 
                                href="tel:+919881121121"
                                className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-white/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
                            >
                                <Phone className="w-5 h-5 mr-2" />
                                Call Now: +91 9881121121
                            </a>
                            <a 
                                href="#services"
                                className="bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transform hover:scale-105 transition-all duration-300"
                            >
                                Explore Services
                            </a>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                <Globe className="w-8 h-8 text-blue-300 mx-auto mb-3" />
                                <h3 className="font-bold text-lg mb-2">24/7 Online Support</h3>
                                <p className="text-blue-100 text-sm">Always here when you need us</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                <Smartphone className="w-8 h-8 text-blue-300 mx-auto mb-3" />
                                <h3 className="font-bold text-lg mb-2">Mobile Friendly</h3>
                                <p className="text-blue-100 text-sm">Access from any device</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                <Heart className="w-8 h-8 text-blue-300 mx-auto mb-3" />
                                <h3 className="font-bold text-lg mb-2">Customer First</h3>
                                <p className="text-blue-100 text-sm">Your satisfaction is our priority</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Footer */}
            <footer className="bg-slate-900 text-white py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                        {/* Company Info */}
                        <div className="lg:col-span-2">
                            <h3 className="text-2xl font-bold mb-4 text-blue-300">
                                Aapla Sevek Online Services
                            </h3>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                Your trusted partner for all digital service needs. We've been serving customers 
                                with dedication and excellence for over a decade.
                            </p>
                            <div className="flex items-center gap-2 mb-4">
                                <Briefcase className="w-5 h-5 text-blue-400" />
                                <span className="text-gray-300">Vinod Murlidhar Mapari - Founder & CEO</span>
                            </div>
                            <div className="flex gap-4">
                                {[
                                    { icon: Instagram, color: 'hover:bg-pink-500' },
                                    { icon: Facebook, color: 'hover:bg-blue-600' },
                                    { icon: Linkedin, color: 'hover:bg-blue-500' },
                                    { icon: Twitter, color: 'hover:bg-sky-500' }
                                ].map(({icon: Icon, color}, index) => (
                                    <a 
                                        key={index} 
                                        href="#" 
                                        className={`p-3 bg-slate-800 rounded-full ${color} transition-colors duration-300`}
                                    >
                                        <Icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-lg font-bold mb-4 text-blue-300">Quick Links</h4>
                            <ul className="space-y-2">
                                {['Services', 'About Us', 'Contact', 'Support', 'Privacy Policy', 'Terms of Service'].map((link, index) => (
                                    <li key={index}>
                                        <a href="#" className="text-gray-300 hover:text-blue-300 transition-colors duration-300">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className="text-lg font-bold mb-4 text-blue-300">Contact Info</h4>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <Phone className="w-5 h-5 text-blue-400 mt-1" />
                                    <div>
                                        <p className="font-medium">+91 9881121121</p>
                                        <p className="text-sm text-gray-400">24/7 Support</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Mail className="w-5 h-5 text-blue-400 mt-1" />
                                    <div>
                                        <p className="font-medium">vinod.mapari@apalasevek.com</p>
                                        <p className="text-sm text-gray-400">Email Support</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                                    <div>
                                        <p className="font-medium">Akola, Maharashtra</p>
                                        <p className="text-sm text-gray-400">India</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-slate-800 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <p className="text-gray-400 text-sm">
                                © 2024 Mapari Digital Services. All rights reserved.
                            </p>
                            <div className="flex items-center gap-6 text-sm text-gray-400">
                                <span>Built with ❤️ for digital India</span>
                                <div className="flex items-center gap-2">
                                    <Shield className="w-4 h-4 text-green-400" />
                                    <span>Secure & Verified</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;
