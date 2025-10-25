"use client"

export default function Desktop() {
  return (
    <main className="w-full h-screen bg-[#0000aa] flex items-center justify-center overflow-hidden p-4">
      <div className="text-center">
        <div className="text-[#aaaa00] font-mono text-lg mb-8">
          <div className="mb-4">WELCOME TO FANTASY OS</div>
          <div className="text-sm mb-8">Your personal terminal is now active.</div>
        </div>

        <div className="bg-[#aaaaaa] retro-border p-8 max-w-md">
          <div className="bg-[#000080] text-[#aaaa00] p-4 font-mono text-sm mb-4 border-2 border-[#555555]">
            <div>SYSTEM INITIALIZED</div>
            <div className="mt-2">USER AUTHENTICATED</div>
            <div className="mt-2">DESKTOP READY</div>
          </div>

          <button
            onClick={() => (window.location.href = "/")}
            className="w-full bg-[#000080] text-[#aaaa00] px-4 py-2 font-mono font-bold text-sm retro-border-invert hover:bg-[#0000ff] transition-colors"
          >
            LOGOUT
          </button>
        </div>
      </div>
    </main>
  )
}
