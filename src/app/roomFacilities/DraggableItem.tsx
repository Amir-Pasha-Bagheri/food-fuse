import React from 'react'
import { useDrag } from 'react-dnd'
import { BoxType, FacilitiesType } from 'src/types/RoomFacilities.type'

const style: React.CSSProperties = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'move',
  float: 'left',
}

type DraggableItemProps = {
  children: string
  setFacilities: React.Dispatch<React.SetStateAction<FacilitiesType[]>>
}

const DraggableItem = function Box({
  children,
  setFacilities,
}: DraggableItemProps) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: BoxType.BOX,
    end: () => {
      setFacilities((prev) => [
        ...prev,
        {
          top: 0,
          left: 0,
          title: `${children} Here`,
          id: children || '',
        },
      ])
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

export default React.memo(DraggableItem)
