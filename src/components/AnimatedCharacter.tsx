import { motion } from 'framer-motion'

export default function AnimatedCharacter() {
    return (
        <div className="relative w-full max-w-md mx-auto">
            <svg viewBox="0 0 400 400" className="w-full h-auto">
                {/* Desk */}
                <motion.rect
                    x="50"
                    y="280"
                    width="300"
                    height="8"
                    fill="#78716C"
                    opacity="0.3"
                />

                {/* Chair */}
                <motion.g>
                    <rect x="140" y="260" width="60" height="80" rx="8" fill="#9CA3AF" opacity="0.4" />
                    <rect x="150" y="340" width="40" height="60" rx="4" fill="#9CA3AF" opacity="0.3" />
                </motion.g>

                {/* Person - with breathing animation */}
                <motion.g
                    animate={{
                        y: [0, -3, 0],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    {/* Body */}
                    <ellipse cx="170" cy="240" rx="35" ry="45" fill="#C2825B" />

                    {/* Neck */}
                    <rect x="165" y="200" width="10" height="15" fill="#F5E6D3" />

                    {/* Head */}
                    <circle cx="170" cy="190" r="25" fill="#F5E6D3" />

                    {/* Hair */}
                    <motion.path
                        d="M 145 190 Q 145 165 170 165 Q 195 165 195 190 Q 195 175 170 175"
                        fill="#78716C"
                    />

                    {/* Eyes - with blinking */}
                    <motion.g
                        animate={{
                            scaleY: [1, 0.1, 1],
                        }}
                        transition={{
                            duration: 0.2,
                            repeat: Infinity,
                            repeatDelay: 4,
                        }}
                    >
                        <circle cx="162" cy="188" r="2" fill="#1F2937" />
                        <circle cx="178" cy="188" r="2" fill="#1F2937" />
                    </motion.g>

                    {/* Smile */}
                    <path
                        d="M 162 198 Q 170 202 178 198"
                        stroke="#78716C"
                        strokeWidth="1.5"
                        fill="none"
                        strokeLinecap="round"
                    />

                    {/* Arm reaching to laptop */}
                    <motion.path
                        d="M 140 230 Q 180 240 220 250"
                        stroke="#C2825B"
                        strokeWidth="8"
                        fill="none"
                        strokeLinecap="round"
                        animate={{
                            d: [
                                "M 140 230 Q 180 240 220 250",
                                "M 140 230 Q 180 242 220 252",
                                "M 140 230 Q 180 240 220 250",
                            ]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </motion.g>

                {/* Laptop */}
                <motion.g
                    animate={{
                        rotateX: [0, 2, 0],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    {/* Laptop base */}
                    <rect x="200" y="265" width="100" height="15" rx="2" fill="#78716C" />

                    {/* Laptop screen */}
                    <rect x="210" y="200" width="80" height="70" rx="3" fill="#78716C" />
                    <rect x="215" y="205" width="70" height="60" rx="2" fill="#E5E7EB" />

                    {/* Code lines on screen - with typing animation */}
                    <motion.g
                        animate={{
                            opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <rect x="220" y="215" width="40" height="3" rx="1" fill="#78716C" opacity="0.6" />
                        <rect x="220" y="225" width="50" height="3" rx="1" fill="#78716C" opacity="0.6" />
                        <rect x="220" y="235" width="35" height="3" rx="1" fill="#78716C" opacity="0.6" />
                        <rect x="220" y="245" width="45" height="3" rx="1" fill="#D97706" opacity="0.8" />
                    </motion.g>
                </motion.g>

                {/* Coffee cup - with steam */}
                <motion.g>
                    <ellipse cx="280" cy="275" rx="10" ry="8" fill="#78716C" opacity="0.4" />
                    <rect x="270" y="260" width="20" height="15" rx="2" fill="#C2825B" opacity="0.6" />

                    {/* Steam */}
                    <motion.path
                        d="M 275 255 Q 273 245 275 240"
                        stroke="#78716C"
                        strokeWidth="1.5"
                        fill="none"
                        strokeLinecap="round"
                        opacity="0.3"
                        animate={{
                            opacity: [0.3, 0.6, 0.3],
                            y: [0, -5, 0],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                    <motion.path
                        d="M 285 255 Q 287 245 285 240"
                        stroke="#78716C"
                        strokeWidth="1.5"
                        fill="none"
                        strokeLinecap="round"
                        opacity="0.3"
                        animate={{
                            opacity: [0.3, 0.6, 0.3],
                            y: [0, -5, 0],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5
                        }}
                    />
                </motion.g>

                {/* Plant - with gentle sway */}
                <motion.g
                    animate={{
                        rotate: [0, 2, 0, -2, 0],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    style={{ transformOrigin: "320px 280px" }}
                >
                    <rect x="315" y="270" width="10" height="15" rx="2" fill="#78716C" opacity="0.4" />
                    <ellipse cx="320" cy="265" rx="8" ry="10" fill="#86A789" opacity="0.6" />
                    <ellipse cx="315" cy="260" rx="6" ry="8" fill="#86A789" opacity="0.5" />
                    <ellipse cx="325" cy="260" rx="6" ry="8" fill="#86A789" opacity="0.5" />
                </motion.g>
            </svg>
        </div>
    )
}
