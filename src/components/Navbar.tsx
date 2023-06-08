import { AppBar, Button, Toolbar } from '@mui/material'
import { ReactComponent as Arrow } from '../icons/arrow_right.svg'

function Navbar() {
  return (
    <AppBar
      position='sticky'
      color='transparent'
      sx={{
        boxShadow: 'none',
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          justifyContent: 'end',
        }}
      >
        <Button color='secondary' endIcon={<Arrow />}>
          بازگشت
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
