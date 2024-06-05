import { useDroppable } from '@dnd-kit/core'
import React from 'react'

const Dropables = (props) => {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id
  })

  const style = {
    opacity: isOver ? 1 : 0.5,

    backgroundColor: 'grey',
    width: '800px',
    height: '600px'
  }

  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  )
}

export default Dropables
