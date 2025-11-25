import { useState, useEffect } from "react";
import { useLockBodyScroll } from "lib/hooks/useLockBodyScroll";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
import { url, cn } from "lib/utils";

interface INavDrop {}

const Menu = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showCompany, setShowCompany] = useState(false);

    useLockBodyScroll(menuOpen);

    const CompanyData = [
        { title: "About Us", link: "/about-us" },
        { title: "Contact Us", link: "/contact-us" },
    ];

    const mobileNavVariants = {
        open: {
            opacity: 1,
            height: "auto",
            transition: { duration: 0.15 },
        },
        closed: {
            opacity: 0,
            height: 0,
            transition: { duration: 0.15 },
        },
    };

    const overlayVariants = {
        open: {
            opacity: 1,
            transition: { duration: 0.3 },
        },
        closed: {
            opacity: 0,
            transition: { duration: 0.3 },
        },
    };

    return (
        <>
            <div
                onClick={() => setMenuOpen(true)}
                className="relative z-[100] grid h-[3rem] w-[3rem] cursor-pointer place-items-center rounded-[3.5rem] border border-[#E8E7EA] bg-primary-1 transition-colors duration-300 ease-in-out active:bg-transparent">
                <img src={url("/images/menuIcon.svg")} alt="menu" />
            </div>

            {typeof window !== "undefined" &&
                createPortal(
                    <AnimatePresence>
                        {menuOpen && (
                            <motion.div
                                key="mobile-menu-overlay"
                                variants={overlayVariants}
                                initial="closed"
                                animate="open"
                                exit="closed"
                                className="fixed inset-0 z-[200] flex w-[100vw] flex-col overflow-auto bg-white">
                                <div className="px-container-base">
                                    <div className="flex w-full items-center justify-between border-b border-b-gray-300 pb-[0.75rem] pt-[1.5rem] md:pb-[1rem] lg:border-b-secondary-1">
                                        <a href="/" className="flex items-center gap-4">
                                            <img
                                                src={url("/images/africa1.png")}
                                                alt="logo"
                                                className="w-[9rem] object-contain lg:w-32"
                                            />
                                        </a>

                                        <motion.svg
                                            onClick={() => setMenuOpen(false)}
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="cursor-pointer transition-transform duration-200 ease-in-out hover:rotate-90"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}>
                                            <path d="M18 6 6 18" />
                                            <path d="m6 6 12 12" />
                                        </motion.svg>
                                    </div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: 0.1 }}
                                        className="mt-5 flex flex-col">
                                        {/* Company Section with Dropdown */}
                                        <div className={cn(`${showCompany ? "rounded-[5px] bg-primary-1/10" : ""}`)}>
                                            <div
                                                onClick={() => setShowCompany(!showCompany)}
                                                className={cn(
                                                    `flex cursor-pointer items-center justify-between ${
                                                        showCompany ? "border-b-0" : "border-b border-b-gray-300"
                                                    } px-4 py-4 text-base font-semibold transition-all duration-200 ease-out`
                                                )}>
                                                <span className="block text-secondary-2">Company</span>
                                                <motion.div
                                                    animate={{ rotate: showCompany ? 270 : 180 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="transition-transform">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="20"
                                                        height="20"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round">
                                                        <path d="m18 15-6-6-6 6" />
                                                    </svg>
                                                </motion.div>
                                            </div>

                                            <AnimatePresence>
                                                {showCompany && (
                                                    <motion.div
                                                        key="company-dropdown"
                                                        variants={mobileNavVariants}
                                                        initial="closed"
                                                        animate="open"
                                                        exit="closed"
                                                        className="overflow-hidden">
                                                        <div className="px-4 pb-2.5">
                                                            {CompanyData.map((item, idx) => (
                                                                <motion.div
                                                                    key={idx}
                                                                    initial={{ opacity: 0, x: -20 }}
                                                                    animate={{ opacity: 1, x: 0 }}
                                                                    transition={{ duration: 0.2, delay: idx * 0.05 }}
                                                                    className="border-b border-b-gray-200 py-3.5 last:border-none">
                                                                    <a
                                                                        href={url(item.link)}
                                                                        onClick={() => {
                                                                            setMenuOpen(false);
                                                                            setShowCompany(false);
                                                                        }}
                                                                        className="block py-2 text-[15px] font-[500] leading-[1.5rem] tracking-[0.005rem] text-secondary-5 transition-colors duration-200 ease-out hover:text-primary-1">
                                                                        {item.title}
                                                                    </a>
                                                                </motion.div>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>

                                        {/* Direct Links */}
                                        {/* <motion.a
                                            href={url("/#features")}
                                            onClick={() => setMenuOpen(false)}
                                            className="flex items-center gap-2 border-b border-b-gray-300 px-4 py-4 text-base font-semibold text-secondary-2 transition-all duration-200 ease-out hover:text-primary-1"
                                            whileHover={{ x: 5 }}>
                                            <span className="block">Features</span>
                                        </motion.a> */}

                                        <motion.a
                                            href={url("/contact-us")}
                                            onClick={() => setMenuOpen(false)}
                                            className="flex items-center gap-2 border-b border-b-gray-300 px-4 py-4 text-base font-semibold text-secondary-2 transition-all duration-200 ease-out last:border-none hover:text-primary-1"
                                            whileHover={{ x: 5 }}>
                                            <span className="block">Contact Us</span>
                                        </motion.a>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: 0.2 }}
                                        className="mb-5 mt-auto flex flex-col gap-3 py-6">
                                        <a href="#contact" onClick={() => setMenuOpen(false)}>
                                            <motion.div
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                className="flex w-full items-center justify-center rounded-lg bg-primary-1 px-6 py-4">
                                                <span className="text-base font-bold tracking-wider text-white">
                                                    Get Started
                                                </span>
                                            </motion.div>
                                        </a>
                                    </motion.div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>,
                    document.body
                )}
        </>
    );
};

export default Menu;
