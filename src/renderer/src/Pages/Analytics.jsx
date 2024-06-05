import React, { useState } from 'react'
import { DndContext } from '@dnd-kit/core'
import Draggable from '../components/Analytics/Draggable'
import Droppable from '../components/Analytics/Droppable'
import Test from '../components/Analytics/Test'

const Analytics = () => {
  const [parent, setParent] = useState(null)
  const [datas, setDatas] = useState([])

  function handleDragEnd(event) {
    console.log(event.delta)
    if (event.over.id === 'droppable') {
      const data = { ...event.active.data.current, ...event.delta }
      setDatas((prevDatas) => [...prevDatas, data])
      console.log('masuk', event)
    }
  }

  return (
    <>
      <DndContext onDragEnd={handleDragEnd}>
        <Draggable id="draggable">
          <div>
            <p>Asu</p>
            <p>pukimay</p>
          </div>
        </Draggable>

        <Droppable id="droppable" items={datas} />
        <Draggable id="draggable2" style={{ zIndex: 100 }}>
          <div>
            <p>Asu</p>
            <p>pukimass</p>
          </div>
        </Draggable>
        {/* Kirim kan data */}
        {/* <Droppable id="droppable" /> */}
      </DndContext>
    </>
  )
}

export default Analytics
