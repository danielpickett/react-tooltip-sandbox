import { ReactNode, useEffect } from "react"
import { createPortal } from "react-dom"

export const Portal = ({children}: {children: ReactNode}) => {
  // const mount = document.body
  // const el = document.createElement('div')
  // el.classList.add("Portal")

  // useEffect(() => {
  //   mount.appendChild(el)
  //   return () => {mount.removeChild(el)}
  // }, [el, mount])

  return createPortal(children, document.body)
}