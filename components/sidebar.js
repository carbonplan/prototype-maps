import {
  Sidebar as SidebarComponent,
  SidebarDivider,
} from '@carbonplan/layouts'
import { Box } from 'theme-ui'
import TimeSlider from './time-slider'

const Sidebar = () => {
  return (
    <Box
      id='test'
      sx={{
        '& :first-child': {
          borderBottom: 0,
        },
      }}
    >
      <SidebarComponent expanded>
        <Box sx={{ mt: -7 }}>
          <Box as='h1' variant='styles.h4'>
            Visualizing Zarr data
          </Box>

          <Box>
            This is an interactive demonstration of different visualization
            approaches for visualizing geospatial data stored in Zarr. For more
            information, read the report or our blog post.
          </Box>
        </Box>

        <SidebarDivider sx={{ my: 4 }} />

        <TimeSlider />
      </SidebarComponent>
    </Box>
  )
}

export default Sidebar
