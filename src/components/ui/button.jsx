export function Button({ className = '', variant='primary', size='md', ...props }) {
  const style = variant === 'outline' ? 'btn btn-outline' : 'btn btn-primary'
  return <button className={`${style} ${className}`} {...props} />
}