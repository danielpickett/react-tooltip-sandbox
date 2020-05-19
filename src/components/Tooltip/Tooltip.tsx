import React, {
  ReactElement,
  useCallback,
  useState,
  cloneElement,
  useEffect,
  ReactNode,
} from 'react'
import './Tooltip.scss'
import { createPortal } from 'react-dom'

export const Tooltip = ({
  trigger,
  content,
  isActive,
  deactivate,
}: {
  trigger: ReactElement
  content: ReactNode
  isActive: boolean
  deactivate: () => void
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

  useEffect(() => {
    console.log('it rendered')

    const getScrollParent = (
      node: (Node & ParentNode) | null | undefined,
      callback: (node: Node) => void
    ): (Node & ParentNode) | null => {
      if (!node) {
        return null
      }
      callback(node)
      return getScrollParent(node.parentNode, callback)
    }

    if (isActive) {
      getScrollParent(triggerNode, (node: Node) => {
        node.addEventListener('scroll', deactivate)
      })
    } else {
      getScrollParent(triggerNode, (node: Node) => {
        node.removeEventListener('scroll', deactivate)
      })
    }

    return () => {
      getScrollParent(triggerNode, (node: Node) => {
        node.removeEventListener('scroll', deactivate)
      })
    }
  })

  return (
    <>
      {cloneElement(trigger, { ref: callbackRef })}
      {isActive &&
        createPortal(
          <div
            className="Tooltip"
            style={{ left: coords?.left, top: coords?.top }}
          >
            {content}
          </div>,
          document.body
        )}
    </>
  )
}
