import type { CSSProperties, ReactNode } from 'react'
import { useDrag } from 'react-dnd'

import { BoxType } from 'src/types/RoomFacilities.type'

const style: CSSProperties = {
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
  children?: ReactNode
}

export default function Box({
  id,
  left,
  top,
  hideSourceOnDrag,
  children,
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
    </div>
  )
}
