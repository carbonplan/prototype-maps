import {
  Sidebar as SidebarComponent,
  SidebarDivider,
} from '@carbonplan/layouts'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Box, Flex } from 'theme-ui'
import { useAppContext } from './app-context'
import Approach from './approach'
import Datasets from './datasets'
import TimeSlider from './time-slider'
import Version from './version'

const Sidebar = () => {
  const router = useRouter()
  const { approach, dataset, datasets, version } = useAppContext()

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
            information, read the report or our blog post.
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
