import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function CloudNetworkAnimation() {
    const [activePath, setActivePath] = useState(0)

    // Network nodes representing cloud infrastructure
    const nodes = [
        { x: 20, y: 20, label: 'Client' },
        { x: 50, y: 15, label: 'Load Balancer' },
        { x: 80, y: 20, label: 'Server 1' },
        { x: 50, y: 50, label: 'Database' },
        { x: 80, y: 50, label: 'Server 2' },
        { x: 50, y: 85, label: 'Cache' },
    ]

    // Paths that the data packet will travel
    const paths = [
        [0, 1, 2], // Client -> LB -> Server 1
        [0, 1, 4], // Client -> LB -> Server 2
        [2, 3],    // Server 1 -> DB
        [4, 3],    // Server 2 -> DB
        [1, 5],    // LB -> Cache
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setActivePath((prev) => (prev + 1) % paths.length)
        }, 2500)
        return () => clearInterval(interval)
    }, [])

    const currentPath = paths[activePath]

    return (
        <div className="relative w-full h-96 bg-background rounded-lg border border-stone-200 overflow-hidden">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                {/* Draw connections */}
                {paths.map((path, idx) => (
                    path.map((nodeIdx, i) => {
                        if (i === path.length - 1) return null
                        const start = nodes[nodeIdx]
                        const end = nodes[path[i + 1]]
                        return (
                            <line
                                key={`${idx}-${i}`}
                                x1={start.x}
                                y1={start.y}
                                x2={end.x}
                                y2={end.y}
                                stroke="#78716C"
                                strokeWidth="0.3"
                                opacity="0.3"
                            />
                        )
                    })
                ))}

                {/* Draw nodes */}
                {nodes.map((node, idx) => (
                    <g key={idx}>
                        <circle
                            cx={node.x}
                            cy={node.y}
                            r="2"
                            fill="#78716C"
                            opacity="0.6"
                        />
                        <text
                            x={node.x}
                            y={node.y - 3}
                            fontSize="2.5"
                            fill="#78716C"
                            textAnchor="middle"
                            className="font-sans"
                        >
                            {node.label}
                        </text>
                    </g>
                ))}

                {/* Animated data packet */}
                {currentPath.map((nodeIdx, i) => {
                    if (i === currentPath.length - 1) return null
                    const start = nodes[nodeIdx]
                    const end = nodes[currentPath[i + 1]]

                    return (
                        <motion.circle
                            key={`packet-${i}`}
                            r="1"
                            fill="#D97706"
                            initial={{ cx: start.x, cy: start.y, opacity: 0 }}
                            animate={{
                                cx: end.x,
                                cy: end.y,
                                opacity: [0, 1, 1, 0]
                            }}
                            transition={{
                                duration: 1.2,
                                delay: i * 0.6,
                                ease: "easeInOut"
                            }}
                        />
                    )
                })}
            </svg>

            {/* Legend */}
            <div className="absolute bottom-4 left-4 text-xs text-foreground-muted font-sans">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span>Data Flow</span>
                </div>
            </div>
        </div>
    )
}
