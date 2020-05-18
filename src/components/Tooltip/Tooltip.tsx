import React, { useEffect } from 'react'
import './Tooltip.scss'

export const Tooltip = ({
  coords,
  parentRef,
  setClosed
}: {
  coords: { left: number; top: number } | undefined
  parentRef: React.MutableRefObject<HTMLDivElement | null>
  setClosed: () => void
}) => {
  console.log('parentRef', parentRef.current)
  
  useEffect(()=> {
    const node = parentRef.current

    const handleOnScroll = () => {
      console.log('it scrolled')
      setClosed()
    }

    if (node) node.addEventListener('scroll', handleOnScroll)
    return ( )=> {
      if (node) node.removeEventListener('scroll', handleOnScroll)
    }
  }, [parentRef, setClosed])

  return (
    <div className="Tooltip" style={{ top: coords?.top, left: coords?.left }}>
      Hello from the Tooltip component
    </div>
  )
}
