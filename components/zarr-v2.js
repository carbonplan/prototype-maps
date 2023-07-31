import { useState } from 'react'
import { Box, Container, useThemeUI } from 'theme-ui'
import { Dimmer, Guide, Meta } from '@carbonplan/components'
import { Map, Raster, Fill, Line, RegionPicker } from '@carbonplan/maps'
import { useThemedColormap } from '@carbonplan/colormaps'
import Sidebar from './sidebar'
import { useAppContext } from './app-context'

const bucket = 'https://storage.googleapis.com/carbonplan-maps/'

const WIDTH = 3

const ZarrV2 = ({ dataset }) => {
  const { theme } = useThemeUI()
  const [colormapName, setColormapName] = useState('warm')
  const colormap = useThemedColormap(colormapName)
  const { time } = useAppContext()
  const [showRegionPicker, setShowRegionPicker] = useState(false)
  const [regionData, setRegionData] = useState({ loading: true })
  const { source, clim, variable } = dataset

  return (
    <>
      <Meta
        card={'https://images.carbonplan.org/social/maps-demo.png'}
        description={
          'A prototype of an interactive mapping tool that parses and renders data stored in Zarr v2 format.'
        }
        title={'Zarr v2 – Maps Prototypes'}
      />
      <Container>
        <Guide color='teal' />
      </Container>

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
        <Map zoom={2} center={[0, 0]}>
          <Fill
            color={theme.rawColors.background}
            source={bucket + 'basemaps/ocean'}
            variable={'ocean'}
          />
          <Line
            color={theme.rawColors.primary}
            source={bucket + 'basemaps/land'}
            variable={'land'}
          />
          <Raster
            key={source}
            colormap={colormap}
            clim={clim}
            mode={'texture'}
            source={source}
            variable={variable}
            selector={{ time }}
            regionOptions={{ setData: setRegionData }}
          />
        </Map>

        <Dimmer
          sx={{
            display: ['initial', 'initial', 'initial', 'initial'],
            position: 'absolute',
            color: 'primary',
            right: [13],
            bottom: [17, 17, 15, 15],
          }}
        />
      </Box>
    </>
  )
}

export default ZarrV2
