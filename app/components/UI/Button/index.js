import React from 'react'

import cn from 'classnames'

import './style.css'
import { Link } from 'react-router-dom'

export const Button = ({
  text,
  size = 'm',
  type = 'button',
  color = 'primary',
  onClick,
  className = '',
  asLink = false,
  url = '#'
}) =>
  asLink ? (
    <Link
      to={url}
      className={cn(
        `Button Button_size_${size}`,
        `Button_color_${color}`,
        className
      )}
    >
      {text}
    </Link>
  ) : (
    <button
      className={cn(
        `Button Button_size_${size}`,
        `Button_color_${color}`,
        className
      )}
      type={type}
      onClick={onClick}
    >
      <span>{text}</span>
    </button>
  )
