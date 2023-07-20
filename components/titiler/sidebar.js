import React from 'react'
import {
  Sidebar as SidebarComponent,
  SidebarDivider,
} from '@carbonplan/layouts'
import { Box, Flex } from 'theme-ui'

export default function Sidebar() {
  return (
    <Box
      id='test'
      sx={{
        '& div:first-child': {
          borderBottom: 0,
        },
      }}
    >
      <SidebarComponent id="sidebarcomponent" expanded>
        <Box sx={{ mt: -6 }}>
          <Box as='h1' variant='styles.h4'>
            Visualizing Zarr data with titiler
          </Box>

          <Box>
            
          </Box>
        </Box>

        <SidebarDivider sx={{ my: 4 }} />

        <Flex sx={{ flexDirection: 'column', gap: 3 }}>
          <p>Lorem ipsum</p>
        </Flex>
      </SidebarComponent>
    </Box>
  )
}