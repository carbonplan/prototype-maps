import { Link } from '@carbonplan/components'
import {
  Sidebar as SidebarComponent,
  SidebarDivider,
} from '@carbonplan/layouts'
import { Box, Flex } from 'theme-ui'
import { useAppContext } from './app-context'
import Approach from './approach'
import Datasets from './datasets'
import TimeSlider from './time-slider'
import Version from './version'

const Sidebar = () => {
  const { dataset } = useAppContext()

  return (
    <Box
      sx={{
        '& div:first-child': {
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
            This is an interactive demonstration of different visualization
            approaches for visualizing geospatial data stored in Zarr. For more
            information, read the{' '}
            <Link href='https://nasa-impact.github.io/zarr-visualization-cookbook/'>
              cookbook
            </Link>{' '}
            or our blog post.
          </Box>
        </Box>

        <SidebarDivider sx={{ my: 4 }} />

        <Flex sx={{ flexDirection: 'column', gap: 3 }}>
          <Approach />

          <Version />

          <Datasets />

          {dataset && <TimeSlider />}
        </Flex>
      </SidebarComponent>
    </Box>
  )
}

export default Sidebar
