import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'

import { IoSpeedometerOutline } from 'react-icons/io5'
import { BsSpeedometer } from 'react-icons/bs'
import { GoStopwatch } from 'react-icons/go'
import { RiTimerLine } from 'react-icons/ri'
import { IoIosTimer } from 'react-icons/io'
import Dragables from '../DragDrop/Dragables'
const GroupOperators = () => {
  return (
    <>
      <div className="containerMf">
        <div className="headMf">
          <p>Group Operators</p>
          <IoIosArrowDown />
        </div>
        <div className="containerChildMf3">
          <Dragables
            warna={'#ffa14a'}
            id="Level-of-service"
            icon={IoSpeedometerOutline}
            label="Level of Service"
          />
          <Dragables warna={'#ffa14a'} id="Gap" icon={BsSpeedometer} label="Gap" />
          <Dragables warna={'#ffa14a'} id="Near-Miss" icon={GoStopwatch} label="Near" />
          {/* <div style={{ backgroundColor: '#ffa14a' }}>
            <IoSpeedometerOutline color="white" size="17px" />
            <div className="lines"></div>
            <p>Level Of Service</p>
          </div> */}
          {/* <div style={{ backgroundColor: '#ffa14a' }}>
            <BsSpeedometer color="white" size="17px" />
            <div className="lines"></div>
            <p>Gap</p>
          </div> */}
          {/* <div style={{ backgroundColor: '#ffa14a' }}>
            <GoStopwatch color="white" size="17px" />
            <div className="lines"></div>
            <p>Near Misss</p>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default GroupOperators
