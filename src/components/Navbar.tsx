import { AppBar, Button, Toolbar } from '@mui/material'
import { ReactComponent as Arrow } from '../icons/arrow_right.svg'

function Navbar() {
  return (
    <AppBar
      position='sticky'
      color='inherit'
      sx={{
        boxShadow: 'none',
      }}
    >
      <Toolbar
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
