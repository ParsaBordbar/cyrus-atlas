export function Rosette({ size = 14 }: { size?: number }) {
  const petals = Array.from({ length: 12 }, (_, i) => i * 30)
  return (
    <svg className="rosette" viewBox="-12 -12 24 24" width={size} height={size} aria-hidden="true">
      {petals.map((a) => (
        <ellipse key={a} cx="0" cy="-6.6" rx="2.3" ry="4.6" transform={`rotate(${a})`} fill="currentColor" opacity="0.85" />
      ))}
      <circle r="3" fill="currentColor" />
      <circle r="1.3" fill="var(--color-paper-light)" />
    </svg>
  )
}
