import { motion } from 'framer-motion'

export default function CodingCharacter() {
    return (
        <div className="relative w-full max-w-md mx-auto">
            <svg viewBox="0 0 400 400" className="w-full h-auto">
                {/* Laptop */}
                <g>
                    {/* Laptop base */}
                    <rect x="200" y="265" width="100" height="15" rx="2" fill="#78716C" />

                    {/* Laptop screen */}
                    <rect x="210" y="200" width="80" height="70" rx="3" fill="#78716C" />
                    <rect x="215" y="205" width="70" height="60" rx="2" fill="#1F2937" />

                    {/* Code on screen - typing animation */}
                    <motion.g>
                        <motion.rect
                            x="220"
                            y="215"
                            width="0"
                            height="3"
                            rx="1"
                            fill="#86A789"
                            animate={{
                                width: [0, 40, 40, 40],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeOut"
                            }}
                        />
                        <motion.rect
                            x="220"
                            y="225"
                            width="0"
                            height="3"
                            rx="1"
                            fill="#E5E7EB"
                            animate={{
                                width: [0, 0, 50, 50],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeOut",
                                delay: 0.5
                            }}
                        />
                        <motion.rect
                            x="220"
                            y="235"
                            width="0"
                            height="3"
                            rx="1"
                            fill="#D97706"
                            animate={{
                                width: [0, 0, 0, 35],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeOut",
                                delay: 1
                            }}
                        />
                        {/* Cursor blink */}
                        <motion.rect
                            x="220"
                            y="245"
                            width="2"
                            height="3"
                            fill="#86A789"
                            animate={{
                                opacity: [1, 0, 1],
                            }}
                            transition={{
                                duration: 0.8,
                                repeat: Infinity,
                            }}
                        />
                    </motion.g>
                </g>

                {/* Server Rack - Left side */}
                <motion.g
                    animate={{
                        opacity: [0.6, 0.8, 0.6],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    {/* Server rack frame */}
                    <rect x="80" y="180" width="50" height="90" rx="3" fill="none" stroke="#78716C" strokeWidth="2" opacity="0.4" />

                    {/* Server units with blinking lights */}
                    <rect x="85" y="190" width="40" height="12" rx="1" fill="#78716C" opacity="0.3" />
                    <motion.circle
                        cx="120"
                        cy="196"
                        r="2"
                        fill="#86A789"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />

                    <rect x="85" y="210" width="40" height="12" rx="1" fill="#78716C" opacity="0.3" />
                    <motion.circle
                        cx="120"
                        cy="216"
                        r="2"
                        fill="#D97706"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    />

                    <rect x="85" y="230" width="40" height="12" rx="1" fill="#78716C" opacity="0.3" />
                    <motion.circle
                        cx="120"
                        cy="236"
                        r="2"
                        fill="#86A789"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.8, repeat: Infinity, delay: 1 }}
                    />

                    <rect x="85" y="250" width="40" height="12" rx="1" fill="#78716C" opacity="0.3" />
                    <motion.circle
                        cx="120"
                        cy="256"
                        r="2"
                        fill="#86A789"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 2.2, repeat: Infinity, delay: 0.3 }}
                    />
                </motion.g>

                {/* Cloud Icon - Top right */}
                <motion.g
                    animate={{
                        y: [0, -5, 0],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <path
                        d="M 300 120 Q 295 115 300 110 Q 305 105 315 105 Q 320 100 330 105 Q 340 105 345 115 Q 350 115 350 125 Q 350 135 340 135 L 305 135 Q 295 135 295 125 Q 295 120 300 120"
                        fill="#78716C"
                        opacity="0.3"
                    />
                    {/* Cloud data indicators */}
                    <motion.circle
                        cx="315"
                        cy="120"
                        r="1.5"
                        fill="#D97706"
                        animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.circle
                        cx="325"
                        cy="118"
                        r="1.5"
                        fill="#86A789"
                        animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    />
                </motion.g>

                {/* Network connection lines - from laptop to server */}
                <motion.g>
                    <motion.path
                        d="M 210 230 Q 150 210 130 200"
                        stroke="#86A789"
                        strokeWidth="1.5"
                        fill="none"
                        strokeDasharray="4 4"
                        opacity="0.4"
                        animate={{
                            strokeDashoffset: [0, -8],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />

                    {/* Data packet moving along connection */}
                    <motion.circle
                        r="2"
                        fill="#86A789"
                        animate={{
                            offsetDistance: ["0%", "100%"],
                            opacity: [0, 1, 1, 0],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <animateMotion
                            dur="2s"
                            repeatCount="indefinite"
                            path="M 210 230 Q 150 210 130 200"
                        />
                    </motion.circle>
                </motion.g>

                {/* Network connection - laptop to cloud */}
                <motion.g>
                    <motion.path
                        d="M 250 210 Q 280 160 320 130"
                        stroke="#D97706"
                        strokeWidth="1.5"
                        fill="none"
                        strokeDasharray="4 4"
                        opacity="0.4"
                        animate={{
                            strokeDashoffset: [0, -8],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "linear",
                            delay: 0.5
                        }}
                    />

                    {/* Data packet moving to cloud */}
                    <motion.circle
                        r="2"
                        fill="#D97706"
                        animate={{
                            offsetDistance: ["0%", "100%"],
                            opacity: [0, 1, 1, 0],
                        }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5
                        }}
                    >
                        <animateMotion
                            dur="2.5s"
                            repeatCount="indefinite"
                            path="M 250 210 Q 280 160 320 130"
                        />
                    </motion.circle>
                </motion.g>

                {/* Network connection - laptop to dashboard */}
                <motion.g>
                    <motion.path
                        d="M 270 230 Q 295 220 330 215"
                        stroke="#86A789"
                        strokeWidth="1.5"
                        fill="none"
                        strokeDasharray="4 4"
                        opacity="0.4"
                        animate={{
                            strokeDashoffset: [0, -8],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "linear",
                            delay: 1
                        }}
                    />

                    {/* Data packet moving to dashboard */}
                    <motion.circle
                        r="2"
                        fill="#86A789"
                        animate={{
                            offsetDistance: ["0%", "100%"],
                            opacity: [0, 1, 1, 0],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                        }}
                    >
                        <animateMotion
                            dur="2s"
                            repeatCount="indefinite"
                            path="M 270 230 Q 295 220 330 215"
                        />
                    </motion.circle>
                </motion.g>

                {/* Monitoring Dashboard - Right side */}
                <motion.g
                    animate={{
                        opacity: [0.6, 0.8, 0.6],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    {/* Dashboard frame */}
                    <rect x="320" y="200" width="70" height="60" rx="3" fill="none" stroke="#78716C" strokeWidth="2" opacity="0.4" />

                    {/* Dashboard title bar */}
                    <rect x="320" y="200" width="70" height="8" rx="3" fill="#78716C" opacity="0.2" />

                    {/* Metric cards */}
                    <rect x="325" y="215" width="28" height="18" rx="2" fill="#78716C" opacity="0.2" />
                    <rect x="357" y="215" width="28" height="18" rx="2" fill="#78716C" opacity="0.2" />

                    {/* Animated metric values */}
                    <motion.text
                        x="339"
                        y="226"
                        fontSize="8"
                        fill="#86A789"
                        textAnchor="middle"
                        opacity="0.7"
                        animate={{ opacity: [0.5, 0.9, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        $
                    </motion.text>
                    <motion.text
                        x="371"
                        y="226"
                        fontSize="8"
                        fill="#D97706"
                        textAnchor="middle"
                        opacity="0.7"
                        animate={{ opacity: [0.5, 0.9, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    >
                        %
                    </motion.text>

                    {/* Mini graph */}
                    <motion.path
                        d="M 328 245 L 335 242 L 342 248 L 349 240 L 356 243 L 363 238 L 370 245 L 377 241 L 384 246"
                        stroke="#86A789"
                        strokeWidth="1.5"
                        fill="none"
                        opacity="0.5"
                        animate={{
                            d: [
                                "M 328 245 L 335 242 L 342 248 L 349 240 L 356 243 L 363 238 L 370 245 L 377 241 L 384 246",
                                "M 328 245 L 335 244 L 342 246 L 349 242 L 356 245 L 363 240 L 370 243 L 377 243 L 384 244",
                                "M 328 245 L 335 242 L 342 248 L 349 240 L 356 243 L 363 238 L 370 245 L 377 241 L 384 246",
                            ]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />

                    {/* Status indicators */}
                    <motion.circle
                        cx="330"
                        cy="255"
                        r="1.5"
                        fill="#86A789"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <motion.circle
                        cx="355"
                        cy="255"
                        r="1.5"
                        fill="#86A789"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.8, repeat: Infinity, delay: 0.3 }}
                    />
                    <motion.circle
                        cx="380"
                        cy="255"
                        r="1.5"
                        fill="#86A789"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                    />
                </motion.g>
            </svg>
        </div>
    )
}
