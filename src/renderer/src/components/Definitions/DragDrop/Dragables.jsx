import { useDraggable } from '@dnd-kit/core'
import React, { useEffect } from 'react'
import { CSS } from '@dnd-kit/utilities'
const Dragables = ({ id, icon: Icon, label, styleModify, warna }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
    data: { id: id, icon: Icon, label: label, warna: warna }

    // data: { nama: 'Mikhael', umur: 30 }
  })

  useEffect(() => {
    console.log('cuk', styleModify)
  }, [])

  const style = {
    // Outputs `translate3d(x, y, 0)`
    transform: CSS.Translate.toString(transform)
  }

  return (
    <>
      <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
        <Icon size="15px" />
        <div className="lines"></div>
        <p>{label}</p>
      </div>
    </>
  )
}

export default Dragables
