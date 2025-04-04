import { Globe } from "./globe"

export function GlobeDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background/30 px-4 py-8 md:shadow-xl z-30">
      <Globe className="z-50" />
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))] z-20" />
    </div>
  )
} 