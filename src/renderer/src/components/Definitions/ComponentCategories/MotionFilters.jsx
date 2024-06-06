import React from 'react'
import { DndContext, useDraggable, useDroppable } from '@dnd-kit/core'
import { IoIosArrowDown } from 'react-icons/io'
import { IoSpeedometerOutline } from 'react-icons/io5'
import { BsSpeedometer } from 'react-icons/bs'
import { GoStopwatch } from 'react-icons/go'
import { RiTimerLine } from 'react-icons/ri'
import { IoIosTimer } from 'react-icons/io'
import Dragables from '../DragDrop/Dragables'
import Dropables from '../DragDrop/Dropables'
import { CSS } from '@dnd-kit/utilities'
const MotionFilters = () => {
  return (
    <>
      <div className="containerMf">
        <div className="headMf">
          <p>Motions Filters</p>
          <IoIosArrowDown />
        </div>
        <div className="containerChildMf">
          <Dragables warna={'#4a9dff'} id="speed" icon={IoSpeedometerOutline} label="Speed" />
          <Dragables
            warna={'#4a9dff'}
            id="acceleration"
            icon={BsSpeedometer}
            label="Acceleration"
          />
          <Dragables
            warna={'#4a9dff'}
            id="stationary-duration"
            icon={GoStopwatch}
            label="Stationary Duration"
          />
          <Dragables
            warna={'#4a9dff'}
            id="time-of-occurrence"
            icon={RiTimerLine}
            label="Time of Occurence"
          />
          <Dragables
            warna={'#4a9dff'}
            id="duration-of-occurrence"
            icon={IoIosTimer}
            label="Duration of Occurence"
          />
          {/* <div className="boxMotionFilter">
            <IoSpeedometerOutline color="white" size="17px" />
            <div className="lines"></div>
            <p>Speed</p>
          </div>

          <div className="boxMotionFilter">
            <BsSpeedometer color="white" size="17px" />
            <div className="lines"></div>
            <p>Acceleration</p>
          </div>

          <div className="boxMotionFilter">
            <GoStopwatch color="white" size="17px" />
            <div className="lines"></div>
            <p>Stationary Duration</p>
          </div>

          <div className="boxMotionFilter">
            <RiTimerLine color="white" size="17px" />
            <div className="lines"></div>
            <p>Time of Occurence</p>
          </div>

          <div className="boxMotionFilter">
            <IoIosTimer color="white" size="17px" />
            <div className="lines"></div>
            <p>Duration of Occurence</p>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default MotionFilters
