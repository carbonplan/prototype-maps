import { Link } from '@carbonplan/components'
import {
  Sidebar as SidebarComponent,
  SidebarDivider,
} from '@carbonplan/layouts'
import { Box, Flex } from 'theme-ui'
import { useAppContext } from './app-context'
// import Approach from './approach'
import Chunking from './chunking'
import Customizations from './customizations'
import Datasets from './datasets'
import Projection from './projection'
import Sharding from './sharding'
import TimeSeries from './time-series'
import TimeSlider from './time-slider'
import Variable from './variable'
import Version from './version'

const Sidebar = () => {
  const { approach, dataset } = useAppContext()

  return (
    <Box
      sx={{
        '& div:first-of-type': {
          borderBottom: 0,
        },
      }}
    >
      <SidebarComponent expanded>
        <Box sx={{ mt: -6 }}>
          <Box as='h1' variant='styles.h4'>
            Visualizing Zarr data
          </Box>

          <Box>
            This is an interactive demonstration of the dynamic client approach
            for visualizing geospatial data stored in Zarr. For more
            information, read the{' '}
            <Link href='https://nasa-impact.github.io/zarr-visualization-cookbook/'>
              cookbook
            </Link>{' '}
            or more about{' '}
            <Link href='https://github.com/carbonplan/maps'>
              @carbonplan/maps
            </Link>
            .
          </Box>
        </Box>
        <SidebarDivider sx={{ my: 4 }} />
        <Flex sx={{ flexDirection: 'column', gap: 4 }}>
          {approach === 'dynamic-client' && (
            <>
              <Version />

              <Projection />

              <Sharding />

              <Chunking />

              <Variable />
            </>
          )}

          {approach === 'tiling' && <Datasets />}

          {dataset && <TimeSlider />}
        </Flex>
        <SidebarDivider sx={{ my: 4 }} />
        <Customizations />
        <SidebarDivider sx={{ my: 4 }} />
        <TimeSeries />
        <SidebarDivider sx={{ my: 4 }} />
      </SidebarComponent>
    </Box>
  )
}

export default Sidebar
