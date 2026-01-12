import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, FileText, Share2, Linkedin, Twitter, Link as LinkIcon, Clock, Award, Phone } from 'lucide-react';
import { blogData } from '../data/blogData';

interface BlogPostPageProps {
    id: string;
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ id }) => {
    const post = blogData.find(p => p.id === id);
    const otherPosts = blogData.filter(p => p.id !== id).slice(0, 3); // Simple recommendation logic

    if (!post) {
        return (
            <div className="min-h-screen bg-[#0C2E59] flex items-center justify-center text-white">
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-4">Article introuvable</h2>
                    <a href="#blog" className="text-[#BF9B8E] hover:underline">Retour au blog</a>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-[#0C2E59] min-h-screen text-white pt-32 pb-24">
            {/* Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 h-1 bg-[#BF9B8E] z-[1000]"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
            />

            <div className="max-w-7xl mx-auto px-6">

                {/* Back Button */}
                <div className="mb-12">
                    <a href="#blog" className="inline-flex items-center gap-2 text-[#BF9B8E] text-xs font-bold uppercase tracking-widest hover:text-white transition-colors group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Retour au blog
                    </a>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                    {/* LEFT COLUMN: Main Content (8 cols) */}
                    <article className="lg:col-span-8">
                        {/* Header */}
                        <header className="mb-12">
                            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-sm border border-[#BF9B8E]/30 bg-[#BF9B8E]/10 backdrop-blur text-[#BF9B8E] text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                                {post.category}
                            </div>

                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-tight mb-8">
                                {post.title}
                            </h1>

                            <div className="flex items-center gap-6 text-blue-200/50 text-sm font-mono uppercase tracking-widest">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    <span>{post.date}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    <span>5 min de lecture</span>
                                </div>
                            </div>
                        </header>

                        {/* Hero Image */}
                        <div className="relative aspect-[16/9] rounded-sm overflow-hidden mb-16 shadow-2xl border border-white/10 group">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0C2E59] via-transparent to-transparent opacity-60" />
                        </div>

                        {/* Content */}
                        <div className="prose prose-lg prose-invert max-w-none 
                            prose-headings:font-cinzel prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight prose-headings:text-white prose-headings:mb-6 prose-headings:mt-16
                            prose-h3:text-2xl prose-h3:text-[#BF9B8E] prose-h3:border-b prose-h3:border-[#BF9B8E]/20 prose-h3:pb-4
                            prose-p:font-light prose-p:leading-relaxed prose-p:text-blue-50/80 prose-p:mb-10 prose-p:text-lg
                            prose-strong:text-white prose-strong:font-black
                            prose-em:text-blue-100/90 prose-em:italic
                            prose-a:text-[#BF9B8E] prose-a:font-bold prose-a:no-underline hover:prose-a:underline
                            prose-ul:list-none prose-ul:pl-0 prose-ul:space-y-6 prose-ul:my-12
                            prose-li:pl-10 prose-li:relative prose-li:text-lg prose-li:text-blue-50/70
                            prose-li:before:content-[''] prose-li:before:absolute prose-li:before:left-0 prose-li:before:top-[0.6em] prose-li:before:w-3 prose-li:before:h-3 prose-li:before:bg-[#BF9B8E] prose-li:before:rounded-sm
                            ">

                            <div className="text-xl md:text-3xl font-cinzel font-bold leading-tight mb-16 text-white border-l-[6px] border-[#BF9B8E] pl-8 py-2">
                                {post.longDescription || post.description}
                            </div>

                            {/* Render HTML content safely */}
                            <div dangerouslySetInnerHTML={{ __html: post.content || '' }} />
                        </div>

                        {/* Share Section */}
                        <div className="mt-24 pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
                            <span className="text-sm font-bold uppercase tracking-widest text-white/50">Partager cet article</span>
                            <div className="flex gap-4">
                                <button className="w-12 h-12 rounded-sm border border-white/10 flex items-center justify-center hover:bg-[#BF9B8E] hover:text-[#0C2E59] hover:border-[#BF9B8E] transition-all duration-300">
                                    <Linkedin className="w-5 h-5" />
                                </button>
                                <button className="w-12 h-12 rounded-sm border border-white/10 flex items-center justify-center hover:bg-[#BF9B8E] hover:text-[#0C2E59] hover:border-[#BF9B8E] transition-all duration-300">
                                    <Twitter className="w-5 h-5" />
                                </button>
                                <button className="w-12 h-12 rounded-sm border border-white/10 flex items-center justify-center hover:bg-[#BF9B8E] hover:text-[#0C2E59] hover:border-[#BF9B8E] transition-all duration-300">
                                    <LinkIcon className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* "You might also like" Section */}
                        <div className="mt-24">
                            <div className="flex items-center gap-4 mb-12">
                                <div className="h-[2px] w-12 bg-[#BF9B8E]" />
                                <h3 className="text-xl font-black uppercase tracking-widest text-white">Vous aimerez aussi</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {otherPosts.map(other => (
                                    <a key={other.id} href={`#blog/${other.id}`} className="group block bg-white/5 rounded-sm overflow-hidden border border-white/10 hover:border-[#BF9B8E]/50 transition-colors">
                                        <div className="aspect-video relative overflow-hidden">
                                            <img src={other.image} alt={other.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                            <div className="absolute inset-0 bg-[#0C2E59]/50 group-hover:bg-[#0C2E59]/20 transition-colors" />
                                        </div>
                                        <div className="p-6">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-[#BF9B8E] mb-2 block">{other.category}</span>
                                            <h4 className="text-lg font-bold leading-tight group-hover:text-[#BF9B8E] transition-colors">{other.title}</h4>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </article>

                    {/* RIGHT COLUMN: Sidebar (4 cols) */}
                    <aside className="lg:col-span-4 max-w-sm mx-auto w-full">
                        <div className="sticky top-32 space-y-8">

                            {/* EXPERT CARD */}
                            <div className="bg-white text-[#0C2E59] rounded-sm p-8 text-center shadow-2xl">
                                <div className="w-32 h-32 mx-auto rounded-sm border-4 border-[#BF9B8E] p-1 mb-6 relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
                                        alt="Farah Zaoui"
                                        className="w-full h-full object-cover rounded-sm"
                                    />
                                    <div className="absolute -bottom-2 -right-2 bg-[#BF9B8E] text-[#0C2E59] rounded-sm p-2 shadow-lg">
                                        <Award className="w-5 h-5" />
                                    </div>
                                </div>

                                <h3 className="text-2xl font-black uppercase tracking-tight mb-1">Farah Zaoui</h3>
                                <p className="text-[#BF9B8E] font-bold text-xs uppercase tracking-widest mb-6">Experte N°1 Droit & Intégrité</p>

                                <p className="text-sm leading-relaxed mb-8 text-[#0C2E59]/80 font-medium">
                                    "J' accompagne les dirigeants et les élus dans la sécurisation de leurs décisions et la diffusion d'une culture éthique performante."
                                </p>

                                <a href="#contact" className="w-full inline-flex items-center justify-center gap-2 bg-[#0C2E59] text-white py-4 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-[#0C2E59]/90 transition-colors">
                                    <Phone className="w-4 h-4" />
                                    Contactez-moi
                                </a>
                            </div>

                            {/* CTA CARD */}
                            <div className="bg-[#BF9B8E] rounded-sm p-8 text-center relative overflow-hidden">
                                {/* Abstract Pattern */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-sm blur-2xl -translate-y-1/2 translate-x-1/2"></div>

                                <h3 className="text-[#0C2E59] text-2xl font-black uppercase tracking-tight mb-4 relative z-10">
                                    Prêt à passer à l'action ?
                                </h3>
                                <p className="text-[#0C2E59]/80 text-sm mb-8 leading-relaxed relative z-10">
                                    Ne laissez plus les zones grises fragiliser votre structure. Formez-vous dès maintenant.
                                </p>
                                <a href="#formation" className="w-full inline-flex items-center justify-center gap-2 bg-white text-[#0C2E59] py-4 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-[#0C2E59] hover:text-white transition-colors relative z-10">
                                    Je me lance !
                                </a>
                            </div>
                        </div>
                    </aside>

                </div>

            </div>
        </div>
    );
};

export default BlogPostPage;
