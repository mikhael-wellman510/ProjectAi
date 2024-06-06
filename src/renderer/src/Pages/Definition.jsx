import React, { useEffect, useRef, useState } from 'react'
import DefinitionsComponent from '../components/Definitions/DefinitionsComponent'
import SidebarDefinitions from '../components/Definitions/SidebarDefinitions'
import CameraDefinitions from '../components/Definitions/CameraDefinitions'
import ToolsDrag from '../components/Definitions/ToolsDrag'
import '../css/Definition.css'
import DrawSettingTolls from '../components/Definitions/DrawSettingTolls'
import { DndContext } from '@dnd-kit/core'
const Definition = () => {
  const [datas, setDatas] = useState([])
  const dropAreaRef = useRef(null)
  const handleDragEnd = (e) => {
    if (e.over && e.over.id === 'area-drop') {
      const dropAreaRect = dropAreaRef.current.getBoundingClientRect()
      const dragItemRect = e.active.rect.current.translated

      const dropX = dragItemRect.left - dropAreaRect.left
      const dropY = dragItemRect.top - dropAreaRect.top

      const newData = {
        ...e.active.data.current,
        relativeX: dropX,
        relativeY: dropY
      }

      console.log('ini')
      setDatas((prevData) => [...prevData, newData])
    }
  }

  return (
    <>
      <div className="containerPages">
        <DndContext onDragEnd={handleDragEnd}>
          <div>
            <DrawSettingTolls />
            <CameraDefinitions />
            <div ref={dropAreaRef}>
              <ToolsDrag datas={datas} />
            </div>
          </div>
          <div>
            <SidebarDefinitions />
          </div>
        </DndContext>
      </div>
    </>
  )
}

export default Definition
