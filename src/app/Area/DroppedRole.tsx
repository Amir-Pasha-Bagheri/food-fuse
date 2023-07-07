import React from 'react'
import { useDrag } from 'react-dnd'

import { BoxType } from 'src/types/Area.type'

const style: React.CSSProperties = {
  position: 'absolute',
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  cursor: 'move',
}

interface BoxProps {
  id: string
  left: number
  top: number
  hideSourceOnDrag?: boolean
  children?: React.ReactNode
  pick: (id: string) => void
}

function DroppedRole({
  id,
  left,
  top,
  hideSourceOnDrag,
  children,
  pick,
}: BoxProps) {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: BoxType.BOX,
      item: { id, left, top },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [id, left, top]
  )

  const onRemoveRole = () => {
    pick(id)
  }

  if (isDragging && hideSourceOnDrag) {
    return <div ref={drag} />
  }
  return (
    <div
      className='box'
      ref={drag}
      style={{ ...style, left, top }}
      data-testid='box'
    >
      {children}

      <button onClick={onRemoveRole}>remove</button>
    </div>
  )
}

export default React.memo(DroppedRole)
