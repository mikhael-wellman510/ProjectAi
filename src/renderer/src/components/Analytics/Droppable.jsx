import { position } from '@chakra-ui/react'
import { useDroppable } from '@dnd-kit/core'
import React, { useRef } from 'react'

const Droppable = (props) => {
  //   const [datas, setDatas] = useState([])
  const { isOver, setNodeRef } = useDroppable({
    id: props.id
  })
  const style = {
    opacity: isOver ? 1 : 0.5,

    backgroundColor: 'grey',
    width: '800px',
    height: '600px'
  }
  //   console.log('apa : ', props)
  return (
    <div ref={setNodeRef} style={style}>
      {props.items.map((val, idx) => (
        <div key={idx} style={{ transform: `translate(${val.x}px, ${val.y}px)` }}>
          <p>Nama : {val.nama}</p>
          <p>Umur : {val.umur}</p>
        </div>
      ))}
    </div>
  )
}

export default Droppable
