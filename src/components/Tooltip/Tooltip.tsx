import React, {
  ReactElement,
  cloneElement,
  useEffect,
  ReactNode,
  useRef,
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
  const triggerRef = useRef(null)

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
      getScrollParent(triggerRef.current, (node: Node) => {
        node.addEventListener('scroll', deactivate)
      })
    } else {
      getScrollParent(triggerRef.current, (node: Node) => {
        node.removeEventListener('scroll', deactivate)
      })
    }

    return () => {
      getScrollParent(triggerRef.current, (node: Node) => {
        node.removeEventListener('scroll', deactivate)
      })
    }
  })

  const getPos = (node: Element | null) => {
    if (node == null) {
      return { left: 0, top: 0 }
    }
    const rect = node.getBoundingClientRect()
    const coords = {
      left: rect.x + rect.width / 2,
      top: rect.y - rect.height,
    }

    return coords
  }

  return (
    <>
      {cloneElement(trigger, { ref: triggerRef })}
      {isActive &&
        createPortal(
          <div
            className="Tooltip"
            style={{
              left: getPos(triggerRef?.current).left,
              top: getPos(triggerRef?.current).top,
            }}
          >
            <div className="Tooltip__content">
              {content}
            </div>
          </div>,
          document.body
        )}
    </>
  )
}
