import { useDraggable } from '@dnd-kit/core'
import React from 'react'
import { CSS } from '@dnd-kit/utilities'
const Dragables = ({ id, icon: Icon, label }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
    data: { id: id, icon: Icon, label: label }

    // data: { nama: 'Mikhael', umur: 30 }
  })
  const style = {
    // Outputs `translate3d(x, y, 0)`
    transform: CSS.Translate.toString(transform)
  }

  return (
    <>
      <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
        <div className="containerChildMf">
          <div className="boxMotionFilter">
            <Icon />
            <div className="lines"></div>
            <p>{label}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dragables
