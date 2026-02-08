import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'

const experiences = [
    {
        company: "Deloitte",
        period: "Apr 2024 - Present",
        location: "Frankfurt am Main, Germany",
        roles: [
            {
                title: "Cloud & FinOps Consultant",
                responsibilities: [
                    "Platform Engineering on GCP with Terraform",
                    "Fullstack Development with Python and React",
                    "Cloud Usage Governance",
                    "Cloud Cost Optimization & Billing Data Analysis",
                    "FinOps Maturity Assessment & Training",
                ]
            }
        ]
    },
    {
        company: "Proventa AG",
        period: "Aug 2023 - Feb 2024",
        location: "Frankfurt am Main, Germany",
        roles: [
            {
                title: "Cloud Database - Bachelor Thesis",
                responsibilities: [
                    "Cloud Database Migration Roadmap (VMs to K8s)",
                    "Migration Strategy Research for Containerized Workloads"
                ]
            },
            {
                title: "Cloud Database - Intern",
                responsibilities: [
                    "Proof of Concept: Self-managed Containerized PostgreSQL Cluster (AWS)",
                    "High Availability & Disaster Recovery Implementation"
                ]
            }
        ]
    },
    {
        company: "Hochschule Darmstadt",
        period: "Oct 2021 - Mar 2023",
        location: "Darmstadt, Germany",
        roles: [
            {
                title: "Programming Tutor",
                responsibilities: [
                    "C++ Programming Lab Assistance",
                    "Algorithms, Data Structures & OOP Mentoring"
                ]
            }
        ]
    }
]

export default function Timeline() {
    return (
        <section id="experience" className="section-spacing px-6">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <p className="text-sm uppercase tracking-widest text-foreground-muted mb-4 font-sans">
                        Professional Journey
                    </p>
                    <h2 className="text-heading-1 font-serif font-light mb-6">
                        Work Experience
                    </h2>
                    <p className="text-calm max-w-2xl">
                        A timeline of my professional growth, from teaching fundamentals to architecting cloud solutions.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-stone-200 -translate-x-1/2" />

                    {/* Timeline items */}
                    <div className="space-y-12">
                        {experiences.map((exp, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
                            >
                                {/* Left side (date on desktop) */}
                                <div className={`${idx % 2 === 0 ? 'md:text-right md:pr-12 ml-8 md:ml-0' : 'md:order-2 md:pl-12 ml-8 md:ml-0'}`}>
                                    <div className={`flex items-center gap-2 text-sm text-foreground-muted mb-2 ${idx % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                                        <Calendar className="h-4 w-4" />
                                        <span>{exp.period}</span>
                                    </div>
                                    <div className={`flex items-center gap-2 text-sm text-foreground-muted ${idx % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                                        <MapPin className="h-4 w-4" />
                                        <span>{exp.location}</span>
                                    </div>
                                </div>

                                {/* Timeline dot */}
                                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-accent rounded-full -translate-x-1/2 border-4 border-background" />

                                {/* Right side (content) */}
                                <div className={`${idx % 2 === 0 ? 'md:pl-12' : 'md:order-1 md:pr-12'} ml-8 md:ml-0`}>
                                    <div className="card-calm">
                                        <h3 className="text-xl font-serif font-light mb-4">{exp.company}</h3>
                                        <div className="space-y-8">
                                            {exp.roles.map((role, ridx) => (
                                                <div key={ridx} className={ridx > 0 ? "pt-6 border-t border-stone-100 dark:border-stone-800" : ""}>
                                                    <p className="text-accent text-sm mb-4 font-medium uppercase tracking-wider">{role.title}</p>
                                                    <ul className="space-y-2">
                                                        {role.responsibilities.map((resp, i) => (
                                                            <li key={i} className="text-sm text-calm flex items-start gap-2">
                                                                <span className="text-accent mt-1">—</span>
                                                                <span>{resp}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
