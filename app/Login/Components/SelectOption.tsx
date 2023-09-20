import React, { Dispatch, SetStateAction } from 'react'

const SelectOption = ({option, selected, changeSelection}:{option:string, selected:string, changeSelection: Dispatch<SetStateAction<string>>}) => {
  return (
    <button type='button' className={`underline ${selected === option ? 'text-white' : 'text-[#9CA38E]'} hover:text-white`} onClick={() => changeSelection(option)}>
        {option}
    </button>
  )
}

export default SelectOption