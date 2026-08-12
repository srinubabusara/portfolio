import Navigation from "@/components/portfolio/Navigation";
import Footer from "@/components/portfolio/Footer";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 flex flex-col overflow-x-hidden">
            <Navigation />

            <main className="flex-1 relative">
                {/* Animated background blobs */}
                <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 -left-1/2 w-[800px] h-[800px] bg-gradient-to-br from-indigo-200/30 via-purple-200/20 to-pink-200/10 dark:from-indigo-900/20 dark:via-purple-900/10 dark:to-pink-900/5 rounded-full blur-3xl animate-blob" />
                    <div className="absolute bottom-0 -right-1/2 w-[800px] h-[800px] bg-gradient-to-tl from-cyan-200/30 via-blue-200/20 to-indigo-200/10 dark:from-cyan-900/20 dark:via-blue-900/10 dark:to-indigo-900/5 rounded-full blur-3xl animate-blob animation-delay-4000" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-rose-200/20 via-pink-200/10 to-orange-200/10 dark:from-rose-900/10 dark:via-pink-900/5 dark:to-orange-900/5 rounded-full blur-3xl animate-blob animation-delay-8000" />
                </div>

                {/* Hero Section */}
                <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-red-50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 shadow-lg shadow-indigo-500/5 dark:shadow-indigo-500/10 mb-8 animate-float">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                                </span>
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Your privacy is our priority
                                </span>
                            </div>

                            <h1 className="text-xl md:text-3xl lg:text-3xl font-extrabold tracking-tight mb-6">
                                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-gradient">
                                    Privacy Policy
                                </span>
                            </h1>

                            <p className="text-xl md:text-xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto leading-relaxed mb-8">
                                We respect your privacy and are committed to protecting your personal data.
                                Read on to understand how we handle your information.
                            </p>

                            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                                <div className="flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-200/50 dark:border-gray-700/50">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span>Last updated: <span className="font-medium text-gray-700 dark:text-gray-200">August 12, 2026</span></span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-200/50 dark:border-gray-700/50">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>Reading time: <span className="font-medium text-gray-700 dark:text-gray-200">~4 minutes</span></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative floating shapes */}
                    <div className="absolute top-20 left-10 w-16 h-16 bg-indigo-400/10 dark:bg-indigo-300/10 rounded-full blur-xl animate-float animation-delay-2000" />
                    <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-400/10 dark:bg-purple-300/10 rounded-full blur-xl animate-float animation-delay-6000" />
                </section>

                {/* Content with glass cards */}
                <section className="py-12 md:py-20 relative">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto">
                            {/* Intro card */}
                            <div className="relative group mb-16">
                                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl blur-xl opacity-20 group-hover:opacity-40 transition duration-500" />
                                <div className="relative p-8 md:p-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-xl border border-white/20 dark:border-gray-800/30 shadow-xl">
                                    <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                                        Welcome to our Privacy Policy. Your privacy is critically important to us.
                                        This document outlines the types of personal information we receive and collect
                                        when you use our website, as well as the steps we take to safeguard your information.
                                    </p>
                                </div>
                            </div>

                            {/* Sections with cards */}
                            {[
                                {
                                    id: "collect",
                                    icon: "📋",
                                    title: "1. Information We Collect",
                                    content: (
                                        <>
                                            <p>
                                                We collect information you provide directly to us, such as when you create an account,
                                                subscribe to our newsletter, fill out a contact form, or communicate with us. This may include:
                                            </p>
                                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                                                <li className="flex items-start gap-3 p-3 bg-gray-50/80 dark:bg-gray-800/50 rounded-lg border border-gray-100 dark:border-gray-700/30">
                                                    <span className="text-indigo-500 text-xl">👤</span>
                                                    <div><strong>Personal identifiers</strong> — name, email, phone, address</div>
                                                </li>
                                                <li className="flex items-start gap-3 p-3 bg-gray-50/80 dark:bg-gray-800/50 rounded-lg border border-gray-100 dark:border-gray-700/30">
                                                    <span className="text-indigo-500 text-xl">🔐</span>
                                                    <div><strong>Account credentials</strong> — usernames, passwords</div>
                                                </li>
                                                <li className="flex items-start gap-3 p-3 bg-gray-50/80 dark:bg-gray-800/50 rounded-lg border border-gray-100 dark:border-gray-700/30">
                                                    <span className="text-indigo-500 text-xl">💬</span>
                                                    <div><strong>Communication data</strong> — messages, feedback, support requests</div>
                                                </li>
                                                <li className="flex items-start gap-3 p-3 bg-gray-50/80 dark:bg-gray-800/50 rounded-lg border border-gray-100 dark:border-gray-700/30">
                                                    <span className="text-indigo-500 text-xl">📊</span>
                                                    <div><strong>Usage data</strong> — pages visited, time spent, clicks</div>
                                                </li>
                                            </ul>
                                        </>
                                    )
                                },
                                {
                                    id: "use",
                                    icon: "⚙️",
                                    title: "2. How We Use Your Information",
                                    content: (
                                        <>
                                            <p>We use the information we collect to:</p>
                                            <ul className="space-y-2 mt-3">
                                                {[
                                                    "Provide, maintain, and improve our services and your experience.",
                                                    "Process transactions and send you related information, including confirmations and invoices.",
                                                    "Communicate with you about products, services, offers, promotions, and events.",
                                                    "Monitor and analyze trends, usage, and activities in connection with our services.",
                                                    "Detect, investigate, and prevent fraudulent transactions and other illegal activities."
                                                ].map((item, idx) => (
                                                    <li key={idx} className="flex items-start gap-3 p-3 bg-gradient-to-r from-indigo-50/50 to-transparent dark:from-indigo-900/20 dark:to-transparent rounded-lg border-l-4 border-indigo-400 dark:border-indigo-500">
                                                        <span className="text-indigo-500 text-sm font-bold">▸</span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </>
                                    )
                                },
                                {
                                    id: "share",
                                    icon: "🤝",
                                    title: "3. Information Sharing & Disclosure",
                                    content: (
                                        <>
                                            <p>
                                                We do not sell, trade, or rent your personal information to third parties.
                                                However, we may share your information in the following circumstances:
                                            </p>
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                                                <div className="p-4 bg-white dark:bg-gray-800/50 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700/30 hover:shadow-md transition-shadow">
                                                    <div className="text-xl mb-2">🛠️</div>
                                                    <h4 className="font-semibold text-gray-900 dark:text-white">Service Providers</h4>
                                                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Hosting, email delivery, analytics</p>
                                                </div>
                                                <div className="p-4 bg-white dark:bg-gray-800/50 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700/30 hover:shadow-md transition-shadow">
                                                    <div className="text-xl mb-2">⚖️</div>
                                                    <h4 className="font-semibold text-gray-900 dark:text-white">Legal Reasons</h4>
                                                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Compliance with laws and regulations</p>
                                                </div>
                                                <div className="p-4 bg-white dark:bg-gray-800/50 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700/30 hover:shadow-md transition-shadow">
                                                    <div className="text-xl mb-2">🏢</div>
                                                    <h4 className="font-semibold text-gray-900 dark:text-white">Business Transfers</h4>
                                                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Merger, acquisition, or sale</p>
                                                </div>
                                            </div>
                                        </>
                                    )
                                },
                                {
                                    id: "security",
                                    icon: "🛡️",
                                    title: "4. Data Security",
                                    content: (
                                        <div className="space-y-3">
                                            <p>
                                                We implement appropriate technical and organizational measures to protect
                                                your personal information against unauthorized access, alteration, disclosure,
                                                or destruction. These measures include:
                                            </p>
                                            <div className="flex flex-wrap gap-3">
                                                <span className="px-4 py-2 bg-emerald-100/80 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-medium border border-emerald-200 dark:border-emerald-800/30">🔒 End-to-end encryption</span>
                                                <span className="px-4 py-2 bg-emerald-100/80 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-medium border border-emerald-200 dark:border-emerald-800/30">🛡️ Access controls</span>
                                                <span className="px-4 py-2 bg-emerald-100/80 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-medium border border-emerald-200 dark:border-emerald-800/30">📋 Regular security assessments</span>
                                            </div>
                                            <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                                                However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                                            </p>
                                        </div>
                                    )
                                },
                                {
                                    id: "rights",
                                    icon: "📝",
                                    title: "5. Your Rights & Choices",
                                    content: (
                                        <>
                                            <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                                                {[
                                                    { emoji: "👁️", title: "Access", desc: "Request a copy of your data" },
                                                    { emoji: "✏️", title: "Correction", desc: "Correct inaccurate information" },
                                                    { emoji: "🗑️", title: "Deletion", desc: "Request deletion (subject to exceptions)" },
                                                    { emoji: "📧", title: "Opt-out", desc: "Unsubscribe from marketing communications" }
                                                ].map((item, idx) => (
                                                    <div key={idx} className="flex items-center gap-4 p-4 bg-gray-50/80 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-700/30">
                                                        <span className="text-3xl">{item.emoji}</span>
                                                        <div>
                                                            <h4 className="font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                                                            <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </>
                                    )
                                },
                                {
                                    id: "cookies",
                                    icon: "🍪",
                                    title: "6. Cookies & Tracking Technologies",
                                    content: (
                                        <div className="space-y-3">
                                            <p>
                                                We use cookies and similar tracking technologies to enhance your experience,
                                                analyze website traffic, and personalize content. You can control cookie
                                                preferences through your browser settings. Please note that disabling cookies
                                                may affect the functionality of certain features on our website.
                                            </p>
                                            <div className="flex items-center gap-4 p-4 bg-amber-50/80 dark:bg-amber-900/20 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
                                                <span className="text-xl">💡</span>
                                                <p className="text-sm text-amber-700 dark:text-amber-300">
                                                    You can change your cookie preferences at any time in your browser settings.
                                                </p>
                                            </div>
                                        </div>
                                    )
                                },
                                {
                                    id: "children",
                                    icon: "🧒",
                                    title: "7. Children's Privacy",
                                    content: (
                                        <p>
                                            Our services are not directed to individuals under the age of 13. We do not
                                            knowingly collect personal information from children. If we become aware that
                                            a child has provided us with personal information, we will take steps to delete
                                            such information promptly.
                                        </p>
                                    )
                                },
                                {
                                    id: "changes",
                                    icon: "🔄",
                                    title: "8. Changes to This Policy",
                                    content: (
                                        <p>
                                            We may update this Privacy Policy from time to time. We will notify you of any
                                            changes by posting the new policy on this page and updating the "Last updated"
                                            date at the top. We encourage you to review this policy periodically to stay
                                            informed about how we protect your information.
                                        </p>
                                    )
                                },
                                {
                                    id: "contact",
                                    icon: "📬",
                                    title: "9. Contact Us",
                                    content: (
                                        <div className="space-y-4">
                                            <p>
                                                If you have any questions, concerns, or requests regarding this Privacy Policy,
                                                please don't hesitate to reach out to us:
                                            </p>
                                            <div className="flex flex-wrap gap-4">
                                                <a href="mailto:privacy@yourwebsite.com" className="inline-flex items-center gap-3 px-6 py-3 bg-indigo-600/10 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 rounded-xl border border-indigo-200/50 dark:border-indigo-800/30 hover:bg-indigo-600/20 dark:hover:bg-indigo-500/20 transition-colors">
                                                    <span className="text-xl">📧</span>
                                                    <span className="font-medium">privacy@yourwebsite.com</span>
                                                </a>
                                                <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-100/80 dark:bg-gray-800/50 rounded-xl border border-gray-200/50 dark:border-gray-700/30">
                                                    <span className="text-xl">📍</span>
                                                    <span className="text-gray-700 dark:text-gray-300">123 Privacy Street, San Francisco, CA 94105</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            ].map((section) => (
                                <div key={section.id} id={section.id} className="group mb-12 scroll-mt-28">
                                    <div className="relative">
                                        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-xl blur-xl group-hover:opacity-70 transition duration-500" />
                                        <div className="relative p-6 md:p-8 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-xl border border-white/30 dark:border-gray-800/30 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                            <div className="flex items-start gap-4 mb-4">
                                                <span className="text-xl flex-shrink-0">{section.icon}</span>
                                                <h2 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">
                                                    {section.title}
                                                </h2>
                                            </div>
                                            <div className="prose prose-gray dark:prose-invert max-w-none
                                            prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-p:leading-relaxed
                                            prose-ul:text-gray-600 dark:prose-ul:text-gray-300 prose-ul:list-none prose-ul:pl-0
                                            prose-li:text-gray-600 dark:prose-li:text-gray-300
                                            prose-strong:text-gray-800 dark:prose-strong:text-white
                                            prose-a:text-indigo-600 dark:prose-a:text-indigo-400 hover:prose-a:underline">
                                                {section.content}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Footer note */}
                            <div className="mt-16 text-center">
                                <div className="inline-block p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-xl border border-white/20 dark:border-gray-700/30 shadow-lg">
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                                        By using our website, you consent to the collection and use of your personal
                                        information as described in this Privacy Policy.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Trust Bar */}
                <section className="py-16 bg-gradient-to-r from-indigo-50/80 via-purple-50/80 to-pink-50/80 dark:from-gray-900/80 dark:via-indigo-950/30 dark:to-purple-950/30 border-t border-b border-gray-200/50 dark:border-gray-800/50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-5xl mx-auto">
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
                                {[
                                    { icon: "🔒", title: "Data Encryption", desc: "All data is encrypted using industry-standard protocols." },
                                    { icon: "✅", title: "GDPR Compliant", desc: "We adhere to GDPR and CCPA privacy regulations." },
                                    { icon: "🔍", title: "Full Transparency", desc: "We are open about how we collect and use your data." }
                                ].map((item, idx) => (
                                    <div key={idx} className="group relative p-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl border border-white/20 dark:border-gray-700/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
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