/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'

import { ThemeProvider } from '@mui/material/styles'
import { Container, Grid } from '@mui/material'
import axios from 'axios'

import Navbar from './components/Navbar'
import theme from './theme'
import Header from './components/page/Header'
import SortParameterType from './types/SortParametet.type'
import ControllerType from './types/ControllerType.type'
import AnimationType from './types/AnimationType.type'
import Animations from './components/page/Animations'
import Loading from './components/page/Loading'

function App() {
  const [loading, setLoading] = React.useState<boolean>(true)

  const [sortParameter, setSortParameter] =
    React.useState<SortParameterType>(null)

  const [page, setPage] = React.useState<number>(1)

  const [controller, setController] = React.useState<ControllerType>({
    abort: (): void => {},
    signal: null,
  })

  const [animationList, setAnimationList] = React.useState<AnimationType[]>([])

  const onSortParameterChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = event.target.value as SortParameterType

    setAnimationList([])
    setPage(1)
    setSortParameter(newValue)
    fetchAnimationLists(newValue, 1)
  }

  const fetchAnimationLists = React.useCallback(
    async (
      sortbyParam: SortParameterType = sortParameter,
      pageParam: number = page
    ) => {
      try {
        setLoading(true)

        controller.abort()
        const newController = new AbortController()

        setController(newController)

        await axios
          .get(
            'https://kodoumo.ir/wp-json/api/v2/reviews-category/animations',
            {
              params: {
                sortby: sortbyParam,
                page: pageParam,
              },
              signal: newController.signal,
            }
          )
          .then(({ data }) => {
            setAnimationList((prev) => [...prev, ...data.data])
            setLoading(false)
          })
          .catch(() => {
            console.log('Request Failed')
          })
      } catch {
        console.log('Request Cancelled')
      }
    },
    [controller, page, sortParameter]
  )

  React.useEffect(() => {
    fetchAnimationLists()
  }, [])

  const handleScroll = React.useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop <
        document.documentElement.offsetHeight - 1 ||
      loading
    ) {
      return
    }

    const newPage = page + 1
    setPage(newPage)
    fetchAnimationLists(undefined, newPage)
  }, [loading])

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <ThemeProvider theme={theme}>
      <Navbar />

      <Container maxWidth='sm'>
        <Header
          sortParameter={sortParameter}
          onSortParameterChange={onSortParameterChange}
        />

        <Grid container spacing={1.5} marginTop={2} marginBottom={1}>
          <Animations list={animationList} />
          {loading && <Loading />}
        </Grid>
      </Container>
    </ThemeProvider>
  )
}

export default App
