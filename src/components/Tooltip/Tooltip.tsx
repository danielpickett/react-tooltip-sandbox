import React, { ReactElement, useCallback, useState, cloneElement } from 'react'
import './Tooltip.scss'
import { Portal } from '../Portal/Portal'
import * as ReactIs from 'react-is'

export const Tooltip = ({
  children,
  isActive,
}: {
  children: ReactElement
  isActive: boolean
}) => {
  const [coords, setCoords] = useState<{ left: number; top: number } | null>()

  const callbackRef = useCallback((node) => {
    if (node !== null) {
      const rect = node.getBoundingClientRect()
      console.log(ReactIs.isFragment(node))
      console.log(rect)
      setCoords({
        left: rect.x + rect.width / 2,
        top: rect.y + window.scrollY,
      })
    }
  }, [])

  return (
    <>
      {cloneElement(children, { ref: callbackRef })}

      {isActive && (
        <Portal>
          <div
            className="Tooltip"
            style={{ left: coords?.left, top: coords?.top }}
          >
            Hello from the Tooltip component
          </div>
        </Portal>
      )}
    </>
  )
}
