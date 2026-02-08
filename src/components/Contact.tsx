import { motion } from 'framer-motion'
import { useState } from 'react'
import type { FormEvent } from 'react'

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus('idle')

        try {
            const response = await fetch('https://getform.io/f/a67e0906-f905-4e9b-a482-de9bdc7dce08', {
                method: 'POST',
                body: new FormData(e.target as HTMLFormElement)
            })

            if (response.ok) {
                setSubmitStatus('success')
                    ; (e.target as HTMLFormElement).reset()
            } else {
                setSubmitStatus('error')
            }
        } catch (error) {
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section id="contact" className="section-spacing px-6 bg-background">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <p className="text-sm uppercase tracking-widest text-foreground-muted mb-4 font-sans">
                        Get in Touch
                    </p>
                    <h2 className="text-heading-1 font-serif font-light mb-6">
                        Let's Work Together
                    </h2>
                    <p className="text-body text-calm max-w-2xl mx-auto">
                        I'd love to hear from you!
                    </p>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                >
                    <div>
                        <label htmlFor="name" className="block text-sm font-sans text-foreground-muted mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full px-4 py-3 bg-background-secondary border border-stone-200 dark:border-stone-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-calm text-foreground"
                            placeholder="Your name"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-sans text-foreground-muted mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-3 bg-background-secondary border border-stone-200 dark:border-stone-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-calm text-foreground"
                            placeholder="your.email@example.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-sans text-foreground-muted mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows={6}
                            className="w-full px-4 py-3 bg-background-secondary border border-stone-200 dark:border-stone-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-calm resize-none text-foreground"
                            placeholder="Tell me about your project..."
                        />
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="px-8 py-3 bg-foreground-muted dark:bg-foreground-muted text-white dark:text-background rounded-full font-sans text-sm font-medium hover:opacity-90 transition-calm disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>

                        {submitStatus === 'success' && (
                            <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-sm text-accent font-sans"
                            >
                                ✓ Message sent successfully! I'll get back to you soon.
                            </motion.p>
                        )}

                        {submitStatus === 'error' && (
                            <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-sm text-red-500 font-sans"
                            >
                                ✗ Something went wrong. Please try again.
                            </motion.p>
                        )}
                    </div>
                </motion.form>
            </div>
        </section>
    )
}
