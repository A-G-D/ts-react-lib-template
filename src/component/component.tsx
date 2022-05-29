import React, {
  useRef,
  useEffect,
  useState,
  HTMLProps,
  forwardRef,
  RefObject
} from 'react'
import PropTypes from 'prop-types'

import './component.scss'
import './component.sass'
import './component.less'
import './component.styl'
import './component.css'

export interface ComponentProps extends HTMLProps<HTMLDivElement> {
  ref?: RefObject<HTMLDivElement>
  className?: string
  onMount?: (element?: Element) => void
}

export const Component = forwardRef<HTMLDivElement, ComponentProps>(
  ({ children, className, onMount, ...props }, ref): JSX.Element => {
    const privateRef = useRef<HTMLDivElement>()
    ref = ref ?? privateRef

    const onMountRef = useRef<(element?: Element) => void>()
    onMountRef.current = onMount

    useEffect(
      () => onMountRef.current?.((ref as RefObject<HTMLDivElement>).current),
      []
    )

    return (
      <div
        className={['Component', className].join(' ').replace(/ +$/, '')}
        {...props}
        ref={ref}
      >
        {children}
      </div>
    )
  }
)

Component.displayName = 'Component'
Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onMount: PropTypes.func
}
