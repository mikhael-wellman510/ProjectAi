import React, { useState } from 'react'
import '../../css/Definition.css'
import Operators from './Categories/Operators'
import Widgets from './Categories/Widgets'
import Slinks from './Categories/Slinks'
const SidebarDefinitions = () => {
  const [activeComponent, setActiveComponent] = useState('operators')

  const HandleClick = (val) => {
    setActiveComponent(val)
  }

  return (
    <>
      <div className="containerSideBar">
        <div className="boxParent">
          <div
            onClick={() => HandleClick('operators')}
            className={activeComponent === 'operators' ? 'boxOptionsSelect' : 'boxOptions'}
          >
            <p>Operators</p>
          </div>
          <div
            onClick={() => HandleClick('widgets')}
            className={activeComponent === 'widgets' ? 'boxOptionsSelect' : 'boxOptions'}
          >
            <p>Widgets</p>
          </div>
          <div
            onClick={() => HandleClick('slinks')}
            className={activeComponent === 'slinks' ? 'boxOptionsSelect' : 'boxOptions'}
          >
            <p>Slinks</p>
          </div>
        </div>
        {/* Sidebar isi nya */}
        <div className="containerSidebar2">
          {activeComponent === 'operators' && <Operators />}
          {activeComponent === 'widgets' && <Widgets />}
          {activeComponent === 'slinks' && <Slinks />}
        </div>
      </div>
    </>
  )
}

export default SidebarDefinitions
