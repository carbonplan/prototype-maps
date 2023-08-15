import { colormaps, useThemedColormap } from '@carbonplan/colormaps'
import { Colorbar, Select } from '@carbonplan/components'
import { Box } from 'theme-ui'
import { useAppContext } from './app-context'
import ExpandingSection from './expanding-section'

const sx = {
  label: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    color: 'secondary',
    fontFamily: 'mono',
    letterSpacing: 'mono',
    fontSize: [1, 1, 1, 2],
    textTransform: 'uppercase',
  },
}

const TimeSeries = () => {
  const colormap = useThemedColormap('warm')
  const { dataset, clim, setClim, colormapName, setColormapName } =
    useAppContext()

  return <ExpandingSection label='Time series'>TK</ExpandingSection>
}

export default TimeSeries
