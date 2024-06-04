import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'

import { IoSpeedometerOutline } from 'react-icons/io5'
import { BsSpeedometer } from 'react-icons/bs'
import { GoStopwatch } from 'react-icons/go'
import { RiTimerLine } from 'react-icons/ri'
import { IoIosTimer } from 'react-icons/io'
const GroupOperators = () => {
  return (
    <>
      <div className="containerMf">
        <div className="headMf">
          <p>Group Operators</p>
          <IoIosArrowDown />
        </div>
        <div className="containerChildMf">
          <div style={{ backgroundColor: '#ffa14a' }}>
            <IoSpeedometerOutline color="white" size="17px" />
            <div className="lines"></div>
            <p>Level Of Service</p>
          </div>
          <div style={{ backgroundColor: '#ffa14a' }}>
            <BsSpeedometer color="white" size="17px" />
            <div className="lines"></div>
            <p>Gap</p>
          </div>
          <div style={{ backgroundColor: '#ffa14a' }}>
            <GoStopwatch color="white" size="17px" />
            <div className="lines"></div>
            <p>Near Miss</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default GroupOperators
