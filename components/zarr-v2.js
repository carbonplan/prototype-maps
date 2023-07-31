import { useState } from 'react'
import { useThemeUI } from 'theme-ui'
import { Map, Raster, Fill, Line, RegionPicker } from '@carbonplan/maps'
import { useThemedColormap } from '@carbonplan/colormaps'
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
  )
}

export default ZarrV2
