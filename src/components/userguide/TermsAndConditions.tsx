import Navigation from "@/components/portfolio/Navigation";
import Footer from "@/components/portfolio/Footer";

export default function TermsConditions() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 flex flex-col overflow-x-hidden">
            <Navigation />

            <main className="flex-1 relative">
                {/* Animated background blobs */}
                <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 -left-1/2 w-[800px] h-[800px] bg-gradient-to-br from-cyan-200/30 via-blue-200/20 to-indigo-200/10 dark:from-cyan-900/20 dark:via-blue-900/10 dark:to-indigo-900/5 rounded-full blur-3xl animate-blob" />
                    <div className="absolute bottom-0 -right-1/2 w-[800px] h-[800px] bg-gradient-to-tl from-violet-200/30 via-purple-200/20 to-pink-200/10 dark:from-violet-900/20 dark:via-purple-900/10 dark:to-pink-900/5 rounded-full blur-3xl animate-blob animation-delay-4000" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-fuchsia-200/20 via-rose-200/10 to-orange-200/10 dark:from-fuchsia-900/10 dark:via-rose-900/5 dark:to-orange-900/5 rounded-full blur-3xl animate-blob animation-delay-8000" />
                </div>

                {/* Hero Section */}
                <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-green-50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 shadow-lg shadow-cyan-500/5 dark:shadow-cyan-500/10 mb-8 animate-float">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
                                </span>
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Please read carefully
                                </span>
                            </div>

                            <h1 className="text-2xl md:text-2xl lg:text-2xl font-extrabold tracking-tight mb-6">
                                <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 dark:from-cyan-400 dark:via-blue-400 dark:to-violet-400 bg-clip-text text-transparent animate-gradient">
                                    Terms & Conditions
                                </span>
                            </h1>

                            <p className="text-xl md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
                                By using our services, you agree to comply with and be bound by the following
                                terms and conditions. Please review them carefully.
                            </p>

                            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                                <div className="flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-200/50 dark:border-gray-700/50">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span>Effective: <span className="font-medium text-gray-700 dark:text-gray-200">August 12, 2026</span></span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-200/50 dark:border-gray-700/50">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>Reading time: <span className="font-medium text-gray-700 dark:text-gray-200">~6 minutes</span></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative floating shapes */}
                    <div className="absolute top-20 left-10 w-16 h-16 bg-cyan-400/10 dark:bg-cyan-300/10 rounded-full blur-2xl animate-float animation-delay-2000" />
                    <div className="absolute bottom-20 right-10 w-24 h-24 bg-blue-400/10 dark:bg-blue-300/10 rounded-full blur-2xl animate-float animation-delay-6000" />
                </section>

                {/* Content with glass cards */}
                <section className="py-12 md:py-20 relative">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto">
                            {/* Intro card */}
                            <div className="relative group mb-16">
                                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition duration-500" />
                                <div className="relative p-8 md:p-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-gray-800/30 shadow-xl">
                                    <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                                        Welcome to our website. These Terms and Conditions constitute a legally binding
                                        agreement between you and us. By accessing or using our services, you acknowledge
                                        that you have read, understood, and agree to be bound by these terms.
                                    </p>
                                </div>
                            </div>

                            {/* Sections with cards */}
                            {[
                                {
                                    id: "acceptance",
                                    icon: "✅",
                                    title: "1. Acceptance of Terms",
                                    content: (
                                        <p>
                                            By using our website and services, you agree to comply with and be legally bound
                                            by these Terms and Conditions. If you do not agree with any part of these terms,
                                            you must not use our services. We reserve the right to update or modify these
                                            terms at any time without prior notice. Your continued use constitutes acceptance
                                            of the updated terms.
                                        </p>
                                    )
                                },
                                {
                                    id: "services",
                                    icon: "🛠️",
                                    title: "2. Description of Services",
                                    content: (
                                        <>
                                            <p>
                                                We provide a platform that allows users to explore, create, and share content.
                                                Our services may include, but are not limited to:
                                            </p>
                                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                                                <li className="flex items-center gap-3 p-3 bg-gray-50/80 dark:bg-gray-800/50 rounded-lg border border-gray-100 dark:border-gray-700/30">
                                                    <span className="text-cyan-500 text-xl">📄</span>
                                                    <span>Content publishing and sharing</span>
                                                </li>
                                                <li className="flex items-center gap-3 p-3 bg-gray-50/80 dark:bg-gray-800/50 rounded-lg border border-gray-100 dark:border-gray-700/30">
                                                    <span className="text-cyan-500 text-xl">👥</span>
                                                    <span>User profiles and networking</span>
                                                </li>
                                                <li className="flex items-center gap-3 p-3 bg-gray-50/80 dark:bg-gray-800/50 rounded-lg border border-gray-100 dark:border-gray-700/30">
                                                    <span className="text-cyan-500 text-xl">📊</span>
                                                    <span>Analytics and insights</span>
                                                </li>
                                                <li className="flex items-center gap-3 p-3 bg-gray-50/80 dark:bg-gray-800/50 rounded-lg border border-gray-100 dark:border-gray-700/30">
                                                    <span className="text-cyan-500 text-xl">🔔</span>
                                                    <span>Notifications and updates</span>
                                                </li>
                                            </ul>
                                            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                                                We reserve the right to modify, suspend, or discontinue any service at any time.
                                            </p>
                                        </>
                                    )
                                },
                                {
                                    id: "user-accounts",
                                    icon: "👤",
                                    title: "3. User Accounts",
                                    content: (
                                        <>
                                            <p>
                                                To access certain features, you may need to create an account. You are responsible
                                                for maintaining the confidentiality of your account credentials and for all activities
                                                that occur under your account.
                                            </p>
                                            <ul className="space-y-2 mt-3">
                                                <li className="flex items-start gap-3 p-3 bg-gradient-to-r from-cyan-50/50 to-transparent dark:from-cyan-900/20 dark:to-transparent rounded-lg border-l-4 border-cyan-400 dark:border-cyan-500">
                                                    <span className="text-cyan-500 text-sm font-bold">▸</span>
                                                    <span>You must be at least 13 years old to create an account.</span>
                                                </li>
                                                <li className="flex items-start gap-3 p-3 bg-gradient-to-r from-cyan-50/50 to-transparent dark:from-cyan-900/20 dark:to-transparent rounded-lg border-l-4 border-cyan-400 dark:border-cyan-500">
                                                    <span className="text-cyan-500 text-sm font-bold">▸</span>
                                                    <span>You agree to provide accurate and complete information.</span>
                                                </li>
                                                <li className="flex items-start gap-3 p-3 bg-gradient-to-r from-cyan-50/50 to-transparent dark:from-cyan-900/20 dark:to-transparent rounded-lg border-l-4 border-cyan-400 dark:border-cyan-500">
                                                    <span className="text-cyan-500 text-sm font-bold">▸</span>
                                                    <span>You are responsible for all activities under your account.</span>
                                                </li>
                                                <li className="flex items-start gap-3 p-3 bg-gradient-to-r from-cyan-50/50 to-transparent dark:from-cyan-900/20 dark:to-transparent rounded-lg border-l-4 border-cyan-400 dark:border-cyan-500">
                                                    <span className="text-cyan-500 text-sm font-bold">▸</span>
                                                    <span>We reserve the right to suspend or terminate accounts that violate these terms.</span>
                                                </li>
                                            </ul>
                                        </>
                                    )
                                },
                                {
                                    id: "content",
                                    icon: "📝",
                                    title: "4. User-Generated Content",
                                    content: (
                                        <>
                                            <p>
                                                You retain ownership of any content you submit, post, or display on our platform.
                                                However, by submitting content, you grant us a worldwide, non-exclusive, royalty-free
                                                license to use, reproduce, modify, and distribute it in connection with our services.
                                            </p>
                                            <div className="flex flex-wrap gap-3 mt-4">
                                                <span className="px-4 py-2 bg-amber-100/80 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-full text-sm font-medium border border-amber-200 dark:border-amber-800/30">
                                                    ⚠️ You must have the rights to the content you submit.
                                                </span>
                                                <span className="px-4 py-2 bg-amber-100/80 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-full text-sm font-medium border border-amber-200 dark:border-amber-800/30">
                                                    🚫 No illegal, harmful, or infringing content.
                                                </span>
                                            </div>
                                            <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                                                We may remove any content that violates these terms or is deemed inappropriate.
                                            </p>
                                        </>
                                    )
                                },
                                {
                                    id: "prohibited",
                                    icon: "🚫",
                                    title: "5. Prohibited Conduct",
                                    content: (
                                        <div className="space-y-3">
                                            <p>You agree not to engage in any of the following prohibited activities:</p>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                <div className="p-3 bg-red-50/80 dark:bg-red-900/20 rounded-lg border border-red-100 dark:border-red-800/30 flex items-start gap-2">
                                                    <span className="text-red-500 text-lg">✖</span>
                                                    <span>Violating any laws or regulations</span>
                                                </div>
                                                <div className="p-3 bg-red-50/80 dark:bg-red-900/20 rounded-lg border border-red-100 dark:border-red-800/30 flex items-start gap-2">
                                                    <span className="text-red-500 text-lg">✖</span>
                                                    <span>Impersonating others or providing false information</span>
                                                </div>
                                                <div className="p-3 bg-red-50/80 dark:bg-red-900/20 rounded-lg border border-red-100 dark:border-red-800/30 flex items-start gap-2">
                                                    <span className="text-red-500 text-lg">✖</span>
                                                    <span>Distributing malware, viruses, or harmful code</span>
                                                </div>
                                                <div className="p-3 bg-red-50/80 dark:bg-red-900/20 rounded-lg border border-red-100 dark:border-red-800/30 flex items-start gap-2">
                                                    <span className="text-red-500 text-lg">✖</span>
                                                    <span>Harassing, abusing, or harming others</span>
                                                </div>
                                                <div className="p-3 bg-red-50/80 dark:bg-red-900/20 rounded-lg border border-red-100 dark:border-red-800/30 flex items-start gap-2">
                                                    <span className="text-red-500 text-lg">✖</span>
                                                    <span>Interfering with the security or integrity of our services</span>
                                                </div>
                                                <div className="p-3 bg-red-50/80 dark:bg-red-900/20 rounded-lg border border-red-100 dark:border-red-800/30 flex items-start gap-2">
                                                    <span className="text-red-500 text-lg">✖</span>
                                                    <span>Collecting user data without consent</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                },
                                {
                                    id: "intellectual-property",
                                    icon: "©️",
                                    title: "6. Intellectual Property",
                                    content: (
                                        <>
                                            <p>
                                                All content, trademarks, logos, and intellectual property on our platform are owned
                                                by us or our licensors. You may not use, reproduce, or distribute any of our proprietary
                                                content without our express written permission.
                                            </p>
                                            <div className="flex items-center gap-4 p-4 bg-blue-50/80 dark:bg-blue-900/20 rounded-xl border border-blue-200/50 dark:border-blue-800/30 mt-4">
                                                <span className="text-2xl">💡</span>
                                                <p className="text-sm text-blue-700 dark:text-blue-300">
                                                    For inquiries regarding content usage, please contact us at <a href="mailto:legal@yourwebsite.com" className="underline font-medium">legal@yourwebsite.com</a>.
                                                </p>
                                            </div>
                                        </>
                                    )
                                },
                                {
                                    id: "third-party",
                                    icon: "🔗",
                                    title: "7. Third-Party Links",
                                    content: (
                                        <p>
                                            Our services may contain links to third-party websites or services that are not owned
                                            or controlled by us. We have no control over, and assume no responsibility for, the
                                            content, privacy policies, or practices of any third-party sites. You acknowledge and
                                            agree that we are not responsible for any loss or damage caused by your use of such
                                            third-party services.
                                        </p>
                                    )
                                },
                                {
                                    id: "termination",
                                    icon: "⏹️",
                                    title: "8. Termination",
                                    content: (
                                        <>
                                            <p>
                                                We may terminate or suspend your account and access to our services immediately,
                                                without prior notice or liability, for any reason whatsoever, including without
                                                limitation if you breach these Terms and Conditions.
                                            </p>
                                            <ul className="mt-3 space-y-1 text-sm text-gray-600 dark:text-gray-400">
                                                <li className="flex items-center gap-2">
                                                    <span className="text-gray-400">•</span>
                                                    Upon termination, your right to use the services will immediately cease.
                                                </li>
                                                <li className="flex items-center gap-2">
                                                    <span className="text-gray-400">•</span>
                                                    Provisions that by their nature should survive termination shall survive.
                                                </li>
                                            </ul>
                                        </>
                                    )
                                },
                                {
                                    id: "disclaimer",
                                    icon: "⚠️",
                                    title: "9. Disclaimer of Warranties",
                                    content: (
                                        <div className="space-y-3">
                                            <p>
                                                Our services are provided on an "AS IS" and "AS AVAILABLE" basis without any warranties
                                                of any kind, either express or implied. We do not warrant that the services will be
                                                uninterrupted, secure, or error‑free.
                                            </p>
                                            <div className="p-4 bg-gray-100/80 dark:bg-gray-800/50 rounded-xl border border-gray-200/50 dark:border-gray-700/30">
                                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                                    <strong className="text-gray-700 dark:text-gray-300">Limitation of Liability:</strong> To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from (a) your use or inability to use our services; (b) any conduct or content of any third party; (c) unauthorized access to or alteration of your transmissions or content.
                                                </p>
                                            </div>
                                        </div>
                                    )
                                },
                                {
                                    id: "governing-law",
                                    icon: "⚖️",
                                    title: "10. Governing Law",
                                    content: (
                                        <p>
                                            These Terms and Conditions shall be governed and construed in accordance with the laws
                                            of the State of California, without regard to its conflict of law provisions. Any legal
                                            suit, action, or proceeding arising out of these terms shall be instituted exclusively
                                            in the federal or state courts located in San Francisco, California.
                                        </p>
                                    )
                                },
                                {
                                    id: "contact",
                                    icon: "📬",
                                    title: "11. Contact Information",
                                    content: (
                                        <div className="space-y-4">
                                            <p>
                                                If you have any questions, concerns, or feedback regarding these Terms and Conditions,
                                                please reach out to us:
                                            </p>
                                            <div className="flex flex-wrap gap-4">
                                                <a href="mailto:legal@yourwebsite.com" className="inline-flex items-center gap-3 px-6 py-3 bg-cyan-600/10 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 rounded-xl border border-cyan-200/50 dark:border-cyan-800/30 hover:bg-cyan-600/20 dark:hover:bg-cyan-500/20 transition-colors">
                                                    <span className="text-2xl">📧</span>
                                                    <span className="font-medium">legal@yourwebsite.com</span>
                                                </a>
                                                <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-100/80 dark:bg-gray-800/50 rounded-xl border border-gray-200/50 dark:border-gray-700/30">
                                                    <span className="text-2xl">📍</span>
                                                    <span className="text-gray-700 dark:text-gray-300">123 Legal Street, San Francisco, CA 94105</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            ].map((section) => (
                                <div key={section.id} id={section.id} className="group mb-12 scroll-mt-28">
                                    <div className="relative">
                                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-violet-500/10 rounded-2xl blur-xl group-hover:opacity-70 transition duration-500" />
                                        <div className="relative p-6 md:p-8 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-2xl border border-white/30 dark:border-gray-800/30 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                            <div className="flex items-start gap-4 mb-4">
                                                <span className="text-2xl md:text-2xl flex-shrink-0">{section.icon}</span>
                                                <h2 className="text-xl md:text-xl font-bold text-gray-900 dark:text-white leading-tight">
                                                    {section.title}
                                                </h2>
                                            </div>
                                            <div className="prose prose-gray dark:prose-invert max-w-none
                                            prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-p:leading-relaxed
                                            prose-ul:text-gray-600 dark:prose-ul:text-gray-300 prose-ul:list-none prose-ul:pl-0
                                            prose-li:text-gray-600 dark:prose-li:text-gray-300
                                            prose-strong:text-gray-800 dark:prose-strong:text-white
                                            prose-a:text-cyan-600 dark:prose-a:text-cyan-400 hover:prose-a:underline">
                                                {section.content}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Footer note */}
                            <div className="mt-16 text-center">
                                <div className="inline-block p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-gray-700/30 shadow-lg">
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                                        By using our website, you agree to be bound by these Terms and Conditions.
                                        If you do not agree, please discontinue use of our services immediately.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Trust Bar */}
                <section className="py-16 bg-gradient-to-r from-cyan-50/80 via-blue-50/80 to-violet-50/80 dark:from-gray-900/80 dark:via-cyan-950/30 dark:to-blue-950/30 border-t border-b border-gray-200/50 dark:border-gray-800/50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-5xl mx-auto">
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
                                {[
                                    { icon: "📜", title: "Clear Terms", desc: "Our terms are written in plain, understandable language." },
                                    { icon: "🛡️", title: "Legal Protection", desc: "We protect your rights and our intellectual property." },
                                    { icon: "🤝", title: "Fair Use", desc: "We promote a safe and respectful community." }
                                ].map((item, idx) => (
                                    <div key={idx} className="group relative p-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-gray-700/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-violet-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <div className="relative flex flex-col items-center text-center">
                                            <span className="text-4xl mb-3">{item.icon}</span>
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />

            <style jsx>{`
                @keyframes blob {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                @keyframes gradient {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                .animate-blob {
                    animation: blob 10s infinite ease-in-out;
                }
                .animate-float {
                    animation: float 6s infinite ease-in-out;
                }
                .animate-gradient {
                    background-size: 200% 200%;
                    animation: gradient 6s ease infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
                .animation-delay-6000 {
                    animation-delay: 6s;
                }
                .animation-delay-8000 {
                    animation-delay: 8s;
                }
                .scroll-mt-28 {
                    scroll-margin-top: 7rem;
                }
            `}</style>
        </div>
    );
}