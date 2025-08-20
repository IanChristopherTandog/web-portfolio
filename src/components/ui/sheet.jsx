import { useEffect } from 'react'
export function Sheet({ open, onOpenChange, children }) {
  useEffect(()=>{
    document.body.style.overflow = open ? 'hidden' : ''
    return ()=>{ document.body.style.overflow='' }
  },[open])
  return <>{children}</>
}
export function SheetTrigger({ asChild=false, children }) { return children }
export function SheetContent({ side='right', className='', children }) {
  return <div className="drawer-panel">{children}</div>
}