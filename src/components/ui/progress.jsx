export function Progress({ value=0, className='' }) {
  const v = Math.max(0, Math.min(100, value))
  return <div className={`progress ${className}`} role="progressbar" aria-valuenow={v} aria-valuemin="0" aria-valuemax="100">
    <span style={{ width: v + '%' }} />
  </div>
}