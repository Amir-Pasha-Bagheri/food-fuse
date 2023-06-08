import React from 'react'
import { Grid, Button, Typography } from '@mui/material'
import ActionSheet, { ActionSheetRef } from 'actionsheet-react'

import { ReactComponent as SortIcon } from '../../icons/sort.svg'
import Sort from './Sort'
import SortParameterType from '../../types/SortParametet.type'

type HeaderProps = {
  sortParameter: SortParameterType
  onSortParameterChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function Header({ sortParameter, onSortParameterChange }: HeaderProps) {
  const sortActionSheet = React.useRef<ActionSheetRef>(null)

  const openSortActionSheet = (): void => {
    sortActionSheet.current?.open()
  }

  return (
    <>
      <Grid
        container
        justifyContent='space-between'
        alignItems='center'
        marginTop='5px'
      >
        <Grid item>
          <Button
            color='secondary'
            endIcon={<SortIcon />}
            onClick={openSortActionSheet}
          >
            مرتب سازی
          </Button>
        </Grid>

        <Grid item>
          <Typography variant='subtitle1'>چیارو ببینه ؟</Typography>
          <Typography variant='subtitle2' marginTop='2px'>
            مناسب برای 3 تا 7 سال
          </Typography>
        </Grid>
      </Grid>

      <ActionSheet
        ref={sortActionSheet}
        zIndex={1200}
        sheetStyle={{
          bottom: -1,
        }}
        bgStyle={{ backgroundColor: '#00000039' }}
        bgTransition='opacity 0.3s ease-in-out, z-index 0.3s ease-in-out'
        sheetTransition='transform 0.3s ease-in-out'
      >
        <Sort
          sortParameter={sortParameter}
          onSortParameterChange={onSortParameterChange}
        />
      </ActionSheet>
    </>
  )
}

export default Header
