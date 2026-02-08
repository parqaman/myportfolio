import { motion } from 'framer-motion'

const principles = [
    {
        title: "Start Simple, Scale Smart",
        desc: "Complexity should be earned, not assumed. Whether it's a Terraform module or a cloud architecture, I start with the simplest solution that works, then scale with intention."
    },
    {
        title: "Cost is a Feature",
        desc: "Every architectural decision has a price tag. I treat cost optimization not as an afterthought, but as a core requirement—just like performance, security, or reliability."
    },
    {
        title: "Teach to Learn",
        desc: "My time as a programming tutor taught me that if you can't explain it simply, you don't understand it well enough. I approach every problem with this mindset: clarity first, complexity later."
    }
]

export default function Principles() {
    return (
        <section id="principles" className="section-spacing px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <p className="text-sm uppercase tracking-widest text-foreground-muted mb-4 font-sans">
                        Philosophy
                    </p>
                    <h2 className="text-heading-1 font-serif font-light mb-6">
                        How I Work
                    </h2>
                    <p className="text-calm max-w-2xl">
                        These aren't just principles—they're lessons learned from deploying databases,
                        and optimizing cloud costs at scale.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {principles.map((p, idx) => (
                        <motion.div
                            key={p.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.15 }}
                            className="space-y-4"
                        >
                            <div className="text-7xl font-serif font-light text-accent/20">
                                {String(idx + 1).padStart(2, '0')}
                            </div>
                            <h3 className="text-heading-2 font-serif font-light">{p.title}</h3>
                            <p className="text-calm">
                                {p.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
