import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { PiUnionBold } from 'react-icons/pi'
import { PiLineSegmentLight } from 'react-icons/pi'
const SetOperators = () => {
  return (
    <>
      <div className="containerMf">
        <div className="headMf">
          <p>Set Operators</p>

          <IoIosArrowDown />
        </div>
        <div className="containerChildMf">
          <div style={{ backgroundColor: '#02cb6a' }}>
            <PiUnionBold color="white" size="17px" />
            <div className="lines"></div>
            <p>Union</p>
          </div>
          <div style={{ backgroundColor: '#02cb6a' }}>
            <PiUnionBold color="white" size="17px" />
            <div className="lines"></div>
            <p>Intersection</p>
          </div>
          <div style={{ backgroundColor: '#02cb6a' }}>
            <PiLineSegmentLight color="white" size="17px" />
            <div className="lines"></div>
            <p>Complement</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SetOperators
