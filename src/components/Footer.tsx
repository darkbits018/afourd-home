import React from 'react';

const Footer = () => {
    return (
        <footer className="relative bg-white dark:bg-[#1a1a1f] text-gray-200 py-10">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Brand Section */}
                <div className="flex flex-col justify-center">
                    <h1 className="font-bold text-2xl md:text-3xl text-[#2C2C2C] dark:text-white font-noto">
                        Grimm United
                    </h1>
                    <p className="text-sm md:text-sm mb-8 text-[#2C2C2C]/80 dark:text-white/80 font-noto">
                        Holy Roots, Grimm Heart, Fearless Soul
                    </p>
                </div>

                {/* Explore Section */}
                <div>
                    <h2 className="text-lg font-semibold text-white">Explore</h2>
                    <ul className="mt-2 space-y-2">
                        <li><a href="/about" className="hover:underline">About Us</a></li>
                        <li><a href="/contact" className="hover:underline">Contact Us</a></li>
                        <li><a href="/policies" className="hover:underline">Store Policies</a></li>
                        <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
                        <li><a href="/terms" className="hover:underline">Terms & Conditions</a></li>
                    </ul>
                </div>

                {/* Get Involved Section */}
                <div>
                    <h2 className="text-lg font-semibold text-white">Get Involved</h2>
                    <ul className="mt-2 space-y-2">
                        <li><a href="/interest" className="hover:underline">Show Interest</a></li>
                        <li><a href="/volunteer" className="hover:underline">Volunteer</a></li>
                        <li><a href="/donate" className="hover:underline">Donate</a></li>
                    </ul>
                </div>

                {/* Follow Us Section */}
                <div>
                    <h2 className="text-lg font-semibold text-white">Follow Us</h2>
                    <ul className="mt-2 space-y-2">
                        <li><a href="https://instagram.com/GrimmUnited" className="hover:underline">Instagram</a></li>
                        <li><a href="https://twitter.com/GrimmUnited" className="hover:underline">X (Twitter)</a></li>
                        <li><a href="https://pinterest.com/GrimmUnited" className="hover:underline">Pinterest</a></li>
                    </ul>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-700 mt-8"></div>

            {/* Bottom Section */}
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center mt-4">
                <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Grimm United. All Rights Reserved. 🌸</p>
                {/* <a
                    href="mailto:support@grimmunited.com"
                    className="text-sm text-gray-400 hover:underline"
                >
                    support@grimmunited.com
                </a> */}
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-90 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-6xl">Coming Soon</p>
            </div>
        </footer>
    );
};

export default Footer;
