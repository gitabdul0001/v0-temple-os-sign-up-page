"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function SignUpForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission delay
    setTimeout(() => {
      router.push("/desktop")
    }, 500)
  }

  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      {/* System boot text */}
      <div className="absolute top-8 left-8 text-[#aaaa00] font-mono text-sm leading-relaxed">
        <div>SYSTEM READY.</div>
        <div>PLEASE ENTER USER CREDENTIALS TO ACCESS PERSONAL TERMINAL.</div>
      </div>

      {/* Main window */}
      <div className="w-full max-w-md retro-border bg-[#aaaaaa] shadow-lg">
        {/* Title bar */}
        <div className="bg-[#000080] text-[#aaaa00] px-2 py-1 flex items-center justify-between retro-border-invert">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-[#aaaa00] flex items-center justify-center">
              <span className="text-[#000080] text-xs font-bold">≡</span>
            </div>
            <span className="font-mono text-sm font-bold">Sign-Up Terminal</span>
          </div>
          <div className="flex gap-1">
            <button className="w-5 h-5 bg-[#aaaa00] text-[#000080] font-bold text-xs flex items-center justify-center retro-border-invert hover:bg-[#ffff55]">
              _
            </button>
            <button className="w-5 h-5 bg-[#aaaa00] text-[#000080] font-bold text-xs flex items-center justify-center retro-border-invert hover:bg-[#ffff55]">
              □
            </button>
            <button className="w-5 h-5 bg-[#aaaa00] text-[#000080] font-bold text-xs flex items-center justify-center retro-border-invert hover:bg-[#ffff55]">
              ×
            </button>
          </div>
        </div>

        {/* Menu bar */}
        <div className="bg-[#aaaaaa] text-[#000080] px-2 py-1 flex gap-4 border-b-2 border-[#555555] font-mono text-xs font-bold">
          <span className="cursor-pointer hover:bg-[#000080] hover:text-[#aaaa00] px-1">File</span>
          <span className="cursor-pointer hover:bg-[#000080] hover:text-[#aaaa00] px-1">Edit</span>
          <span className="cursor-pointer hover:bg-[#000080] hover:text-[#aaaa00] px-1">Help</span>
        </div>

        {/* Form content */}
        <div className="bg-[#aaaaaa] p-4">
          {/* Console log area */}
          <div className="bg-[#000080] text-[#aaaa00] p-3 mb-4 font-mono text-xs leading-relaxed border-2 border-[#555555]">
            <div>C:\FANTASY_OS\LOGIN.EXE</div>
            <div className="mt-2">INITIALIZING PERSONAL TERMINAL...</div>
            <div>READY FOR INPUT</div>
            <div className="mt-2 flex items-center">
              <span>_</span>
              <span className="blink-cursor ml-1">█</span>
            </div>
          </div>

          {/* Form fields */}
          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Username field */}
            <div>
              <label className="block text-[#000080] font-mono text-xs font-bold mb-1">USERNAME:</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full bg-[#ffffff] text-[#000080] px-2 py-1 font-mono text-sm border-2 border-[#555555] focus:outline-none focus:border-[#00aaaa]"
              />
            </div>

            {/* Email field */}
            <div>
              <label className="block text-[#000080] font-mono text-xs font-bold mb-1">EMAIL:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-[#ffffff] text-[#000080] px-2 py-1 font-mono text-sm border-2 border-[#555555] focus:outline-none focus:border-[#00aaaa]"
              />
            </div>

            {/* Password field */}
            <div>
              <label className="block text-[#000080] font-mono text-xs font-bold mb-1">PASSWORD:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full bg-[#ffffff] text-[#000080] px-2 py-1 font-mono text-sm border-2 border-[#555555] focus:outline-none focus:border-[#00aaaa]"
              />
            </div>

            {/* Submit button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#000080] text-[#aaaa00] px-4 py-2 font-mono font-bold text-sm retro-border-invert hover:bg-[#0000ff] disabled:opacity-50 transition-colors"
              >
                {isSubmitting ? "ENTERING..." : "ENTER"}
              </button>
            </div>
          </form>
        </div>

        {/* Status bar */}
        <div className="bg-[#aaaaaa] text-[#000080] px-2 py-1 text-xs font-mono border-t-2 border-[#ffffff] flex justify-between">
          <span>Ready</span>
          <span>14:19</span>
        </div>
      </div>

      {/* Bottom system text */}
      <div className="absolute bottom-4 left-4 text-[#aaaaaa] font-mono text-xs opacity-75">
        <div>© 1983 FANTASY OS CORPORATION. ALL RIGHTS RESERVED.</div>
      </div>
    </div>
  )
}
