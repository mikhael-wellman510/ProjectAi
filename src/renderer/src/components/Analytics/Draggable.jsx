import React, { Children, useEffect, useState } from 'react'
import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'
const Draggable = (props) => {
  console.log('cek ,', props)
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
    data: { nama: 'Mikhael', umur: 30 }
  })

  const style = {
    // Outputs `translate3d(x, y, 0)`
    transform: CSS.Translate.toString(transform),
    width: '200px',
    backgroundColor: 'red'
  }

  return (
    <>
      <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
        {props.children}
      </div>
    </>
  )
}

export default Draggable
