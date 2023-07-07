import React from 'react'
import { useDrag } from 'react-dnd'
import { BoxType } from 'src/types/Area.type'

const style: React.CSSProperties = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'move',
  float: 'left',
}

type DraggableRoleProps = {
  children: string
  id: string
  drop: (id: string) => void
}

const DraggableRole = function Box({ children, id, drop }: DraggableRoleProps) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: BoxType.BOX,
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
      if (dropResult) {
        drop(id)
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }))

  const opacity = isDragging ? 0.4 : 1
  return (
    <div ref={drag} style={{ ...style, opacity }} data-testid={`box`}>
      {children}
    </div>
  )
}

export default React.memo(DraggableRole)
