import { motion } from 'framer-motion'

// Option 1: Floating Geometric Shapes
export function FloatingShapes() {
    return (
        <div className="relative w-full max-w-md h-96 mx-auto">
            {/* Large circle */}
            <motion.div
                className="absolute top-20 left-20 w-32 h-32 rounded-full bg-accent opacity-20"
                animate={{
                    y: [0, -20, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Medium square */}
            <motion.div
                className="absolute top-40 right-16 w-24 h-24 bg-stone-300 opacity-30 rounded-lg"
                animate={{
                    rotate: [0, 90, 0],
                    y: [0, 15, 0],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Small circle */}
            <motion.div
                className="absolute bottom-32 left-32 w-16 h-16 rounded-full bg-stone-400 opacity-25"
                animate={{
                    y: [0, -30, 0],
                    x: [0, 10, 0],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
            />

            {/* Triangle */}
            <motion.div
                className="absolute top-60 left-48 w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[50px] border-b-stone-300 opacity-30"
                animate={{
                    rotate: [0, 180, 360],
                    y: [0, -10, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
        </div>
    )
}

// Option 2: Abstract Particles
export function AbstractParticles() {
    const particles = Array.from({ length: 12 }, (_, i) => ({
        id: i,
        size: Math.random() * 8 + 4,
        delay: Math.random() * 2,
        duration: Math.random() * 3 + 3,
        x: Math.random() * 100,
        y: Math.random() * 100,
    }))

    return (
        <div className="relative w-full max-w-md h-96 mx-auto overflow-hidden">
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full bg-accent opacity-20"
                    style={{
                        width: particle.size,
                        height: particle.size,
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0.2, 0.5, 0.2],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: particle.delay,
                    }}
                />
            ))}
        </div>
    )
}

// Option 3: Isometric Workspace
export function IsometricWorkspace() {
    return (
        <div className="relative w-full max-w-md mx-auto">
            <svg viewBox="0 0 400 400" className="w-full h-auto">
                {/* Desk - isometric view */}
                <motion.g
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                    <path
                        d="M 100 250 L 200 200 L 300 250 L 200 300 Z"
                        fill="#78716C"
                        opacity="0.3"
                    />
                </motion.g>

                {/* Laptop */}
                <motion.g
                    animate={{ rotateX: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <path
                        d="M 150 220 L 200 195 L 250 220 L 200 245 Z"
                        fill="#78716C"
                        opacity="0.6"
                    />
                    <rect x="180" y="160" width="40" height="35" fill="#E5E7EB" />
                </motion.g>

                {/* Coffee cup */}
                <motion.g
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                    <ellipse cx="270" cy="235" rx="12" ry="8" fill="#C2825B" opacity="0.6" />

                    {/* Steam */}
                    <motion.path
                        d="M 265 225 Q 263 215 265 210"
                        stroke="#78716C"
                        strokeWidth="2"
                        fill="none"
                        opacity="0.3"
                        animate={{ opacity: [0.3, 0.6, 0.3], y: [0, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </motion.g>

                {/* Plant */}
                <motion.g
                    animate={{ rotate: [0, 3, 0, -3, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    style={{ transformOrigin: "130px 240px" }}
                >
                    <rect x="125" y="235" width="10" height="15" fill="#78716C" opacity="0.4" />
                    <ellipse cx="130" cy="230" rx="8" ry="12" fill="#86A789" opacity="0.6" />
                </motion.g>

                {/* Floating code symbols */}
                <motion.text
                    x="220"
                    y="150"
                    fontSize="20"
                    fill="#D97706"
                    opacity="0.4"
                    animate={{ y: [150, 140, 150], opacity: [0.4, 0.7, 0.4] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                    {'</>'}
                </motion.text>
            </svg>
        </div>
    )
}

// Option 4: Minimal Line Art Character
export function MinimalCharacter() {
    return (
        <div className="relative w-full max-w-md mx-auto">
            <svg viewBox="0 0 300 300" className="w-full h-auto">
                {/* Simple character outline */}
                <motion.g
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                    {/* Head */}
                    <circle cx="150" cy="100" r="30" fill="none" stroke="#78716C" strokeWidth="2" />

                    {/* Body */}
                    <line x1="150" y1="130" x2="150" y2="200" stroke="#78716C" strokeWidth="2" />

                    {/* Arms - typing motion */}
                    <motion.line
                        x1="150"
                        y1="150"
                        x2="120"
                        y2="170"
                        stroke="#78716C"
                        strokeWidth="2"
                        animate={{ x2: [120, 115, 120], y2: [170, 175, 170] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.line
                        x1="150"
                        y1="150"
                        x2="180"
                        y2="170"
                        stroke="#78716C"
                        strokeWidth="2"
                        animate={{ x2: [180, 185, 180], y2: [170, 175, 170] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                    />

                    {/* Legs */}
                    <line x1="150" y1="200" x2="130" y2="240" stroke="#78716C" strokeWidth="2" />
                    <line x1="150" y1="200" x2="170" y2="240" stroke="#78716C" strokeWidth="2" />
                </motion.g>

                {/* Laptop outline */}
                <rect x="100" y="180" width="60" height="40" rx="2" fill="none" stroke="#78716C" strokeWidth="2" opacity="0.6" />

                {/* Thought bubble */}
                <motion.g
                    animate={{ opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                    <circle cx="190" cy="80" r="15" fill="none" stroke="#D97706" strokeWidth="1.5" opacity="0.5" />
                    <circle cx="185" cy="95" r="5" fill="none" stroke="#D97706" strokeWidth="1.5" opacity="0.5" />
                    <circle cx="180" cy="105" r="3" fill="none" stroke="#D97706" strokeWidth="1.5" opacity="0.5" />
                </motion.g>
            </svg>
        </div>
    )
}

// Option 5: Pulsing Gradient Orb
export function GradientOrb() {
    return (
        <div className="relative w-full max-w-md h-96 mx-auto flex items-center justify-center">
            <motion.div
                className="relative w-64 h-64"
                animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/20 via-stone-300/30 to-stone-400/20 blur-2xl" />
                <motion.div
                    className="absolute inset-8 rounded-full bg-gradient-to-tr from-stone-200/40 via-accent/30 to-stone-300/40 blur-xl"
                    animate={{
                        scale: [1, 0.9, 1],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </motion.div>
        </div>
    )
}
