import React from 'react'

const TextInput = ({className, placeholder}:{className?: string, placeholder: string}) => {
  return (
    <input type="text" className={`bg-transparent transition-all border-b-2 border-white border-opacity-50 focus:border-opacity-100 hover:border-opacity-100 ${className}`} placeholder={placeholder} />
  )
}

export default TextInput