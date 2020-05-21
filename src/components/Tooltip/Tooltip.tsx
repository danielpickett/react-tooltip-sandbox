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
  const [tooltipRect, setTooltipRect] = useState<DOMRect>()
  const tooltipRef = useCallback((node) => {
    if (node !== null) {
      setTooltipRect(node.getBoundingClientRect())
    }
  }, [])

  const [triggerRect, setTriggerRect] = useState<DOMRect>()
  const triggerRef = useCallback((node) => {
    if (node !== null) {
      setTriggerRect(node.getBoundingClientRect())
    }
  }, [])

  const getTooltipPos = (
    _tooltipRect: DOMRect | undefined,
    _triggerRect: DOMRect | undefined
  ) => {
    if (_tooltipRect == undefined || _triggerRect == undefined) {
      return undefined
    }
    return {
      left: _triggerRect.x + _triggerRect.width / 2 - _tooltipRect.width / 2,
      top: _triggerRect.y - _tooltipRect.height
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
              left: getTooltipPos(tooltipRect, triggerRect)?.left,
              top: getTooltipPos(tooltipRect, triggerRect)?.top,
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
