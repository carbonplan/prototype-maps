import { Column, Row, Select } from '@carbonplan/components'
import { useMemo } from 'react'
import { Box } from 'theme-ui'

import { useAppContext } from './app-context'

const Sharding = () => {
  const { version, datasets, shardSize, setShardSize } = useAppContext()

  const shardSizes = useMemo(() => {
    return Array.from(datasets.reduce((a, d) => a.add(d.shardSize), new Set()))
  }, [datasets])

  return (
    <Row columns={3}>
      <Column start={1} width={1}>
        Shard size
      </Column>
      <Column start={2} width={2}>
        {version === 'v3' ? (
          <Select
            onChange={(e) => setShardSize(Number(e.target.value))}
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
