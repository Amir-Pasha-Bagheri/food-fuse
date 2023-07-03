import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../assets/theme'
import Suspensor from './suspensor'
import DefaultLoader from './loaders/DefaultLoader'

const Dummy = React.lazy(() => import('./Dummy1'))

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Suspensor fallback={<DefaultLoader />}>
        <Dummy />
      </Suspensor>
    </ThemeProvider>
  )
}

export default App
