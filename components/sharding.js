import { Column, Row, Select } from '@carbonplan/components'
import { useMemo } from 'react'
import { Box } from 'theme-ui'

import { useAppContext } from './app-context'
import { DATASETS } from '../data/dynamic-client'

const Sharding = () => {
  const { version, projection, shardSize, setShardSize } = useAppContext()

  const shardSizes = useMemo(() => {
    return Array.from(
      DATASETS.filter(
        (d) => d.version === version && d.projection === projection
      ).reduce((a, d) => a.add(d.shardSize), new Set())
    )
  }, [version, projection])

  return (
    <Row columns={3}>
      <Column start={1} width={1}>
        Shard size
      </Column>
      <Column start={2} width={2}>
        {version === 'v3' ? (
          <Select
            onChange={(e) => setShardSize(e.target.value)}
            value={shardSize}
          >
            {shardSizes.map((p) => (
              <option key={p} value={p}>
                {p}MB
              </option>
            ))}
          </Select>
        ) : (
          <Box
            sx={{
              color: 'secondary',
              fontFamily: 'mono',
              letterSpacing: 'mono',
            }}
          >
            N/A
          </Box>
        )}
      </Column>
    </Row>
  )
}

export default Sharding