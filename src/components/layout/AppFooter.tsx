// components/Footer.tsx
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function AppFooter() {
    return (
        <footer id="app_footer" className="bg-gray-900 text-gray-300 py-10 mt-16">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Brand Section */}
                    <div>
                        <h2 className="text-2xl font-bold text-white">LMS</h2>
                        <p className="mt-3 text-sm text-gray-400">
                            Empowering learners with modern, interactive, and scalable education.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-3">Explore</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/courses" className="hover:text-white">Courses</Link></li>
                            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
                            <li><Link href="/help" className="hover:text-white">Help Center</Link></li>
                            <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-white">Terms & Conditions</Link></li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-3">Connect</h3>
                        <div className="flex space-x-4">
                            <Link href="https://facebook.com" target="_blank" className="hover:text-white">
                                <Facebook size={20} />
                            </Link>
                            <Link href="https://twitter.com" target="_blank" className="hover:text-white">
                                <Twitter size={20} />
                            </Link>
                            <Link href="https://linkedin.com" target="_blank" className="hover:text-white">
                                <Linkedin size={20} />
                            </Link>
                            <Link href="mailto:support@example.com" className="hover:text-white">
                                <Mail size={20} />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-400">
                    <p>© {new Date().getFullYear()} LMS. All rights reserved.</p>
                    <p>
                        Built with <span className="text-white">Next.js 15</span>,{" "}
                        <span className="text-white">TypeScript</span>, and{" "}
                        <span className="text-white">TailwindCSS</span>.
                    </p>
                </div>
            </div>
        </footer>
    );
}
