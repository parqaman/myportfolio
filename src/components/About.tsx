import { motion } from 'framer-motion'
import CodingCharacter from './CodingCharacter'

export default function About() {
    return (
        <section id="about" className="min-h-screen px-6 py-24 md:py-0 bg-background-secondary flex items-center justify-center">
            <div className="max-w-6xl mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Heading, Title, and Text content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-sm uppercase tracking-widest text-foreground-muted mb-4 font-sans">
                            About
                        </p>
                        <h2 className="text-heading-1 font-serif font-light mb-8">
                            Building Cloud Solutions That Scale
                        </h2>
                        <p className="text-body text-calm leading-loose">
                            I'm an IT Consultant focused on cloud infrastructure and cost optimization.
                            My work centers on helping organizations build scalable, cost-efficient systems on GCP and AWS—combining
                            technical engineering with financial discipline.
                        </p>
                    </motion.div>

                    {/* Right: Animation */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex justify-center lg:justify-end mx-auto lg:mx-0"
                    >
                        <CodingCharacter />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
