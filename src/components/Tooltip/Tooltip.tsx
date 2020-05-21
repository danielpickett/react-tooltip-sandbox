import React, {
  ReactElement,
  cloneElement,
  useEffect,
  ReactNode,
  useRef,
  useCallback,
  useState,
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
  const [tooltipElement, setTooltipElement] = useState<Element>()
  const tooltipRef = useCallback((node) => {
    if (node !== null) {
      setTooltipElement(node)
    }
  }, [])

  const [triggerElement, setTriggerElement] = useState<Element>()
  const triggerRef = useCallback((node) => {
    if (node !== null) {
      setTriggerElement(node)
    }
  }, [])

  useEffect(() => {
    if (triggerElement?.getBoundingClientRect)
      console.log('trigger', triggerElement?.getBoundingClientRect())
    if (tooltipElement?.getBoundingClientRect)
      console.log('tooltip', tooltipElement?.getBoundingClientRect())
  })

  // useEffect for attaching scroll listeners to all parents
  useEffect(() => {
    const getScrollParent = (
      node: (Node & ParentNode) | null | undefined,
      callback: (node: Node) => void,
    ): (Node & ParentNode) | null => {
      if (!node) {
        return null
      }
      callback(node)
      return getScrollParent(node.parentNode, callback)
    }

    if (isActive) {
      getScrollParent(triggerElement, (node: Node) => {
        node.addEventListener('scroll', deactivate)
      })
    } else {
      getScrollParent(triggerElement, (node: Node) => {
        node.removeEventListener('scroll', deactivate)
      })
    }

    return () => {
      getScrollParent(triggerElement, (node: Node) => {
        node.removeEventListener('scroll', deactivate)
      })
    }
  })

  const getTooltipPos = (
    _tooltipElement: Element | undefined,
    _triggerElement: Element | undefined
  ) => {
    if (
      _tooltipElement?.getBoundingClientRect == undefined ||
      _triggerElement?.getBoundingClientRect == undefined
    ) {
      return undefined
    }
    return {
      left:
        _triggerElement?.getBoundingClientRect().x +
        _triggerElement?.getBoundingClientRect().width / 2 -
        _tooltipElement?.getBoundingClientRect().width / 2,
      top:
        _triggerElement?.getBoundingClientRect().y -
        _tooltipElement?.getBoundingClientRect().height,
    }
  }

  return (
    <>
      {cloneElement(trigger, { ref: triggerRef })}
      {isActive &&
        createPortal(
          <div
            ref={tooltipRef}
            className="Tooltip"
            style={{
              left: getTooltipPos(tooltipElement, triggerElement)?.left,
              top: getTooltipPos(tooltipElement, triggerElement)?.top,
            }}
          >
            <div className="Tooltip__content">
              <div>{content}</div>
            </div>
          </div>,
          document.body
        )}
    </>
  )
}

//DOMRect {x: 357, y: 283, width: 378.640625, height: 34, top: 283, …}
