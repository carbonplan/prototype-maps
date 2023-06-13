import { useState } from 'react'
import { Box, Container, useThemeUI } from 'theme-ui'
import { Dimmer, Guide, Meta } from '@carbonplan/components'
import { Map, Raster, Fill, Line, RegionPicker } from '@carbonplan/maps'
import { useThemedColormap } from '@carbonplan/colormaps'
import DATASETS from '../data/zarr-v2'
import Sidebar from '../components/sidebar'
import { useAppContext } from '../components/app-context'

const bucket = 'https://storage.googleapis.com/carbonplan-maps/'

const Index = () => {
  const { theme } = useThemeUI()
  const [colormapName, setColormapName] = useState('warm')
  const colormap = useThemedColormap(colormapName)
  const { time } = useAppContext()
  const [showRegionPicker, setShowRegionPicker] = useState(false)
  const [regionData, setRegionData] = useState({ loading: true })
  const { source, clim, variable } = DATASETS[0]

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

      <Sidebar />
      <Box sx={{ position: 'absolute', top: 0, bottom: 0, width: '100%' }}>
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

export default Index
