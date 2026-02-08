import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center px-6 section-spacing">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="text-center max-w-5xl"
            >
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 1 }}
                    className="text-sm uppercase tracking-widest text-foreground-muted mb-8 font-sans"
                >
                    Farouq Abdurrahman
                </motion.p>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light leading-tight mb-10">
                    Scalable Infrastructure<span className="text-accent">.</span>
                    <br />
                    <span className="text-foreground-muted">Optimizing for Value.</span>
                </h1>

                <p className="text-body text-foreground-muted max-w-3xl mx-auto mb-16 leading-loose">
                    IT Consultant specializing in Cloud Development and FinOps.
                </p>
            </motion.div>

            {/* Subtle decorative element */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="w-px h-16 bg-accent"
                />
            </div>
        </section>
    )
}
