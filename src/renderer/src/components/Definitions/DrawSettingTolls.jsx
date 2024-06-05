import React from 'react'
import { PiPolygon } from 'react-icons/pi'
import { TbArrowFork } from 'react-icons/tb'
import { FaPlus } from 'react-icons/fa6'
import { FaMinus } from 'react-icons/fa6'
import { GoScreenFull } from 'react-icons/go'
import { IoIosPause } from 'react-icons/io'
import { LuTable2 } from 'react-icons/lu'
import { BiCctv } from 'react-icons/bi'
import { LuLayers } from 'react-icons/lu'
import { MdOutlineCarCrash } from 'react-icons/md'
const DrawSettingTolls = () => {
  return (
    <>
      <div className="dst1">
        {/* Atas */}
        <div className="dst2">
          <div className="setDst1">
            <div style={{ borderBottom: '1px solid grey' }} className="boxDst1">
              <PiPolygon size="20px" />
            </div>
            <div>
              <p>tes</p>
            </div>
          </div>

          <div className="setDst1">
            <div className="boxDst1">
              <TbArrowFork size="20px" />
            </div>
            <div>
              <p>Tes 2</p>
            </div>
          </div>
        </div>

        {/* tengah */}
        <div className="dst3">
          <div>
            <div
              style={{
                borderTopRightRadius: '5px',
                borderTopLeftRadius: '5px',
                borderBottom: '1px solid grey'
              }}
              className="boxDst2"
            >
              <FaPlus size="20px" />
            </div>
            <div className="boxDst2">
              <FaMinus size="20px" />
            </div>
            <div
              style={{
                borderBottomLeftRadius: '5px',
                borderBottomRightRadius: '5px',
                borderTop: '1px solid grey'
              }}
              className="boxDst2"
            >
              <GoScreenFull size="20px" />
            </div>
          </div>
          <div className="boxDst1">
            <IoIosPause size="20px" />
          </div>

          <div className="boxDst1">
            <LuTable2 size="20px" />
          </div>
          <div className="boxDst1">
            <BiCctv size="20px" />
          </div>
        </div>

        <div className="dst4">
          <div className="boxDst1">
            <LuLayers size="20px" />
          </div>
          <div className="boxDst1">
            <MdOutlineCarCrash size="20px" />
          </div>
          <div className="boxDst1">
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                fontSize: '11px'
              }}
            >
              <p>All</p>
              <p>1230</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DrawSettingTolls
