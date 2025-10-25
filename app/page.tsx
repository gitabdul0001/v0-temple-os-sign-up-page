"use client"

import { useState, useEffect } from "react"

export default function Home() {
  const [bootComplete, setBootComplete] = useState(false)
  const [bootLines, setBootLines] = useState<string[]>([])

  const bootSequence = [
    "> BOOTING VibeOS v1.0...",
    "> LOADING SYSTEM MODULES...",
    "> INITIALIZING GRAPHICS SUBSYSTEM...",
    "> MOUNTING VIRTUAL DRIVES...",
    "> VibeOS READY.",
    "> WELCOME TO THE RETRO COMPUTING EXPERIENCE.",
  ]

  useEffect(() => {
    let currentLine = 0
    const lines: string[] = []

    const typeInterval = setInterval(() => {
      if (currentLine < bootSequence.length) {
        lines.push(bootSequence[currentLine])
        setBootLines([...lines])
        currentLine++
      } else {
        setBootComplete(true)
        clearInterval(typeInterval)
      }
    }, 300)

    return () => clearInterval(typeInterval)
  }, [])

  const handleEnter = () => {
    window.location.href = "https://app.vibeos.fun"
  }

  return (
    <div className="min-h-screen bg-[#0000aa] flex items-center justify-center p-2">
      <div className="w-full max-w-6xl" style={{ aspectRatio: "16/10" }}>
        {/* Outer blue border frame */}
        <div
          className="w-full h-full border-4 border-[#0000aa] bg-[#0000aa] relative flex flex-col"
          style={{
            boxShadow: "inset 0 0 0 2px #ffff55, inset 0 0 0 3px #0000aa, 0 0 0 2px #ffff55",
          }}
        >
          {/* Title bar */}
          <div className="bg-[#00aaaa] text-[#0000aa] px-3 py-1 flex items-center justify-between font-mono text-sm font-bold border-b-2 border-[#ffffff]">
            <div className="flex items-center gap-2">
              <span className="bg-[#ffffff] text-[#0000aa] px-1 text-xs">■</span>
              <span>VibeOS BOOT TERMINAL</span>
            </div>
            <span className="bg-[#ffffff] text-[#0000aa] px-1 text-xs">■</span>
          </div>

          {/* Main content area */}
          <div className="flex-1 bg-[#000000] text-[#00aa00] p-4 overflow-hidden flex flex-col font-mono text-sm leading-relaxed">
            {/* Boot sequence at top */}
            <div className="mb-4">
              {bootLines.map((line, idx) => (
                <div key={idx} className="text-[#00aa00]">
                  {line}
                  {idx === bootLines.length - 1 && !bootComplete && <span className="animate-pulse">_</span>}
                </div>
              ))}
            </div>

            {bootComplete && (
              <div className="flex-1 flex flex-col items-center justify-center gap-4">
                {/* VibeOS title in yellow */}
                <div className="text-5xl font-bold text-[#ffff55]" style={{ letterSpacing: "0.1em" }}>
                  VibeOS
                </div>

                {/* Subtitle in white */}
                <div className="text-white text-center max-w-md" style={{ fontSize: "14px", letterSpacing: "0.05em" }}>
                  Your Personal Computer, Reimagined in the Cloud
                </div>

                {/* Tagline in green */}
                <div
                  className="text-[#00aa00] text-center font-bold"
                  style={{ fontSize: "12px", letterSpacing: "0.1em" }}
                >
                  A RETRO OPERATING SYSTEM EXPERIENCE
                </div>

                {/* Description in cyan */}
                <div className="text-[#00aaaa] text-center" style={{ fontSize: "12px" }}>
                  Bringing back the computing nostalgia
                </div>

                {/* VibeJam credit with circle */}
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-[#ff00ff] glow-text" style={{ fontSize: "12px" }}>
                    Built for VibeJam Hackathon
                  </span>
                  <img
                    src="/retro-computer.png"
                    alt="VibeJam"
                    className="w-4 h-4 rounded-full object-cover border-2 border-[#00aaaa]"
                  />
                </div>

                {/* ENTER button */}
                <button
                  onClick={handleEnter}
                  className="mt-6 px-8 py-2 bg-[#aaaaaa] text-[#000000] font-mono font-bold border-2 border-[#aaaaaa] hover:bg-[#ffffff] transition-colors"
                  style={{
                    boxShadow: "inset 1px 1px 0 #ffffff, inset -1px -1px 0 #555555",
                    fontSize: "14px",
                    letterSpacing: "0.1em",
                  }}
                >
                  [ ENTER ]
                </button>

                {/* Instruction text with blinking cursor */}
                <div className="text-[#aaaaaa] text-center mt-4" style={{ fontSize: "12px" }}>
                  Press ENTER to boot into VibeOS
                  <span className="text-[#00aa00] animate-pulse">█</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
