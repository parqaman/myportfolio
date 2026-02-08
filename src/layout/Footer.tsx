export default function Footer() {
    return (
        <footer className="border-t border-stone-200 bg-background py-16 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-serif font-light text-foreground">
                            Farouq Abdurrahman
                        </h3>
                        <p className="text-calm max-w-md">
                            Cloud & FinOps Consultant
                        </p>
                    </div>

                    {/* Connect */}
                    <div className="flex flex-col md:items-end space-y-4">
                        <p className="text-sm uppercase tracking-widest text-foreground-muted font-sans">
                            Connect
                        </p>
                        <div className="flex gap-6">
                            <a href="https://www.linkedin.com/in/farouq-abdurrahman-286971141//" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground-muted hover:text-foreground transition-calm">
                                LinkedIn
                            </a>
                            <a href="https://github.com/parqaman" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground-muted hover:text-foreground transition-calm">
                                GitHub
                            </a>
                            <a href="mailto:fabdurrahman.work@gmail.com" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground-muted hover:text-foreground transition-calm">
                                Email
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-foreground-muted">
                        © {new Date().getFullYear()} Farouq Abdurrahman
                    </p>
                    <p className="text-xs uppercase text-foreground-muted/60">
                        Efficiency • Precision • Adaptability
                    </p>
                </div>
            </div>
        </footer>
    )
}
