import {
  Sidebar as SidebarComponent,
  SidebarDivider,
} from '@carbonplan/layouts'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Box, Flex } from 'theme-ui'
import Approach from './approach'
import Datasets from './datasets'
import TimeSlider from './time-slider'

const Sidebar = () => {
  const router = useRouter()
  const [approach, setApproach] = useState(null)

  useEffect(() => {
    if (router.pathname) {
      const [approachPath] = router.pathname.split('/').filter(Boolean)
      if (approachPath) {
        setApproach(approachPath)
      }
    }
  }, [router.pathname])

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
          <Approach approach={approach} setApproach={setApproach} />
          <Datasets
            dataset={router.query.dataset}
            disabled={!approach}
            setDataset={(e) =>
              approach &&
              router.push({
                pathname: `/${approach}/[dataset]`,
                query: { dataset: e.target.value },
              })
            }
          />
          <TimeSlider disabled={!approach} />
        </Flex>
      </SidebarComponent>
    </Box>
  )
}

export default Sidebar
