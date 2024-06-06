import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'

import { BsDatabase } from 'react-icons/bs'
import Dragables from '../DragDrop/Dragables'
const ControlOperators = () => {
  return (
    <>
      <div className="containerMf">
        <div className="headMf">
          <p>Control Operators</p>
          <IoIosArrowDown />
        </div>
        <div className="containerChildMf5">
          <Dragables warna={'#9a4aff'} id="Volume" icon={BsDatabase} label="Volume" />
          {/* <div>
            <BsDatabase color="white" size="17px" />
            <div className="lines"></div>
            <p>Volume</p>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default ControlOperators
