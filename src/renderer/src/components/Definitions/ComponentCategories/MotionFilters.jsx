import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { IoSpeedometerOutline } from 'react-icons/io5'
import { BsSpeedometer } from 'react-icons/bs'
import { GoStopwatch } from 'react-icons/go'
import { RiTimerLine } from 'react-icons/ri'
import { IoIosTimer } from 'react-icons/io'
const MotionFilters = () => {
  return (
    <>
      <div className="containerMf">
        <div className="headMf">
          <p>Motions Filters</p>
          <IoIosArrowDown />
        </div>
        <div className="containerChildMf">
          <div>
            <IoSpeedometerOutline color="white" size="17px" />
            <div className="lines"></div>
            <p>Speed</p>
          </div>
          <div>
            <BsSpeedometer color="white" size="17px" />
            <div className="lines"></div>
            <p>Acceleration</p>
          </div>
          <div>
            <GoStopwatch color="white" size="17px" />
            <div className="lines"></div>
            <p>Stationary Duration</p>
          </div>
          <div>
            <RiTimerLine color="white" size="17px" />
            <div className="lines"></div>
            <p>Time of Occurence</p>
          </div>
          <div>
            <IoIosTimer color="white" size="17px" />
            <div className="lines"></div>
            <p>Duration of Occurence</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default MotionFilters
