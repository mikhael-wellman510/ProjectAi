import React from 'react'
import DefinitionsComponent from '../components/Definitions/DefinitionsComponent'
import SidebarDefinitions from '../components/Definitions/SidebarDefinitions'
import CameraDefinitions from '../components/Definitions/CameraDefinitions'
import ToolsDrag from '../components/Definitions/ToolsDrag'
import '../css/Definition.css'
const Definition = () => {
  return (
    <>
      <div className="containerPages">
        <div>
          <CameraDefinitions />
          <ToolsDrag />
        </div>
        <div>
          <SidebarDefinitions />
        </div>
      </div>
    </>
  )
}

export default Definition
