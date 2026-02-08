import { motion } from 'framer-motion'
import { Code2, Cloud, Wrench } from 'lucide-react'

const skills = [
  {
    category: "Cloud & Infrastructure",
    icon: Cloud,
    items: [
      "Google Cloud Platform (GCP)",
      "Amazon Web Services (AWS)",
      "Kubernetes & Containerization",
      "PostgreSQL & Database Management"
    ]
  },
  {
    category: "Development",
    icon: Code2,
    items: [
      "Terraform (Infrastructure as Code)",
      "TypeScript / JavaScript Frameworks",
      "Python for Backend Development & Automation",
      "Git & CI/CD"
    ]
  },
  {
    category: "FinOps & Strategy",
    icon: Wrench,
    items: [
      "Cloud Cost Optimization",
      "FinOps Maturity Assessment",
      "Resource Lifecycle Management",
      "Cloud Inventory & Asset Management"
    ]
  }
]

export default function TechStack() {
  return (
    <section id="tech" className="min-h-screen px-6 py-20 md:py-0 bg-background-secondary flex items-center justify-center">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-sm uppercase tracking-widest text-foreground-muted mb-4 font-sans">
            Technical Toolkit
          </p>
          <h2 className="text-heading-1 font-serif font-light mb-6">
            Skills & Expertise
          </h2>
          <p className="text-calm max-w-3xl">
            I've built a versatile skill set that bridges development, infrastructure, and cost optimization.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="card-calm"
            >
              <div className="mb-6">
                <skill.icon className="h-8 w-8 text-accent mb-4" strokeWidth={1.5} />
                <h3 className="text-xl font-serif font-light">
                  {skill.category}
                </h3>
              </div>
              <ul className="space-y-3">
                {skill.items.map((item) => (
                  <li key={item} className="text-sm text-calm flex items-start gap-3">
                    <span className="text-accent mt-1.5">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
