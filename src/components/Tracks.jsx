import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Bot, Leaf, ShieldCheck } from 'lucide-react';

const Tracks = () => {
    const tracks = [
        {
            icon: <Zap size={40} className="text-white" />,
            title: "Energy Consumption & Optimization",
            desc: "Monitor, analyze, and optimize electricity usage to reduce energy wastage and higher costs.",
            color: "from-[#4facfe] to-[#00f2fe]", // Cyan/Blue gradient
            delay: 0.1
        },
        {
            icon: <Bot size={40} className="text-white" />,
            title: "Automation in Daily Life",
            desc: "Streamline routine digital tasks like emails and scheduling to improve efficiency and simplify everyday life.",
            color: "from-[#f12711] to-[#f5af19]", // Orange/Yellow gradient (Goku)
            delay: 0.2
        },
        {
            icon: <Leaf size={40} className="text-white" />,
            title: "Sustainability: Green-Route API",
            desc: "Design routing systems that prioritize fuel-efficiency over just the fastest path through traffic.",
            color: "from-[#11998e] to-[#38ef7d]", // Green gradient
            delay: 0.3
        },
        {
            icon: <ShieldCheck size={40} className="text-white" />,
            title: "NLP: Fact-Shield Filter",
            desc: "Build solutions to filter out 'hallucinations' in LLMs to ensure factual safety for critical support.",
            color: "from-[#b224ef] to-[#7579ff]", // Purple gradient
            delay: 0.4
        }
    ];

    return (
        <section id="tracks" className="py-24 bg-goku-dark relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-heading text-5xl md:text-6xl text-white mb-4 uppercase"
                    >
                        Choose Your <span className="text-goku-indigo">Domain</span>
                    </motion.h2>
                    <div className="h-1 w-24 bg-goku-yellow mx-auto mb-6"></div>
                    <p className="text-gray-400 font-sans max-w-2xl mx-auto">
                        Pick a track, assemble your squad, and build a project that challenges the status quo.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {tracks.map((track, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: track.delay }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="relative group h-full cursor-pointer"
                        >
                            {/* Background gradient card */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${track.color} rounded-2xl opacity-70 blur-sm flex group-hover:opacity-100 transition-opacity duration-300`}></div>

                            <div className="relative h-full bg-goku-indigo rounded-2xl p-8 border border-white/20 overflow-hidden flex flex-col">
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${track.color} p-0.5 mb-6 shadow-lg`}>
                                    <div className="w-full h-full bg-goku-indigo rounded-[14px] flex items-center justify-center">
                                        {track.icon}
                                    </div>
                                </div>

                                <h3 className="font-heading text-2xl text-white mb-3 tracking-wide">{track.title}</h3>
                                <p className="text-gray-400 font-sans text-sm leading-relaxed flex-grow">
                                    {track.desc}
                                </p>

                                {/* Diagonal strip effect */}
                                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-white/5 rotate-45 group-hover:scale-150 transition-transform duration-500"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Tracks;
