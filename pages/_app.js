import { ThemeProvider, Box, Container } from 'theme-ui'
import { Dimmer, Guide, Header, Meta } from '@carbonplan/components'
import '@carbonplan/components/fonts.css'
import '@carbonplan/components/globals.css'
import '@carbonplan/maps/mapbox.css'
import theme from '@carbonplan/theme'
import Sidebar from '../components/sidebar'

import { AppProvider } from '../components/app-context'

const WIDTH = 3

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider {...pageProps}>
        <Meta
          card={'https://images.carbonplan.org/social/maps-demo.png'}
          description={
            'A prototype of an interactive mapping tool that parses and renders data stored in Zarr format.'
          }
          title={
            pageProps?.id
              ? `${pageProps.id} – Maps Prototypes`
              : 'Maps Prototypes'
          }
        />

        <Container>
          <Guide color='teal' />
        </Container>

        <Box
          sx={{
            position: 'absolute',
            top: 0,
            width: '100%',
            position: 'sticky',
            top: 0,
            zIndex: 5000,
          }}
        >
          <Container>
            <Header
              menuItems={[
                <Dimmer key='dimmer' sx={{ mt: '-2px', color: 'primary' }} />,
              ]}
            />
          </Container>
        </Box>

        <Box
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            width: '100%',
            left: 0,
            overflow: 'clip',
          }}
        >
          <Sidebar width={WIDTH} />
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              right: 0,
              left: [
                `calc(${6 - (6 - WIDTH)} * (100vw - 7 * 24px) / 6 + ${
                  12 - (6 - WIDTH)
                } * 24px)`,
                `calc(${8 - (6 - WIDTH)} * (100vw - 9 * 32px) / 8 + ${
                  12 - (6 - WIDTH)
                } * 32px)`,
                `calc(${12 - (12 - WIDTH)} * (100vw - 13 * 32px) / 12 + ${
                  12 - (12 - WIDTH)
                } * 32px)`,
                `calc(${12 - (12 - WIDTH)} * (100vw - 13 * 48px) / 12 + ${
                  12 - (12 - WIDTH)
                } * 48px)`,
              ],
            }}
          >
            <Component {...pageProps} />
          </Box>
        </Box>
      </AppProvider>
    </ThemeProvider>
  )
}

export default App
