export default function Logo({ className='' }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img src="/logo.svg" alt="Cognix" className="h-8 w-8 rounded-lg" />
      <span className="text-xl font-bold tracking-tight">Cognix</span>
    </div>
  )
}
