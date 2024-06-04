import React from 'react'
import '../../css/Definition.css'
import Operators from './Categories/Operators'
const SidebarDefinitions = () => {
  return (
    <>
      <div className="containerSideBar">
        <div className="boxParent">
          <div className="boxOptions">
            <p>Operators</p>
          </div>
          <div className="boxOptions">
            <p>Widgets</p>
          </div>
          <div className="boxOptions">
            <p>Slinks</p>
          </div>
        </div>
        {/* Sidebar isi nya */}
        <div className="containerSidebar2">
          <Operators />
        </div>
      </div>
    </>
  )
}

export default SidebarDefinitions
