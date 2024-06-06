import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { IoSpeedometerOutline } from 'react-icons/io5'
import { BsSpeedometer } from 'react-icons/bs'
import { GoStopwatch } from 'react-icons/go'
import { FaCreditCard } from 'react-icons/fa'
import { IoColorPaletteOutline } from 'react-icons/io5'
import { FaCarSide } from 'react-icons/fa'
import Dragables from '../DragDrop/Dragables'
const PropertyFilters = () => {
  return (
    <>
      <div className="containerMf">
        <div className="headMf">
          <p>Property Filters</p>
          <IoIosArrowDown />
        </div>
        <div className="containerChildMf2">
          <Dragables
            warna={'#ff4a55'}
            id="License-Plate"
            icon={FaCreditCard}
            label="License-Plate"
          />
          <Dragables warna={'#ff4a55'} id="Color" icon={IoColorPaletteOutline} label="Color" />
          <Dragables warna={'#ff4a55'} id="Category" icon={FaCreditCard} label="Category" />

          {/* <div style={{ backgroundColor: '#ff4a55' }}>
            <IoColorPaletteOutline color="white" size="17px" />

            <div className="lines"></div>
            <p>Color</p>
          </div>
          <div style={{ backgroundColor: '#ff4a55' }}>
            <FaCarSide color="white" size="17px" />

            <div className="lines"></div>
            <p>Category</p>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default PropertyFilters
