'use client'

export default function TechHand() {
  return (
    <svg
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Defs for gradients and filters */}
      <defs>
        <linearGradient id="handGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#0a9fff" stopOpacity="0.5" />
        </linearGradient>

        <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#00d4ff" stopOpacity="0" />
        </radialGradient>

        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="hardGlow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background glow circles */}
      <circle cx="200" cy="200" r="150" fill="url(#glowGradient)" />
      <circle cx="200" cy="200" r="180" fill="none" stroke="#00d4ff" strokeWidth="1" opacity="0.2" />
      <circle cx="200" cy="200" r="140" fill="none" stroke="#0a9fff" strokeWidth="1" opacity="0.15" />

      {/* Hexagonal grid background */}
      <g opacity="0.15" stroke="#00d4ff" strokeWidth="1" fill="none">
        <line x1="150" y1="100" x2="200" y2="80" />
        <line x1="200" y1="80" x2="250" y2="100" />
        <line x1="250" y1="100" x2="250" y2="150" />
        <line x1="250" y1="150" x2="200" y2="170" />
        <line x1="200" y1="170" x2="150" y2="150" />
        <line x1="150" y1="150" x2="150" y2="100" />

        <line x1="120" y1="200" x2="170" y2="180" />
        <line x1="170" y1="180" x2="220" y2="200" />
        <line x1="220" y1="200" x2="220" y2="250" />
        <line x1="220" y1="250" x2="170" y2="270" />
        <line x1="170" y1="270" x2="120" y2="250" />
        <line x1="120" y1="250" x2="120" y2="200" />
      </g>

      {/* Hand/Palm Shape */}
      <g filter="url(#glow)">
        {/* Palm */}
        <ellipse cx="200" cy="240" rx="60" ry="70" fill="url(#handGradient)" />

        {/* Thumb */}
        <ellipse cx="150" cy="200" rx="20" ry="45" fill="url(#handGradient)" transform="rotate(-30 150 200)" />

        {/* Index finger */}
        <rect x="190" y="140" width="20" height="80" rx="10" fill="url(#handGradient)" />

        {/* Middle finger */}
        <rect x="213" y="120" width="20" height="100" rx="10" fill="url(#handGradient)" />

        {/* Ring finger */}
        <rect x="236" y="135" width="20" height="90" rx="10" fill="url(#handGradient)" />

        {/* Pinky */}
        <rect x="259" y="160" width="18" height="75" rx="9" fill="url(#handGradient)" />
      </g>

      {/* AI/Data visualization in palm */}
      <g filter="url(#hardGlow)">
        {/* Central node */}
        <circle cx="200" cy="240" r="15" fill="#00d4ff" />
        <circle cx="200" cy="240" r="15" fill="none" stroke="#00d4ff" strokeWidth="2" />

        {/* Surrounding nodes */}
        <circle cx="170" cy="210" r="8" fill="#0a9fff" opacity="0.8" />
        <circle cx="230" cy="210" r="8" fill="#0a9fff" opacity="0.8" />
        <circle cx="200" cy="180" r="8" fill="#0a9fff" opacity="0.8" />
        <circle cx="180" cy="260" r="8" fill="#0a9fff" opacity="0.8" />
        <circle cx="220" cy="260" r="8" fill="#0a9fff" opacity="0.8" />

        {/* Connecting lines */}
        <line x1="200" y1="240" x2="170" y2="210" stroke="#00d4ff" strokeWidth="1.5" opacity="0.6" />
        <line x1="200" y1="240" x2="230" y2="210" stroke="#00d4ff" strokeWidth="1.5" opacity="0.6" />
        <line x1="200" y1="240" x2="200" y2="180" stroke="#00d4ff" strokeWidth="1.5" opacity="0.6" />
        <line x1="200" y1="240" x2="180" y2="260" stroke="#00d4ff" strokeWidth="1.5" opacity="0.6" />
        <line x1="200" y1="240" x2="220" y2="260" stroke="#00d4ff" strokeWidth="1.5" opacity="0.6" />
      </g>

      {/* Floating particles/nodes around hand */}
      <g fill="#00d4ff" opacity="0.6">
        <circle cx="120" cy="150" r="4" />
        <circle cx="280" cy="120" r="3" />
        <circle cx="300" cy="200" r="3.5" />
        <circle cx="100" cy="280" r="3" />
        <circle cx="320" cy="280" r="2.5" />
      </g>

      {/* Floating circles animation helper */}
      <g fill="none" stroke="#00d4ff" strokeWidth="1" opacity="0.4">
        <circle cx="120" cy="150" r="20" />
        <circle cx="280" cy="120" r="18" />
        <circle cx="300" cy="200" r="22" />
      </g>

      {/* Top right tech elements */}
      <g opacity="0.5">
        <rect x="280" y="60" width="50" height="50" rx="5" fill="none" stroke="#0a9fff" strokeWidth="2" />
        <line x1="305" y1="60" x2="305" y2="110" stroke="#00d4ff" strokeWidth="1" />
        <line x1="280" y1="85" x2="330" y2="85" stroke="#00d4ff" strokeWidth="1" />
        <circle cx="305" cy="85" r="3" fill="#00d4ff" />
      </g>

      {/* Bottom left tech elements */}
      <g opacity="0.5">
        <path
          d="M 80 320 L 100 300 L 120 320 L 100 340 Z"
          fill="none"
          stroke="#0a9fff"
          strokeWidth="2"
        />
        <circle cx="100" cy="320" r="25" fill="none" stroke="#00d4ff" strokeWidth="1" opacity="0.3" />
      </g>
    </svg>
  )
}
