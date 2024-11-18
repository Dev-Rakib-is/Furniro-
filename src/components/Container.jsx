import React from 'react'

const Container = ({children, className}) => {
  return (
    <div className={`m-auto ${className}`}>{children}</div>
  )
}

export default Container