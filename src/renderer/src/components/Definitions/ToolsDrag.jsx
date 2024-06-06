import React, { useEffect, useState } from 'react'
import { RxCross2 } from 'react-icons/rx'
import { IoIosArrowDown } from 'react-icons/io'
import { DndContext, useDroppable } from '@dnd-kit/core'
import Dropables from './DragDrop/Dropables'
import Dragables from './DragDrop/Dragables'
import MotionFilters from './ComponentCategories/MotionFilters'
const ToolsDrag = ({ datas }) => {
  const [data, setData] = useState(null)
  const { isOver, setNodeRef } = useDroppable({
    id: 'area-drop'
  })

  useEffect(() => {
    if (datas) {
      setData(datas)
    }
  }, [datas])
  console.log(datas)
  return (
    <>
      <div className="tdContainer">
        <div className="td1">
          <IoIosArrowDown size="25px" />
          <RxCross2 size="25px" />
        </div>

        <div className="td2" ref={setNodeRef}>
          <div className="tdPlaceholder">
            <div className="td3">
              <p>Drag Tools Here</p>
            </div>
            <div>
              {/* Maping data dari motions Filter */}
              {data &&
                data.map((val, idx) => (
                  <div style={{ backgroundColor: val.warna }} className="toolsDragStyle">
                    <val.icon />
                    <div></div>
                    <p>{val.label}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ToolsDrag
