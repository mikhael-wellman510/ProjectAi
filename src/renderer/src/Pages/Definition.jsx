import React, { useEffect, useState } from 'react'
import DefinitionsComponent from '../components/Definitions/DefinitionsComponent'
import SidebarDefinitions from '../components/Definitions/SidebarDefinitions'
import CameraDefinitions from '../components/Definitions/CameraDefinitions'
import ToolsDrag from '../components/Definitions/ToolsDrag'
import '../css/Definition.css'
import DrawSettingTolls from '../components/Definitions/DrawSettingTolls'
import { DndContext } from '@dnd-kit/core'
const Definition = () => {
  const [datas, setDatas] = useState([])

  const handleDragEnd = (e) => {
    if (e.over && e.over.id === 'area-drop') {
      // Masukan data dan sumbu
      const data = { ...e.active.data.current, ...e.delta }

      setDatas((prevData) => [...prevData, data])
    }
  }

  return (
    <>
      <div className="containerPages">
        <DndContext onDragEnd={handleDragEnd}>
          <div>
            <DrawSettingTolls />
            <CameraDefinitions />
            <ToolsDrag datas={datas} />
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
