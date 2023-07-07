import React from 'react'
import { AreaRoleType } from 'src/types/Area.type'

export default function useDnD(items: AreaRoleType[]) {
  const deepCopyOfItems = JSON.parse(JSON.stringify(items))

  const [itemsToDrop, setItemsToDrop] =
    React.useState<AreaRoleType[]>(deepCopyOfItems)

  const [droppedItems, setDroppedItems] = React.useState<AreaRoleType[]>([])

  const drop = React.useCallback((id: string) => {
    setItemsToDrop((prev) => prev.filter((item) => item.id !== id))
    setDroppedItems((prev) => [
      ...prev,
      {
        top: 0,
        left: 0,
        title: `${id} Here`,
        id: id,
      },
    ])
  }, [])

  const pick = React.useCallback((id: string) => {
    setDroppedItems((prev) => prev.filter((item) => item.id !== id))
    setItemsToDrop((prev) => [
      ...prev,
      {
        top: 0,
        left: 0,
        title: `${id} Here`,
        id: id,
      },
    ])
  }, [])

  const move = React.useCallback(
    ({ id, left, top }: Omit<AreaRoleType, 'title'>) => {
      const deepCopyItems = JSON.parse(JSON.stringify(droppedItems))

      const currentFacility = deepCopyItems.findIndex(
        (facility: AreaRoleType) => facility.id === id
      )

      deepCopyItems[currentFacility] = {
        ...deepCopyItems[currentFacility],
        left,
        top,
      }

      setDroppedItems(deepCopyItems)
    },
    [droppedItems]
  )

  return {
    itemsToDrop,
    droppedItems,
    drop,
    pick,
    move,
  }
}
