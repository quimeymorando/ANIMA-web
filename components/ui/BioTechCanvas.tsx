'use client'

import { motion } from 'framer-motion'

// 24 nodos (índices 0-23)
const NODES = [
    // Hélice izquierda (0-7)
    { x: 22, y: 12 }, { x: 18, y: 24 }, { x: 22, y: 36 }, { x: 18, y: 48 },
    { x: 22, y: 60 }, { x: 18, y: 72 }, { x: 22, y: 84 }, { x: 18, y: 96 },
    // Hélice derecha (8-15)
    { x: 78, y: 12 }, { x: 82, y: 24 }, { x: 78, y: 36 }, { x: 82, y: 48 },
    { x: 78, y: 60 }, { x: 82, y: 72 }, { x: 78, y: 84 }, { x: 82, y: 96 },
    // Nervadura central (16-23)
    { x: 50, y: 8 }, { x: 50, y: 20 }, { x: 50, y: 32 }, { x: 50, y: 44 },
    { x: 50, y: 56 }, { x: 50, y: 68 }, { x: 50, y: 80 }, { x: 50, y: 92 },
]

// Conexiones — todos los índices son 0-23
const CONNECTIONS = [
    // Hélice izquierda vertical
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7],
    // Hélice derecha vertical
    [8, 9], [9, 10], [10, 11], [11, 12], [12, 13], [13, 14], [14, 15],
    // Puentes ADN (izq ↔ der)
    [0, 8], [1, 9], [2, 10], [3, 11], [4, 12], [5, 13], [6, 14], [7, 15],
    // Nervadura central
    [16, 17], [17, 18], [18, 19], [19, 20], [20, 21], [21, 22], [22, 23],
    // Nervaduras laterales (hélice ↔ nervadura central)
    [2, 18], [10, 18],
    [3, 19], [11, 19],
    [4, 20], [12, 20],
    [5, 21], [13, 21],
]

function AnimatedLine({
    x1, y1, x2, y2, delay,
}: {
    x1: number; y1: number; x2: number; y2: number; delay: number
}) {
    return (
        <motion.line
            x1={`${x1}%`} y1={`${y1}%`}
            x2={`${x2}%`} y2={`${y2}%`}
            stroke="url(#goldGradient)"
            strokeWidth="0.4"
            strokeLinecap="round"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{
                opacity: [0, 0.55, 0.55, 0],
                pathLength: [0, 1, 1, 0],
            }}
            transition={{
                duration: 5,
                delay,
                repeat: Infinity,
                repeatDelay: 6,
                ease: 'easeInOut',
            }}
        />
    )
}

function PulsingNode({ x, y, delay }: { x: number; y: number; delay: number }) {
    return (
        <motion.circle
            cx={`${x}%`}
            cy={`${y}%`}
            r="0.6"
            fill="var(--dorado)"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
                opacity: [0, 0.9, 0.4, 0.9, 0],
                scale: [0, 1, 1.4, 1, 0],
            }}
            transition={{
                duration: 4,
                delay,
                repeat: Infinity,
                repeatDelay: 7,
                ease: 'easeInOut',
            }}
        />
    )
}

export default function BioTechCanvas() {
    return (
        <div
            className="absolute inset-0 overflow-hidden pointer-events-none"
            aria-hidden="true"
        >
            <svg
                className="w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid slice"
            >
                <defs>
                    <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#c9a84c" stopOpacity="0" />
                        <stop offset="40%" stopColor="#e8c96a" stopOpacity="1" />
                        <stop offset="100%" stopColor="#c9a84c" stopOpacity="0" />
                    </linearGradient>
                    <radialGradient id="glowGold" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#e8c96a" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#c9a84c" stopOpacity="0" />
                    </radialGradient>
                </defs>

                {/* Líneas de conexión animadas */}
                {CONNECTIONS.map(([a, b], i) => (
                    <AnimatedLine
                        key={i}
                        x1={NODES[a].x} y1={NODES[a].y}
                        x2={NODES[b].x} y2={NODES[b].y}
                        delay={i * 0.2}
                    />
                ))}

                {/* Nodos pulsantes */}
                {NODES.map((node, i) => (
                    <PulsingNode key={i} x={node.x} y={node.y} delay={i * 0.25} />
                ))}

                {/* Orbe de brillo central */}
                <motion.ellipse
                    cx="50%" cy="50%"
                    rx="22%" ry="32%"
                    fill="url(#glowGold)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.12, 0.06, 0.12, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                />
            </svg>
        </div>
    )
}
