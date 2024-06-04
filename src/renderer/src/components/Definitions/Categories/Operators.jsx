import React from 'react'
import MotionFilters from '../ComponentCategories/MotionFilters'
import PropertyFilters from '../ComponentCategories/PropertyFilters'
import GroupOperators from '../ComponentCategories/GroupOperators'
import SetOperators from '../ComponentCategories/SetOperators'
import ControlOperators from '../ComponentCategories/ControlOperators'

const Operators = () => {
  return (
    <>
      <div className="containerOperator">
        <div>
          <MotionFilters />
        </div>
        <div>
          <PropertyFilters />
        </div>
        <div>
          <GroupOperators />
        </div>
        <div>
          <SetOperators />
        </div>
        <div>
          <ControlOperators />
        </div>
      </div>
    </>
  )
}

export default Operators
