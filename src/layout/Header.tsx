import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeProvider'
import { useState } from 'react'

function ThemeToggle() {
    const { theme, toggleTheme } = useTheme()

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-background-secondary transition-calm"
            aria-label="Toggle theme"
        >
            {theme === 'light' ? (
                // Moon icon for dark mode
                <svg className="w-5 h-5 text-foreground-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
            ) : (
                // Sun icon for light mode
                <svg className="w-5 h-5 text-foreground-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            )}
        </button>
    )
}

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const navItems = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Tech Stack', href: '#tech' },
        { name: 'Contact', href: '#contact' },
    ]

    const handleNavClick = () => {
        setMobileMenuOpen(false)
    }

    return (
        <>
            <motion.header
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-stone-200 dark:border-stone-800"
            >
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    {/* Spacer for centering */}
                    <div className="w-10 md:w-0"></div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-sm font-sans text-foreground-muted hover:text-foreground transition-calm"
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>

                    {/* Theme Toggle Button */}
                    <ThemeToggle />

                    {/* Mobile Menu Button */}
                    <button
                        className="flex flex-col gap-1.5 md:hidden"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <motion.div
                            animate={{ rotate: mobileMenuOpen ? 45 : 0, y: mobileMenuOpen ? 6 : 0 }}
                            className="h-px w-6 bg-foreground-muted"
                        />
                        <motion.div
                            animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
                            className="h-px w-6 bg-foreground-muted"
                        />
                        <motion.div
                            animate={{ rotate: mobileMenuOpen ? -45 : 0, y: mobileMenuOpen ? -6 : 0 }}
                            className="h-px w-6 bg-foreground-muted"
                        />
                    </button>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobileMenuOpen(false)}
                            className="fixed inset-0 bg-black/50 z-40 md:hidden"
                        />

                        {/* Menu Panel */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'tween', duration: 0.3 }}
                            className="fixed top-0 right-0 bottom-0 w-64 bg-background border-l border-stone-200 dark:border-stone-800 z-50 md:hidden"
                        >
                            <nav className="flex flex-col gap-1 p-6 mt-20">
                                {navItems.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        onClick={handleNavClick}
                                        className="text-base font-sans text-foreground-muted hover:text-foreground transition-calm py-3 px-4 rounded-lg hover:bg-background-secondary"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}
