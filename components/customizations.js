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

const Customizations = () => {
  const colormap = useThemedColormap('warm')
  const { dataset, clim, setClim, colormapName, setColormapName } =
    useAppContext()

  return (
    <ExpandingSection label='Customizations'>
      <Box as='label' sx={sx.label}>
        {dataset?.variable}
        <Colorbar
          width='100%'
          colormap={colormap}
          horizontal
          units={dataset?.units}
          clim={clim}
          setClim={setClim}
        />
      </Box>
      <Box as='label' sx={sx.label}>
        Colormap
        <Select
          value={colormapName}
          onChange={(e) => setColormapName(e.target.value)}
          size='xs'
          sx={{ '& select': { width: '100%' } }}
        >
          {colormaps.map(({ name }) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </Select>
      </Box>
    </ExpandingSection>
  )
}

export default Customizations
