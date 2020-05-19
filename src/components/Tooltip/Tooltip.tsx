import React, { ReactElement, useCallback, useState, cloneElement, useEffect } from 'react'
import './Tooltip.scss'
import { Portal } from '../Portal/Portal'
import * as ReactIs from 'react-is'
import { createPortal } from 'react-dom'

export const Tooltip = ({
  children,
  isActive,
}: {
  children: ReactElement
  isActive: boolean
}) => {
  const [coords, setCoords] = useState<{ left: number; top: number } | null>()
  const [triggerNode, setTriggerNode] = useState()

  const callbackRef = useCallback((node) => {
    if (node !== null) {
      const rect = node.getBoundingClientRect()
      setCoords({
        left: rect.x + rect.width / 2,
        top: rect.y + window.scrollY,
      })
      setTriggerNode(node)
    }
  }, [])

  useEffect(()=> {
    
    const getScrollParent = (
      node: (Node & ParentNode) | null | undefined
    ): (Node & ParentNode) | null => {
      if (!node) {
        return null
      }
  
      if (
        (node as HTMLElement).scrollHeight > (node as HTMLElement).clientHeight
      ) {
        return node
      } else {
        return getScrollParent(node.parentNode)
      }
    }

    if (isActive && triggerNode) {
      console.log(getScrollParent(triggerNode))
    }
  })

  

  return (
    <>
      {cloneElement(children, { ref: callbackRef })}
      {isActive &&
        createPortal(
          <div
            className="Tooltip"
            style={{ left: coords?.left, top: coords?.top }}
          >
            Hello from the Tooltip component
          </div>,
          document.body
        )}
    </>
  )
}
